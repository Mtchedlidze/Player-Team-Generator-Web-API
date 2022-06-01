import { Injectable } from '@nestjs/common'
import { PlayerDTO } from '../../common/dtos'
import { PlayerRepository } from 'src/database/repositories/player.repo'
import { SkillsRepostiory } from 'src/database/repositories/skill.repo'

@Injectable()
export class PlayerService {
  constructor(
    private readonly playerRepository: PlayerRepository,
    private readonly skillRepository: SkillsRepostiory,
  ) {}

  async create(player: PlayerDTO) {
    const { playerSkills, name, position } = player

    return Promise.all([
      this.playerRepository.create({ name, position }),
      this.skillRepository.create(playerSkills),
    ])
  }
}
