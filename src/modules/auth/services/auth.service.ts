import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bishop } from '../models/bishop';
import { Ward } from '../models/ward';
import { LogginDto } from '../dtos/login.dto';
import { Stake } from '../models/stake';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Bishop.name) private readonly bishopModel: Model<Bishop>,
    @InjectModel(Ward.name) private readonly wardModel: Model<Ward>,
    @InjectModel(Stake.name) private readonly stakeModel: Model<Ward>,
  ) {}

  async login(loginDto: LogginDto) {
    const { username, password, wardId, stakeId } = loginDto;
    try {
      const retrievedStake = await this.stakeModel.findById(stakeId);
      const retrievedBishop = await this.bishopModel.findOne({
        username,
        wardId,
      });
      const retrievedWard = await this.wardModel.findById(wardId);

      if (!retrievedStake || !retrievedBishop) {
        throw new UnauthorizedException('USER_NOT_FOUND');
      }

      if (password !== retrievedBishop.password) {
        throw new UnauthorizedException('PASSWORD_INVALID');
      }

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
      throw new UnauthorizedException('INCONSISTENT_DATA');
    }
  }
}
