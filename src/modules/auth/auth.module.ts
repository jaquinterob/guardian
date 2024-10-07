import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bishop, BishopSchema } from './entities/bishop';
import { Ward, WardSchema } from './entities/ward';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Bishop.name, schema: BishopSchema },
      { name: Ward.name, schema: WardSchema },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
