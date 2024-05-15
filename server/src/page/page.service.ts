// page.service.ts
import { Injectable } from '@nestjs/common';
import { Page } from './page.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PageAddDto, PageUpdateDto } from './page.dto';

@Injectable()
export class PageService {
  constructor(
    @InjectRepository(Page)
    private pagesRepository: Repository<Page>,
  ) {}

  async findAll(appId: number, pageId: number): Promise<Page[]> {
    // Implement your logic to filter pages by appId and pageId if necessary
    return this.pagesRepository.find();
  }

  async update(pageId: number, updateData: PageUpdateDto) {
    await this.pagesRepository.update(pageId, updateData);
  }

  async delete(id: number): Promise<void> {
    await this.pagesRepository.delete(id);
  }

  async create(pageData: PageAddDto) {
    return this.pagesRepository.save(pageData);
  }
}
