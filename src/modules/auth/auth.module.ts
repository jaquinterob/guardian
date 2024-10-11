import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bishop, BishopSchema } from './models/bishop';
import { Ward, WardSchema } from './models/ward';
import { Stake, StakeSchema } from './models/stake';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Bishop.name, schema: BishopSchema },
      { name: Ward.name, schema: WardSchema },
      { name: Stake.name, schema: StakeSchema },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
