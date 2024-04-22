import NextAuth from "next-auth"
import SequelizeAdapter from '@auth/sequelize-adapter'
import { Sequelize } from 'sequelize'
import authConfig from './auth.config'
import db from './db/models';

// const db = new Sequelize({database: process.env.DB_NAME, username: process.env.DB_USER,
//                 password: process.env.DB_PASS, host: process.env.DB_HOST, dialect: "mysql"})
// const db = new Sequelize(process.env.DB_URI);

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: SequelizeAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
