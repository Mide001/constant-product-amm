const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token0 Contract", function () {
    let Token0;
    let token0;
    let owner;
    let addr1;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();

        // Deploy the Token0 contract before each test
        Token0 = await ethers.getContractFactory("Token0");
        token0 = await Token0.deploy();
    });

    it("Deployment should assign the totalSupply of tokens to the owner", async function () {
        const ownerBalance = await token0.balanceOf(owner.address);
        const totalSupply = await token0.totalSupply();

        expect(ownerBalance).to.equal(totalSupply);
    });

    it("mint function should increase the balance of the caller", async function () {
        const amountToMint = 100;

        await token0.mint(amountToMint);

        const ownerBalanceAfterMint = await token0.balanceOf(owner.address);

        expect(ownerBalanceAfterMint).to.equal(amountToMint);
    });
});
