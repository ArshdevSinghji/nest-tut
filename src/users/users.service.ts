import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      role: 'INTERN',
      address: {
        permanentAddress: 'MG Road',
        currentAddress: 'Jalandhar',
        pincode: 144411,
      },
      phoneNumber: [1203456789, 1023456789],
      age: 20,
      education: {
        Board: {
          tenth: 89,
          twelfth: 89,
        },
        university: {
          name: 'LPU',
          CGPA: 8.2,
        },
      },
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const userArr = this.users.filter((user) => user.role === role);
      if (userArr.length === 0)
        throw new NotFoundException(`no user with role: ${role}`);
      return userArr;
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('User not found!');
    return user;
  }

  create(user: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    if (!(user.email && user.name && user.role)) return;

    const newUser = {
      id: usersByHighestId[0].id + 1,
      name: user.name,
      email: user.email,
      role: user.role,
      address: user.address,
      phoneNumber: user.phoneNumber,
      age: user.age,
      education: user.education,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updatedUser: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }

  // upsert(id: number, updatedUser: UpdateUserDto) {
  //   const ifExsist = this.users.findIndex((user) => user.id === id);
  //   if (ifExsist !== -1) {
  //     return this.create(updatedUser);
  //   } else {
  //     return this.update(id, updatedUser);
  //   }
  // }
}
