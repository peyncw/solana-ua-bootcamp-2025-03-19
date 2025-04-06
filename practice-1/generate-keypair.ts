import { Keypair } from '@solana/web3.js';

const keypair = Keypair.generate();

// console.log("keypair generated: ", keypair);
console.log("keypair generated: ", keypair.publicKey.toBase58());
console.log("keypair generated: ", keypair.secretKey);