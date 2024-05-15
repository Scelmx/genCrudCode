// app.controller.ts
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { AppManageService } from './appManage.service';
import { AppListDto, AppUpdateDto, AppDeleteDto, AppAddDto } from './appManage.dto';
import { AppManage } from './appManage.entity';

@Controller('api/app')
export class AppManageController {
  constructor(private readonly appManageService: AppManageService) {}

  @Get('/list')
  async getList(@Body() dto: AppListDto): Promise<AppManage[]> {
    return this.appManageService.listByUserId(dto.userId);
  }

  @Post('/update')
  async updateApp(@Body() dto: AppUpdateDto) {
    return this.appManageService.update(dto.id, dto);
  }

  @Get('/del')
  async deleteApp(@Param('id') id: string): Promise<void> {
    const appId = parseInt(id);
    return this.appManageService.delete(appId);
  }

  @Post('/add')
  async addApp(@Body() dto: AppAddDto): Promise<AppManage> {
    return this.appManageService.add(dto);
  }
}
