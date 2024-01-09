import { ethers } from "hardhat";
require("dotenv").config({ path: ".env" });

async function main() {
  //   const factory = await ethers.getContractFactory("TestA");
  //   const testA = await factory.deploy();

  const signers = await ethers.getSigners();
  const owners: string[] = signers
    .slice(0, 2)
    .map((signer) => signer.address.toLowerCase());
  const requiredSignatures = 2;

  const multiSigWallet = await ethers.deployContract("mockContract");

  // Wait for the contract to be deployed
  await multiSigWallet.waitForDeployment();
  console.log("multiSigWallet address:", await multiSigWallet.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
