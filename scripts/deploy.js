async function main(){
    const BankingContract = await ethers.getContractFactory("BankingContract");
    const hardhat = await BankingContract.deploy();
    await hardhat.deployed();
    console.log("Banking Contract deployed to: ", hardhat.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
