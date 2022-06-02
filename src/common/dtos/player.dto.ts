import { Type } from 'class-transformer'
import {
  IsString,
  IsNumber,
  IsArray,
  Matches,
  ArrayContains,
  IsInstance,
  ValidateNested,
  Max,
  Min,
} from 'class-validator'
import { Positon, Skill } from '../types'

export class SkillDTO {
  @Matches(/defense | attack | speed | strength | stamina/, {
    message:
      'player avaliable skills are defence, attack, speed, strenght or stamina',
  })
  @IsString()
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
  @Matches(/defender|midfielder|forward/, {
    message: 'position must be defender, midfielder or forward',
  })
  position: Positon
}

interface SKill {
  skill: string
  value: number
}
export class CreatePlayerDTO extends PlayerDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SkillDTO)
  playerSkills: SkillDTO[]
}
