import { Injectable } from '@nestjs/common'
import { Sequelize, Transaction } from 'sequelize'
import { PlayerModel } from 'src/database/models'
import { PlayerRepository, SkillRepository } from 'src/database/repositories'
import { CreatePlayerDTO } from '../../common/dtos'
@Injectable()
export class PlayerService {
  constructor(
    private readonly playerRepository: PlayerRepository,
    private readonly skillRepository: SkillRepository,
  ) {}

  async create({ playerSkills, ...player }: CreatePlayerDTO) {
    try {
      const createdPlayer = await this.playerRepository.create(player)

      const skills = await this.skillRepository.create(
        playerSkills.map((s) => ({ ...s, playerId: createdPlayer.id })),
      )

      return { ...createdPlayer.toJSON(), playerSkills: skills }
    } catch (error) {
      throw new Error(error)
    }
  }
}
