import { Schema, Types } from 'mongoose'
export const SkillSchema = new Schema({
  skill: String,
  value: Number,
  playerId: Schema.Types.ObjectId,
})
