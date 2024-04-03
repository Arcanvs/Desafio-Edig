import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: null,
    database: "db_prueba",
    entities: ["src/entity/*.{js,ts}"],
    logging: true,
    synchronize: true,
})