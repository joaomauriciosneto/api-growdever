import "reflect-metadata";
import { CacheConnection } from "./main/database/cache.connection";
import { DatabaseConnection } from "./main/database/typeorm.connection";
import { runServer } from "./main/server/express.server";

// DatabaseConnection.connect().then(() => {
//     runServer();
// });

Promise.all([DatabaseConnection.connect(), CacheConnection.connect()])
    .then(runServer)
    .catch((error: any) => {
        console.log('Erro ao iniciar o servidor!');
        console.log(error);   
    })