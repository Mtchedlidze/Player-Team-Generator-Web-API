import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import config from 'src/config'
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
})
export class DatabaseModule {}
