import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CustomProvidersService {
  constructor(
    @Inject('MY_CUSTOM_TOKEN')
    private readonly customToken: { message: string },
  ) {}

  getCustomMessage() {
    return this.customToken.message;
  }
}
