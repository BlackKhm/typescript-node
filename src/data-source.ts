import { DataSource } from "typeorm";
import { Photo } from "./entity/Photo"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "moa",
  password: "password",
  database: "db_development",
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });