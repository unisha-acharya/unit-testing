import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';

@Injectable()
export class LoginService {
  private users = [
    {
      email: 'unisha@gmail.com',
      password: 'test@123',
    },
    {
      email: 'bibek@gmail.com',
      password: 'test@123',
    },
    {
      email: 'selina@gmail.com',
      password: 'test@123',
    },
  ];

  create(createLoginDto: CreateLoginDto) {
    const { email } = createLoginDto;
    const user = this.users.find((user) => user.email === email);
    if (user) {
      return {
        status: 'success',
      };
    } else {
      throw new BadRequestException();
    }
  }
}
