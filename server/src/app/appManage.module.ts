// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppManage } from './appManage.entity';
import { AppManageService } from './appManage.service';
import { AppManageController } from './appManage.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AppManage])],
  controllers: [AppManageController],
  providers: [AppManageService],
})
export class AppManageModule {}