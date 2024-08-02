import { ethers } from "hardhat";


async function main(){

    //need to put this hashes to the matching contract
    const [signer] = await ethers.getSigners();
    const matchingImp = await ethers.getContractFactory("Matching");
    const matchingImplement = await matchingImp.connect(signer).attach('0xa3C222BA94BF35b58B06235c00d1c327313862A4');
    
    for (var i = 0 ; i < 10000; i++){
        var prefix = (i).toString();
        var stringValue = 'Hello, World!' + prefix;
        const exampleBytes = new Uint8Array(Buffer.from(stringValue, 'utf-8'));
        const hashed = ethers.keccak256(exampleBytes);
        await matchingImplement.addHash(hashed);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
