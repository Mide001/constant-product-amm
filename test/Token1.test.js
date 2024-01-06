const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Token1 Contract", function () {
    let Token1;
    let token1;
    let owner;
    let addr1;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();

        // Deploy the Token1 contract before each test
        Token1 = await ethers.getContractFactory("Token1");
        token1 = await Token1.deploy();
    });

    it("Deployment should assign the totalSupply of tokens to the owner", async function () {
        const ownerBalance = await token1.balanceOf(owner.address);
        const totalSupply = await token1.totalSupply();

        expect(ownerBalance).to.equal(totalSupply);
    });

    it("mint function should increase the balance of the caller", async function () {
        const amountToMint = 100;

        await token1.mint(amountToMint);

        const ownerBalanceAfterMint = await token1.balanceOf(owner.address);

        expect(ownerBalanceAfterMint).to.equal(amountToMint);
    });
});