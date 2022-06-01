import { Module } from '@nestjs/common'
import { PlayerService } from './player.service'
import { PlayerController } from './player.controller'
import { DatabaseModule } from '../../database/database.module'

@Module({
  imports: [DatabaseModule],
  providers: [PlayerService],
  controllers: [PlayerController],
})
export class PlayerModule {}
