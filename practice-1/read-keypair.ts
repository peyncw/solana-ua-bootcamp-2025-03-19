import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';
import "dotenv/config";

const pk= process.env.PK;

if(!pk) {
	console.log("No private key provided");
	process.exit(1);
}

const asBytes = Uint8Array.from(JSON.parse(pk));
const keypair = Keypair.fromSecretKey(asBytes);
//4xmCWBSSWykJhL8o6SSqGtPcnfDQWfDeXFQX159dtHHq

console.log("Public key: ", keypair.publicKey.toBase58());

const base58PrivateKey = bs58.encode(keypair.secretKey);
console.log('🔑 Base58 private key:', base58PrivateKey);