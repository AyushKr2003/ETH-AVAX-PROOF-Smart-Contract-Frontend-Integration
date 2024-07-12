async function main(){
    const FormContract = await ethers.getContractFactory("form");
    const hardhat = await FormContract.deploy();
    await hardhat.deployed();
    console.log("Contract deployed to: ", hardhat.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})
