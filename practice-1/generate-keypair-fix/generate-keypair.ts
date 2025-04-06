import { Keypair } from '@solana/web3.js';

const name = "shas"


let isSearching = true;
let matchedKey;
let matchedPubKey;

while(isSearching) {
	let keypair = Keypair.generate();
	let pubKey58 = keypair.publicKey.toBase58();
	console.log(pubKey58);
	if(pubKey58.includes(name)) {
		matchedPubKey = pubKey58;
		matchedKey = keypair;
		isSearching = !isSearching;
	}
}

const keyArr =  matchedPubKey?.split(name);

console.log("!   !    !    !    !    !    !");
console.log("keypair generated pubkey: ");
console.log(matchedPubKey);
console.log(`${keyArr![0]} !${name}! ${keyArr![1]}`);
console.log("Keypair generated secret: ", matchedKey?.secretKey);
