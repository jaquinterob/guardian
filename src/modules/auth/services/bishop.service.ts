import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bishop } from '../models/bishop';
import { Ward } from '../models/ward';
import { Stake } from '../models/stake';
import { BishopDto } from '../dtos/bishop.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BishopService {
  private readonly logger = new Logger(BishopService.name);
  constructor(
    @InjectModel(Bishop.name) private readonly bishopModel: Model<Bishop>,
    @InjectModel(Ward.name) private readonly wardModel: Model<Ward>,
    @InjectModel(Stake.name) private readonly stakeModel: Model<Ward>,
  ) {}

  async create(bishopDto: BishopDto) {
    try {
      const existsWard = await this.#existsWard(bishopDto.wardId);
      if (!existsWard) {
        throw new NotFoundException(
          `Ward with ID ${bishopDto.wardId} does not exist`,
        );
      }

      await this.#existsAbishopForThisWardId(bishopDto.wardId);

      const saltRounds = 10;
      bishopDto.password = await bcrypt.hash(bishopDto.password, saltRounds);

      const bishop = new this.bishopModel(bishopDto);
      const bishopCreated = await bishop.save();
      this.logger.verbose(
        `New bishop registration completed successfully for username: ${bishopDto.username}.`,
      );
      return bishopCreated;
    } catch (error) {
      if (error.code === 11000) {
        this.logger.debug(`Bishop '${bishopDto.username}' already exists`);
        throw new ConflictException('Bishop already exists');
      } else {
        this.logger.debug(`Error creating bishop:`, error);
        throw new InternalServerErrorException('Failed to create bishop');
      }
    }
  }

  async #existsWard(wardId: string): Promise<boolean> {
    try {
      const ward = await this.wardModel.findById(wardId);
      return !!ward;
    } catch (error) {
      this.logger.debug(
        `Error checking existence of ward with ID ${wardId}:`,
        error,
      );
      throw new InternalServerErrorException('Error checking ward existence');
    }
  }

  async #existsAbishopForThisWardId(wardId: string): Promise<boolean> {
    try {
      const bishopCount = await this.bishopModel
        .countDocuments({ wardId })
        .exec();
      if (bishopCount > 0) {
        this.logger.debug('A bishop already exists for this ward');
        throw new ConflictException('A bishop already exists for this ward');
      }
      return false;
    } catch (error) {
      this.logger.error(
        `Error checking for bishop existence in ward ${wardId}: ${error.message}`,
      );
      throw new Error('Error checking bishop existence');
    }
  }
}
