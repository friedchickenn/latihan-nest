import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { ProfileModule } from './profile/profile.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    JwtModule.register({
      secret: "a123b123c123d123"
    }),
    ProfileModule,
    ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
