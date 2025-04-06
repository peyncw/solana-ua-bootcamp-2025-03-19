import { airdropIfRequired } from '@solana-developers/helpers';
import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl("devnet"));

const pubkey = new PublicKey("4xmCWBSSWykJhL8o6SSqGtPcnfDQWfDeXFQX159dtHHq");


// const airDrop1 = await airdropIfRequired(connection, pubkey, 1 * LAMPORTS_PER_SOL, 0.5 * LAMPORTS_PER_SOL);

// console.log("airdrop 1: ", airDrop1);

// await connection.requestAirdrop(pubkey, 1 * LAMPORTS_PER_SOL);

const balanceSol = await connection.getBalance(pubkey);

console.log("Balance in SOL: ", balanceSol);