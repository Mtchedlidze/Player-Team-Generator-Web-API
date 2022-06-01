import { IsString } from 'class-validator'
import { Positon, Skill } from '../types'

export class TeamProcessDTO {
  @IsString()
  position: Positon

  @IsString()
  mainSkill: Skill
}
