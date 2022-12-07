import { Growdever } from "../../../models/growdever.model";
import { CacheRepository } from "../../../shared/repositories/cache.repository";

export class GrowdeverCacheRepository {

  private repository = new CacheRepository();

  public mapEntityToModel(growdever: any) {
    return Growdever.create(
      growdever.nome,
      growdever.idade,
      growdever.cpf,
      growdever.id,
      growdever.skills
    );
  }

  public async list() {
    const result = await this.repository.get<Growdever[]>('growdevers');

    if(!result) return null;

    return result.map(item => this.mapEntityToModel(item));
  }

}