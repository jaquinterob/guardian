import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bishop } from './entities/bishop';
import { Ward } from './entities/ward';
import { LogginDto } from './dto/login.dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Bishop.name) private readonly bishopModel: Model<Bishop>,
    @InjectModel(Ward.name) private readonly wardModel: Model<Ward>,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    return username + password;

    //throw new UnauthorizedException('Invalid credentials');
  }

  async login(loginDto: LogginDto) {
    const { username, password, wardId } = loginDto;

    const retrievedBishop = await this.bishopModel.findOne({
      username,
      wardId,
    });

    if (!retrievedBishop) {
      throw new UnauthorizedException('USER_NOT_FOUND');
    }

    if (password !== retrievedBishop.password) {
      throw new UnauthorizedException('PASSWORD_INVALID');
    }

    return {
      message: 'LOGIN_OK',
      bishopId: retrievedBishop._id,
      username: retrievedBishop.username,
      wardId: retrievedBishop.wardId,
    };
  }
}
