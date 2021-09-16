import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { CryptoModule } from 'src/crypto/crypto.module';

@Module({
  imports: [CryptoModule],
  controllers: [TokenController],
  providers: [TokenService],
})
export class TokenModule {}
