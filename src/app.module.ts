import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TokenModule } from './token/token.module';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [UserModule, TokenModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
