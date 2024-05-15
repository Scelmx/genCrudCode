// app.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppManage } from './appManage.entity';
import { AppAddDto, AppUpdateDto } from './appManage.dto';

@Injectable()
export class AppManageService {
  constructor(
    @InjectRepository(AppManage)
    private appRepository: Repository<AppManage>,
  ) {}

  async listByUserId(userId: number): Promise<AppManage[]> {
    return this.appRepository.find();
  }

  async update(id: number, updateData: AppUpdateDto) {
    await this.appRepository.update(id, updateData);
  }

  async delete(id: number): Promise<void> {
    await this.appRepository.delete(id);
  }

  async add(appData: AppAddDto): Promise<AppManage> {
    return this.appRepository.save(appData);
  }
}
