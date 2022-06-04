import { Model } from 'sequelize-typescript'

export interface IPlayer extends Model {
  name: string
  position: string
}
