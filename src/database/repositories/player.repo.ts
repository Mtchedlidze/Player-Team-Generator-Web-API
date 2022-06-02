import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { PlayerDTO } from '../../common/dtos/player.dto'

@Injectable()
export class PlayerRepository {
  constructor(@InjectModel('Player') private playerModel: Model<PlayerDTO>) {}

  create(player: PlayerDTO) {
    return this.playerModel.create(player)
  }

  list(limit?: number, offset?: number) {
    return this.playerModel.find().populate('playerSkills')
  }
}
