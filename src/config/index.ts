import { SequelizeModuleOptions } from '@nestjs/sequelize'

const pgConfig = (): SequelizeModuleOptions => ({
  dialect: 'postgres',
  database: process.env.PG_DB,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: parseInt(process.env.PG_PORT, 10),
  host: process.env.PG_HOST,
})

export default () => ({
  db: {
    ...pgConfig(),
  },
})
