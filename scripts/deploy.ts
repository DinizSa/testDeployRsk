import { ethers } from "hardhat";
require("dotenv").config({ path: ".env" });

async function main() {
  const mockContract = await (await ethers.deployContract("mockContract")).waitForDeployment();

  console.log("mockContract address:", await mockContract.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
