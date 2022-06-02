import { Schema } from 'mongoose'
import { SkillSchema } from './skills.schema'

export const PlayerSchema = new Schema({
  name: String,
  position: String,
  playerSkills: {
    type: Schema.Types.ObjectId,
    ref: 'Skill',
  },
})
