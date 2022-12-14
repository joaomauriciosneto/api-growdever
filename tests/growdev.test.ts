import {GrowdeverRepository} from '../src/app/features/growdever/repositories/growdever.repository'
import {ListGrowdeversUseCase} from '../src/app/features/growdever/usecases/list-growdevers.usecase'
import { CacheRepository } from '../src/app/shared/repositories/cache.repository';
import { CacheConnection } from '../src/main/database/cache.connection';
import { DatabaseConnection } from '../src/main/database/typeorm.connection';

describe('Initial tests', () => {
  // vai rodar antes de todos os testes do conjunto atual
  // iniciar a conexão
  beforeAll(async () => {
    await DatabaseConnection.connect();
    await CacheConnection.connect();
  })

  // encerrar a conexão
  afterAll(async () => {
    await DatabaseConnection.connection.destroy();
    await CacheConnection.connection.quit();
  })

  test('Should able return 2 when sum 1 + 1', () => {
    const result = 1 + 1;
    expect(result).toBe(2);
  });

  test('Should able return a user object with id attribute if the user is valid', () => {
    const user = {
      id: '12345-abc',
      nome: 'Sivuca',
      idade: 91
    }
    expect(user).toHaveProperty('id')
    expect(user.idade).toBeGreaterThan(10)
  });

  test('should able test an usecase', async () => {
    const sut = new ListGrowdeversUseCase(
      new GrowdeverRepository(),
      new CacheRepository()
    )
    const result = await sut.execute()
    expect(result).toBeDefined()
    expect(result).not.toBeNull()
  });
});
