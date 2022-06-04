import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { SequelizeModule } from '@nestjs/sequelize'
import { Sequelize } from 'sequelize-typescript'
import config from 'src/config'
import { PlayerModel, SkillModel } from './models'
import { PlayerRepository } from './repositories'
import { SkillRepository } from './repositories/skill.repository'

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({ ...config().db, models: [PlayerModel, SkillModel] }),
    }),
    SequelizeModule.forFeature([SkillModel, PlayerModel]),
  ],
  providers: [PlayerRepository, SkillRepository],
  exports: [PlayerRepository, SkillRepository],
})
export class DatabaseModule {}
