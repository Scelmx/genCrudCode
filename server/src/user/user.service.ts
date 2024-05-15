// user.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async update(id: number, userData: Partial<User>) {
    return await this.usersRepository.update(id, userData);
  }

  async delete(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async create(userData: User): Promise<User> {
    const newUser = this.usersRepository.create(userData);
    return this.usersRepository.save(newUser);
  }
}