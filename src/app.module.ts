import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PlayerModule } from './modules/player/player.module'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PlayerModule],
})
export class AppModule {}
