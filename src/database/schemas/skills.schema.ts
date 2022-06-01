import { Schema } from 'mongoose'

export const SkillSchema = new Schema({
  skill: String,
  value: Number,
})
