import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import config from 'src/config'
import { PlayerRepository } from './repositories/player.repo'
import { SkillsRepostiory } from './repositories/skill.repo'
import { PlayerSchema, SkillSchema } from './schemas'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        ...config().db,
      }),
    }),

    MongooseModule.forFeature([
      { name: 'Player', schema: PlayerSchema },
      { name: 'Skill', schema: SkillSchema },
    ]),
  ],
  providers: [SkillsRepostiory, PlayerRepository],
  exports: [SkillsRepostiory, PlayerRepository],
})
export class DatabaseModule {}
