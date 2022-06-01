import { IsString, IsNumber, IsArray } from 'class-validator'
import { Positon } from '../types'

export class SkillDTO {
  @IsString()
  skill: string

  @IsNumber()
  value: number
}

export class PlayerDTO {
  @IsString()
  name: string

  @IsString()
  position: Positon

  @IsArray()
  playerSkills: SkillDTO[]
}
