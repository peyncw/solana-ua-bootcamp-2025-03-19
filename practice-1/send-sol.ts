import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, TransactionInstruction, clusterApiUrl, sendAndConfirmRawTransaction } from '@solana/web3.js';
import "dotenv/config";

const pk= process.env.PK;

if(!pk) {
	console.log("No private key provided");
	process.exit(1);
}

const asBytes = Uint8Array.from(JSON.parse(pk));
const keypair = Keypair.fromSecretKey(asBytes);

const connection = new Connection(clusterApiUrl("devnet"));

const rec = new PublicKey("");

const tx = new Transaction();

const sendSolIx = SystemProgram.transfer({
	fromPubkey: keypair.pubkey,
	toPubkey: rec,
	lamports: 5_000_000
});

const addMemoInstruction = new TransactionInstruction({
	keys: [{pubkey: keypair.publicKey, isSigned: true, isWritable: false}],
	data: Buffer.from(memoText, 'utf-8'),
	programId: memoProgram
})

tx.add(sendSolIx);

const signature=  await connection.sendTransaction(tx, [keypair]);
console.log(signature);

///4xmCWBSSWykJhL8o6SSqGtPcnfDQWfDeXFQX159dtHHq

