import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'
import { positionRegex } from './regex'

@ValidatorConstraint()
export class IsValidPosition implements ValidatorConstraintInterface {
  validate(
    position: string,
    validationArguments?: ValidationArguments,
  ): boolean {
    return positionRegex.test(position)
  }
}
