## Before

```bash
➜ yarn start
yarn run v1.22.19
$ ts-node ./add-key
Identifier did:ethr:goerli:0x036f6f27a78931214fdf62af59b4293e124e1fb4bc4ce268895abc87fcbd8379e7
New key {
  type: 'Secp256k1',
  kid: '0419842bd04f1328a0e54f9f1b57f238be9ab14287e3a041fe6814e2473c5c5021c7662f7792022d9e1ddada3e6fc6b8420b7d789475da5724069ee0a046955709',
  publicKeyHex: '0419842bd04f1328a0e54f9f1b57f238be9ab14287e3a041fe6814e2473c5c5021c7662f7792022d9e1ddada3e6fc6b8420b7d789475da5724069ee0a046955709',
  meta: {
    algorithms: [
      'ES256K',
      'ES256K-R',
      'eth_signTransaction',
      'eth_signTypedData',
      'eth_signMessage',
      'eth_rawSign'
    ]
  },
  kms: 'local'
}
Error: missing provider (operation="sendTransaction", code=UNSUPPORTED_OPERATION, version=abstract-signer/5.7.0)
    at Logger.makeError (/Users/simonas/dev/tmp/veramo-ethr/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/Users/simonas/dev/tmp/veramo-ethr/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at KmsEthereumSigner.Signer._checkProvider (/Users/simonas/dev/tmp/veramo-ethr/node_modules/@ethersproject/abstract-signer/src.ts/index.ts:330:38)
    at KmsEthereumSigner.<anonymous> (/Users/simonas/dev/tmp/veramo-ethr/node_modules/@ethersproject/abstract-signer/src.ts/index.ts:123:14)
    at step (/Users/simonas/dev/tmp/veramo-ethr/node_modules/@ethersproject/abstract-signer/lib/index.js:48:23)
    at Object.next (/Users/simonas/dev/tmp/veramo-ethr/node_modules/@ethersproject/abstract-signer/lib/index.js:29:53)
    at /Users/simonas/dev/tmp/veramo-ethr/node_modules/@ethersproject/abstract-signer/lib/index.js:23:71
    at new Promise (<anonymous>)
    at __awaiter (/Users/simonas/dev/tmp/veramo-ethr/node_modules/@ethersproject/abstract-signer/lib/index.js:19:12)
    at KmsEthereumSigner.Signer.sendTransaction (/Users/simonas/dev/tmp/veramo-ethr/node_modules/@ethersproject/abstract-signer/lib/index.js:139:16) {
  reason: 'missing provider',
  code: 'UNSUPPORTED_OPERATION',
  operation: 'sendTransaction'
}
```

## After 

```bash
➜ yarn start
yarn run v1.22.19
$ ts-node ./add-key
Identifier did:ethr:goerli:0x020a5d2291181edfdcbd91b14e1c3b6b7e39b1c18ed19b3eace01b52318d88157a
New key {
  type: 'Secp256k1',
  kid: '04bf7d8c740f0ac42ba7a8dd703272776ea64116509b3dfbb363bc6c210d0a5e3795881708c9e367cf344cb980947acba66657a18cb3cf4ddc0998f510ff4c52b5',
  publicKeyHex: '04bf7d8c740f0ac42ba7a8dd703272776ea64116509b3dfbb363bc6c210d0a5e3795881708c9e367cf344cb980947acba66657a18cb3cf4ddc0998f510ff4c52b5',
  meta: {
    algorithms: [
      'ES256K',
      'ES256K-R',
      'eth_signTransaction',
      'eth_signTypedData',
      'eth_signMessage',
      'eth_rawSign'
    ]
  },
  kms: 'local'
}
0x5617a43dcbf7914460fd4d4c71e0fa3c1fa87c60ad5a2042b63f10724181042b
```