import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Transaction } from 'sequelize'
import { SkillDTO } from 'src/common/dtos'
import { ISkill } from 'src/common/interfaces'
import { SkillModel } from '../models'

@Injectable()
export class SkillRepository {
  logger: Logger = new Logger('skill.repository')

  constructor(@InjectModel(SkillModel) private skillModel: typeof SkillModel) {
    this.skillModel.sync().then(() => this.logger.log('skill.model synced'))
  }

  public create(skill: SkillDTO[]) {
    return this.skillModel.bulkCreate(skill)
  }
}
