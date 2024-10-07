import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { MONGO_CONNECT_LOCAL } from './db/mongo';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_CONNECT || MONGO_CONNECT_LOCAL,
      }),
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
