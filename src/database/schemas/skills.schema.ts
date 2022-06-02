import { Schema } from 'mongoose'
import { PlayerSchema } from './player.schema'

export const SkillSchema = new Schema({
  skill: String,
  value: Number,
  playerId: PlayerSchema,
})
