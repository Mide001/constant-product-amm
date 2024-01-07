const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("CPAMM Contract", () => {
    let CPAMM;
    let cpamm;
    let Token0;
    let Token1;
    let token0;
    let token1;
    let owner;
    let addr1;
    let addr2;


    beforeEach(async () => {
        [owner, addr1, addr2] = await ethers.getSigners();

        Token0 = await ethers.getContractFactory("Token0");
        token0 = await Token0.deploy();

        Token1 = await ethers.getContractFactory("Token1");
        token1 = await Token1.deploy();

        CPAMM = await ethers.getContractFactory("CPAMM");
        cpamm = await CPAMM.deploy(token0.target, token1.target);
    });


    it("should add liquidity and remove liquidity", async () => {
        // Mint some tokens for testing
        await token0.mint(1000);
        await token1.mint(1000);


        // Approve CPAMM contract to spend tokens
        await token0.approve(cpamm.target, 1000);
        await token1.approve(cpamm.target, 1000);


        // Add liquidity
        await cpamm.addLiquidity(500, 500);

        // Check if liquidity was added successfully
        expect(await cpamm.totalSupply()).to.equal(500);

        // Remove liquidity
        await cpamm.removeLiquidity(500);

        expect(await cpamm.totalSupply()).to.equal(0);
    });

    it('Should swap tokens', async () => {
        // Mint some tokens for testing
        await token0.mint(1000);
        await token1.mint(1000);
    
        // Approve CPAMM contract to spend tokens
        await token0.approve(cpamm.target, 1000);
        await token1.approve(cpamm.target, 1000);
    
        // Add liquidity
        await cpamm.addLiquidity(500, 500);
    
        // Swap tokens
        await cpamm.swap(token0.target, 100);
    
        // Check if the swap was successful
        const token0Balance = await token0.balanceOf(owner.address);
        const token1Balance = await token1.balanceOf(owner.address);
    
        expect(token0Balance).to.be.lessThan(900); // Depending on the swap implementation
        expect(token1Balance).to.be.greaterThan(100); // Depending on the swap implementation
      });
});