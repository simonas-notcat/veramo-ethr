import { createAgent, IDIDManager, IKeyManager } from '@veramo/core'
import { DIDManager } from '@veramo/did-manager'
import { KeyManager } from '@veramo/key-manager'
import { EthrDIDProvider } from '@veramo/did-provider-ethr'
import { KeyManagementSystem, SecretBox } from '@veramo/kms-local'
import { Entities, KeyStore, DIDStore, migrations, PrivateKeyStore } from '@veramo/data-store'
import { DataSource } from 'typeorm'

const INFURA_PROJECT_ID = '3586660d179141e3801c3895de1c2eba'
const DB_ENCRYPTION_KEY = '29739248cad1bd1a0fc4d9b75cd4d2990de535baf5caadfdf8d8f86664aa830c'

let dbConnection = new DataSource({
  type: 'sqlite',
  database: './veramo.sqlite',
  migrations: migrations,
  migrationsRun: true,
  logging: ['error', 'info', 'warn'],
  entities: Entities,
}).initialize()

export const agent = createAgent<IDIDManager & IKeyManager>({
  plugins: [
    new KeyManager({
      store: new KeyStore(dbConnection),
      kms: {
        local: new KeyManagementSystem(new PrivateKeyStore(dbConnection, new SecretBox(DB_ENCRYPTION_KEY))),
      },
    }),
    new DIDManager({
      store: new DIDStore(dbConnection),
      defaultProvider: 'did:ethr',
      providers: {
        'did:ethr': new EthrDIDProvider({
          defaultKms: 'local',
          networks: [
            {
              network: 'goerli',
              name: 'goerli',
              rpcUrl: 'https://goerli.infura.io/v3/' + INFURA_PROJECT_ID,
              gas: 1000001,
              ttl: 31104001
            },
          ],
        }),
      },
    }),
  ],
})