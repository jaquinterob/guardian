import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MinistrationModule } from './modules/ministrations/ministration.module';
import { YouthModule } from './modules/youth/youth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    AuthModule,
    MinistrationModule,
    YouthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
