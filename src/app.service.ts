import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHealthyCheck() {
    return {
      status: 'OK',
      message: 'Application is Up',
    };
  }
}
