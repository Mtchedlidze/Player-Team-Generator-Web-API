import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { SkillDTO } from '../../common/dtos'
import { Types } from 'mongoose'
@Injectable()
export class SkillsRepostiory {
  constructor(@InjectModel('Skill') private skillModel: Model<SkillDTO>) {}

  create(skill: SkillDTO[], playerId: Types.ObjectId) {
    const data = skill.map((skill) => ({ ...skill, playerId: playerId }))
    return this.skillModel.insertMany(data)
  }
}
