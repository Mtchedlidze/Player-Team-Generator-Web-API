import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { WhereOptions } from 'sequelize'
import { PlayerDTO } from 'src/common/dtos'
import { PlayerModel, SkillModel } from '../models'

@Injectable()
export class PlayerRepository {
  logger: Logger = new Logger('player.repository')

  constructor(
    @InjectModel(PlayerModel) private playerModel: typeof PlayerModel,
  ) {
    this.playerModel.sync().then(() => this.logger.log('player.model synced'))
  }

  public create(player: PlayerDTO) {
    return this.playerModel.create(player)
  }

  list({
    limit,
    offset,
    where,
  }: {
    where?: WhereOptions<PlayerModel>
    limit?: number
    offset?: number
  }) {
    return this.playerModel.findAll({
      where,
      limit,
      offset,
      include: [SkillModel],
    })
  }

  public update(id: number, player: PlayerDTO) {
    return this.playerModel.update(player, {
      where: { id },
    })
  }

  public delete(id: number) {
    return this.playerModel.destroy({
      where: {
        id,
      },
    })
  }
}
