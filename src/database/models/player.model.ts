import {
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'
import { CreatePlayerDTO, PlayerDTO } from 'src/common/dtos'
import { IPlayer } from 'src/common/interfaces'
import { SkillModel } from './skill.model'

@Table({ freezeTableName: true, tableName: 'player' })
export class PlayerModel extends Model<IPlayer> {
  @Column
  name: string

  @Column
  position: string

  @HasMany(() => SkillModel)
  playerSkills: Array<SkillModel>
}
