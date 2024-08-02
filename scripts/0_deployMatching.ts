import { ethers } from "hardhat";


async function main(){
    const [signer] = await ethers.getSigners();
    
    const matchingImplementation = await ethers.deployContract("Matching", signer);
    matchingImplementation.waitForDeployment();
    
    const matchingAddress = await matchingImplementation.getAddress();
    console.log(`Deployed identity implementation at ${matchingAddress}`);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  