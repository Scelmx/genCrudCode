// page.dto.ts
export class PageListDto {
  appId: number;
  pageId?: number;
}

export class PageUpdateDto {
  appId: number;
  pageId: number;
  schema: string;
  name: string;
  url: string;
  type: string;
  icon: string;
}

export class PageDeleteDto {
  id: number;
}

export class PageAddDto {
  schema: string;
  name: string;
  url: string;
  type: string;
  icon: string;
}
