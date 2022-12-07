import Redis from "ioredis";
import { redisEnv } from "../../app/envs/redis.env";
import { Growdever } from "../../app/models/growdever.model";

export class CacheConnection {

  private static _connection: Redis;

  public static async connect() {
    if(!this._connection) {
      this._connection = new Redis({
        host: redisEnv.host,
        port: redisEnv.port,
        username: redisEnv.username,
        password: redisEnv.password
      });
    }

    console.log('Redis está conectado! 🏆️');

    // APENAS PARA CONHECIMENTO

    // const result = await this.connection.get('user');
    // console.log(result);
    
    // const growdever = new Growdever('xupetinha', 1234, 89, ['node', 'redis']);

    // const result = await this.connection.set('growdever',JSON.stringify(growdever.toJson()));

    // const growdeverCache = await this._connection.get('growdever')
    // const gParse = JSON.parse(growdeverCache!);

    // const growdever = Growdever.create(gParse.nome, gParse.idade, gParse.cpf, gParse.id);

    // console.log(growdever);       
    
  }

  public static get connection() {
    if(!this._connection) {
      throw new Error('Redis não está conectado!')
    }
    return this._connection
  }

}