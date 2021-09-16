import { Injectable } from '@nestjs/common';
import { CryptoService } from 'src/crypto/crypto.service';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';

@Injectable()
export class TokenService {
  constructor(private readonly cryptoService: CryptoService) {}

  create(createTokenDto: CreateTokenDto) {
    return this.cryptoService.generateRandomString(24);
  }

  findAll() {
    return `This action returns all token`;
  }

  findOne(id: number) {
    return `This action returns a #${id} token`;
  }

  update(id: number, updateTokenDto: UpdateTokenDto) {
    return `This action updates a #${id} token`;
  }

  remove(id: number) {
    return `This action removes a #${id} token`;
  }
}
