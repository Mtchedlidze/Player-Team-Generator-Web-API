import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { SkillDTO } from '../../common/dtos'

@Injectable()
export class SkillsRepostiory {
  constructor(@InjectModel('Skill') private skillModel: Model<SkillDTO>) {}

  create(skill: SkillDTO[]) {
    return this.skillModel.insertMany(skill)
  }
}
