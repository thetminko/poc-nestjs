import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from 'src/user/user.module';
import { config } from '../config';
import { ApiService } from './api.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: 'mysql',
        host: configService.get('db.host'),
        port: 3306,
        username: configService.get('db.username'),
        password: configService.get('db.password'),
        database: configService.get('db.schema'),
        autoLoadModels: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
  ],
  providers: [ApiService],
})
export class ApiModule {}
