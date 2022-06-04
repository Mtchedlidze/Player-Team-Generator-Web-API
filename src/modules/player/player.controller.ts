import { BadRequestException, Body, Controller, Post } from '@nestjs/common'
import { CreatePlayerDTO } from 'src/common/dtos'
import { PlayerService } from './player.service'

@Controller('api')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('player')
  async create(@Body() player: CreatePlayerDTO) {
    try {
      return await this.playerService.create(player)
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}
