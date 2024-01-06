const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying Token0 and Token1...");

  // Deploy Token0
  const Token0 = await hre.ethers.getContractFactory("Token0");
  const token0 = await Token0.deploy();
  await token0.waitForDeployment();

  console.log("Token0 deployed to:", token0.target);

  // Deploy Token1
  const Token1 = await hre.ethers.getContractFactory("Token1");
  const token1 = await Token1.deploy();
  await token1.waitForDeployment();

  console.log("Token1 deployed to:", token1.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });
