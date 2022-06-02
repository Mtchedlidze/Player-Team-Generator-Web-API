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

  async create({ playerSkills, ...playerData }: CreatePlayerDTO) {
    const player = (await this.playerRepository.create(playerData)).toObject()
    const skills = (
      await this.skillRepository.create(playerSkills, player._id)
    ).map((x) => x.toObject())

    const createdPlayer: CreatePlayerDTO = {
      ...player,
      playerSkills: skills,
    }
    return createdPlayer
  }

  async find() {
    return this.playerRepository.list()
  }
}
