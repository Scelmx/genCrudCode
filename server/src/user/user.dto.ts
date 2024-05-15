// user.dto.ts
export class UserListDto {
  userId: number;
}

export class UserUpdateDto {
  id: number;
  name: string;
  password: string;
  role: number;
  isDeleted: number;
}

export class UserDeleteDto {
  id: number;
}

export class UserAddDto {
  id: number;
  name: string;
  password: string;
  role: number;
}
