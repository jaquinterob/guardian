import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bishop } from '../models/bishop';
import { Ward } from '../models/ward';
import { LoginDto } from '../dtos/login.dto';
import { Stake } from '../models/stake';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    @InjectModel(Bishop.name) private readonly bishopModel: Model<Bishop>,
    @InjectModel(Ward.name) private readonly wardModel: Model<Ward>,
    @InjectModel(Stake.name) private readonly stakeModel: Model<Ward>,
  ) {}

  async login(loginDto: LoginDto) {
    const { username, password, wardId, stakeId } = loginDto;
    try {
      const retrievedStake = await this.stakeModel.findById(stakeId);
      const retrievedBishop = await this.bishopModel.findOne({
        username,
        wardId,
      });
      const retrievedWard = await this.wardModel.findById(wardId);

      if (!retrievedStake || !retrievedBishop) {
        this.logger.debug('bishop not found');
        throw new UnauthorizedException('USER_NOT_FOUND');
      }

      const passwordMatch = await bcrypt.compare(
        password,
        retrievedBishop.password,
      );
      if (!passwordMatch) {
        this.logger.debug('bishop password invalid');
        throw new UnauthorizedException('PASSWORD_INVALID');
      }

      this.logger.verbose(
        `Successful login for bishop '${loginDto.username}' at ${new Date().toISOString()}.`,
      );
      return {
        message: 'LOGIN_OK',
        bishop: {
          _id: retrievedBishop._id,
          name: retrievedBishop.name,
          ward: retrievedWard.name,
          stake: retrievedStake.name,
        },
      };
    } catch (error) {
      this.logger.debug('Inconsistent data encountered during login attempt.');
      throw new UnauthorizedException('INCONSISTENT_DATA');
    }
  }

  async textToEncrypt(text: string): Promise<string> {
    this.logger.verbose('Encrypting text...');
    const saltRounds = 10;
    try {
      const encryptedText = await bcrypt.hash(text, saltRounds);
      this.logger.verbose('Text encrypted.');
      return encryptedText;
    } catch (error) {
      this.logger.error('Encryption failed.', error.stack);
      throw new Error('Encryption failed');
    }
  }
}
