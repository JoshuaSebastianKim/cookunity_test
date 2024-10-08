import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import * as Joi from 'joi';
import { GoogleStrategy } from './strategies';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { CardModule } from './card/card.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        GOOGLE_CLIENT_ID: Joi.string().required(),
        GOOGLE_CLIENT_SECRET: Joi.string().required(),
        GOOGLE_CALLBACK_URL: Joi.string().required(),
        APP_JWT_SECRET: Joi.string().required(),
      }),
    }),
    AuthModule,
    PassportModule,
    JwtModule.register({
      global: true,
    }),
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      include: [CardModule],
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema/schema.gql'),
    }),
    UserModule,
    CardModule,
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy, JwtStrategy],
})
export class AppModule {}
