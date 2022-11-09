import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

describe('LoginController', () => {
  let controller: LoginController;
  let loginService: LoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginController],
      providers: [LoginService],
    }).compile();

    controller = module.get<LoginController>(LoginController);
    loginService = module.get<LoginService>(LoginService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should be defined', () => {
    expect(loginService).toBeDefined();
  });

  describe('create', () => {
    it('should throw an error', async () => {
      jest.spyOn(loginService, 'create').mockImplementationOnce(() => {
        throw new BadRequestException();
      });

      try {
        const response = await controller.create({
          email: 'bibek@gmail.com',
          password: 'test@123',
        });
      } catch (err) {
        console.log(err);
      }
    });
  });
});
