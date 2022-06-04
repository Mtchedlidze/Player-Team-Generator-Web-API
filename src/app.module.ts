import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './database/database.module'
import { PlayerModule } from './modules/player/player.module'
// import { PlayerModule } from './modules/player/player.module'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PlayerModule],
})
export class AppModule {}
