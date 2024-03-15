//imports
const { ethers } = require("hardhat");

//async main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying...");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.waitForDeployment();
  console.log(`Deployed contract to : ${simpleStorage.target}`);

  const currentValue = await simpleStorage.retrieve();
  console.log("the favNum is ", currentValue);
  const transactionResponse = await simpleStorage.store(7);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`the updated value is ${updatedValue}`);
}

async function verify(contactAdress, args) {}

//main
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
