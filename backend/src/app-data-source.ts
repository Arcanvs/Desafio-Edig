import { DataSource } from "typeorm"
import * as dotenv from "dotenv"

dotenv.config();

export const myDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: process.env.DB_USER,
    password: null,
    database: process.env.DB_NAME,
    entities: ["src/entity/*.{js,ts}"],
    logging: true,
    synchronize: true,
})