// import { DataSource } from "typeorm";

// const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     username: "docker",
//     password: "ignite",
//     database: "rentx",
//     migrations: ["./migrations/**/*.ts"],

// });

// AppDataSource.initialize()
//     .then(() => {
//         console.log("Data Source has been initialized!");
//     })
//     .catch((err) => {
//         console.error("Error during Data Source initialization:", err);
//     });
import { createConnection } from "typeorm";
createConnection();