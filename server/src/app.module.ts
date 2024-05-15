import { Module } from '@nestjs/common';
import { AppManageModule } from './app/appManage.module';
import { UserModule } from './user/user.module';
import { PageModule } from './page/page.module';

@Module({
  imports: [
    AppManageModule,
    UserModule,
    PageModule
  ],
})
export class AppModule {}
