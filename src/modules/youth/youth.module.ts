// src/modules/youth/youth.module.ts
import { Module } from '@nestjs/common';
import { YouthController } from './controllers/youth.controller';
import { YouthService } from './services/youth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Youth, YouthSchema } from './models/youth';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Youth.name, schema: YouthSchema }]),
  ],
  controllers: [YouthController],
  providers: [YouthService],
})
export class YouthModule {}
