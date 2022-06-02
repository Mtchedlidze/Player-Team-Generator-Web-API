import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'
import { SkillDTO } from '../dtos'
import { skillRegex } from './regex'

@ValidatorConstraint()
export class IsSkillsArray implements ValidatorConstraintInterface {
  validate(
    skills: SkillDTO[],
    validationArguments?: ValidationArguments,
  ): boolean {
    for (const { skill, value } of skills) {
      if (typeof value !== 'number' || !skillRegex.test(skill)) {
        return false
      }
      return true
    }
  }
}
