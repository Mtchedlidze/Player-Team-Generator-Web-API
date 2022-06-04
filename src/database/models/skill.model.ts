import {
  Column,
  Model,
  Table,
  IsInt,
  BelongsTo,
  ForeignKey,
  NotNull,
  AllowNull,
} from 'sequelize-typescript'
import { ISkill } from 'src/common/interfaces'
import { PlayerModel } from './player.model'

@Table({ freezeTableName: true, tableName: 'skill' })
export class SkillModel extends Model<ISkill> {
  @Column
  skill: string

  @IsInt
  @Column
  value: number

  @BelongsTo(() => PlayerModel)
  player: PlayerModel

  @ForeignKey(() => PlayerModel)
  @Column({ allowNull: false })
  playerId: number
}
