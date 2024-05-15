// app.dto.ts
export class AppListDto {
  userId: number;
}

export class AppUpdateDto {
  id: number;
  name: string;
  isDeleted: number;
  isDisabled: number;
  delayDate: number;
}

export class AppDeleteDto {
  id: number;
}

export class AppAddDto {
  id: number;
  userId: number;
  name: string;
  isDeleted: number;
  isDisabled: number;
  delayDate: number;
}
