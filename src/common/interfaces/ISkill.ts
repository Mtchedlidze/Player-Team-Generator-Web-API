import { Model } from 'sequelize-typescript'

export interface ISkill extends Model {
  skill: string
  value: number
  playerId: number
}
