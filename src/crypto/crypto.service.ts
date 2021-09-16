import { Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class CryptoService implements OnModuleInit {
  instance: CryptoService = null;

  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    this.instance = this.moduleRef.get(CryptoService);
  }

  getInstance(): CryptoService {
    return this.instance;
  }

  generateRandomString(length: number): string {
    const chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }
}
