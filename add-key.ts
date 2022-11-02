import { agent } from './setup'

const main = async () => {
  const identifier = await agent.didManagerGetOrCreate({
    alias: 'default',
    options: {
      network: 'goerli'
    }
  })

  console.log('Identifier', identifier.did)

  const key = await agent.keyManagerCreate({
    kms: 'local',
    type: 'Secp256k1'
  })

  console.log('New key', key)

  const result = await agent.didManagerAddKey({
    did: identifier.did,
    key
  })

  console.log(result)
}

main().catch(console.log)