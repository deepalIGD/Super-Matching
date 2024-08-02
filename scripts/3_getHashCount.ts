import { ethers } from "hardhat";
async function main(){

    const [signer] = await ethers.getSigners();
    const matchingImp = await ethers.getContractFactory("Matching");
    const matchingImplement = await matchingImp.connect(signer).attach('0xa3C222BA94BF35b58B06235c00d1c327313862A4');
    
 
    const count = await matchingImplement.getCount();
    console.log("Added hash count", count);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });