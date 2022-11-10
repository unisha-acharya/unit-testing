import { User } from 'src/users/entities/user.entity';

export const userStub = (): User => {
  return {
    userId: '123',
    email: 'test@email.com',
    age: 27,
    favoriteFoods: ['pizza', 'momo'],
  };
};
