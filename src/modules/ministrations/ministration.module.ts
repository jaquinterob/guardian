import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ministration, MinistrationSchema } from './models/ministration';
import { MinistrationController } from './controllers/ministration.controller';
import { MinistrationService } from './services/ministration.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ministration.name, schema: MinistrationSchema },
    ]),
  ],
  controllers: [MinistrationController],
  providers: [MinistrationService],
})
export class MinistrationModule {}
