import { CacheConnection } from "../../../main/database/cache.connection";

export class CacheRepository {

  private repository = CacheConnection.connection;

  public async get(cahve: string) {
    const result = await this.repository.get(cahve)

    if(!result) return null;

    return JSON.parse(result);
  }

  public async set(cahve: string, data: any) {
    await this.repository.set(cahve, JSON.stringify(data));
  }

  public async delete(cahve: string) {
    return this.repository.del(cahve)
  }

}