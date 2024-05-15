// page.controller.ts
import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { PageService } from './page.service';
import {
  PageListDto,
  PageUpdateDto,
  PageDeleteDto,
  PageAddDto,
} from './page.dto';

@Controller('/page')
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Get('/list')
  async getList(@Body() dto: PageListDto): Promise<any> {
    return this.pageService.findAll(dto.appId, dto.pageId);
  }

  @Post('/update')
  async updatePage(@Body() dto: PageUpdateDto): Promise<any> {
    return this.pageService.update(dto.pageId, dto);
  }

  @Get('/del')
  async deletePage(@Param('id') id: string): Promise<any> {
    const pageId = parseInt(id);
    if (isNaN(pageId)) {
      throw new BadRequestException('Invalid page ID');
    }
    return this.pageService.delete(pageId);
  }

  @Post('/add')
  async addPage(@Body() dto: PageAddDto): Promise<any> {
    return this.pageService.create(dto);
  }
}
