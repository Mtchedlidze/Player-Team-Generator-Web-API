import { Injectable } from '@nestjs/common'
import { CreatePlayerDTO, PlayerDTO } from '../../common/dtos'
import { PlayerRepository } from 'src/database/repositories/player.repo'
import { SkillsRepostiory } from 'src/database/repositories/skill.repo'

@Injectable()
export class PlayerService {
  constructor(
    private readonly playerRepository: PlayerRepository,
    private readonly skillRepository: SkillsRepostiory,
  ) {}

  async create({ playerSkills, ...player }: CreatePlayerDTO) {
    return Promise.all([
      this.playerRepository.create(player),
      this.skillRepository.create(playerSkills),
    ])
  }

  async find() {
    return this.skillRepository.find()
  }
}
