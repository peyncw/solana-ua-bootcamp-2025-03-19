import * as bip39 from 'bip39';
import { derivePath } from 'ed25519-hd-key';
import { Keypair } from '@solana/web3.js';

import { airdropIfRequired } from '@solana-developers/helpers';
import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl("devnet"));

const pubkey = new PublicKey("CRj2AzpBd373LuUsmv3geKwfuTaRsDcjbpNKeJECy4u1");

// const airDrop1 = await airdropIfRequired(connection, pubkey, 1 * LAMPORTS_PER_SOL, 0.5 * LAMPORTS_PER_SOL);

// console.log("airdrop 1: ", airDrop1);

// const balanceSol = await connection.getBalance(pubkey);

// console.log("Balance in SOL: ", balanceSol);


// const mnemonic = bip39.generateMnemonic();
// console.log('Seed phrase: ', mnemonic);


// const seed = await bip39.mnemonicToSeed(mnemonic); 


// const derivationPath = "m/44'/501'/0'/0'";


// const derivedSeed = derivePath(derivationPath, seed.toString('hex')).key;


// const keypair = Keypair.fromSeed(derivedSeed); 

// console.log('Public key:', keypair.publicKey.toBase58());

// Seed phrase:  shoot stable remove moral flip salon solar beyond rally ridge economy cage
// Public key: CRj2AzpBd373LuUsmv3geKwfuTaRsDcjbpNKeJECy4u1