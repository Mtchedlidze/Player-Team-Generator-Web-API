import {
  IsString,
  IsNumber,
  IsArray,
  Matches,
  Max,
  Min,
  Validate,
} from 'class-validator'
import { Positon } from '../types'
import { IsValidPosition } from '../validator/positon.validator'
import { skillRegex } from '../validator/regex'
import { IsSkillsArray } from '../validator/skill.validator'

export class SkillDTO {
  @IsString()
  @Matches(skillRegex, {
    message:
      'player avaliable skills are defense, attack, speed, strenght or stamina',
  })
  skill: string

  @IsNumber()
  @Min(1)
  @Max(100)
  value: number
}

export class PlayerDTO {
  @IsString()
  name: string

  @IsString()
  @Validate(IsValidPosition, {
    message: 'position must be defender, midfielder or forward',
  })
  position: Positon
}

export class CreatePlayerDTO extends PlayerDTO {
  @IsArray()
  @Validate(IsSkillsArray, {
    message: 'skills array must include object with skill and value properties',
  })
  playerSkills: SkillDTO[]
}
