// SPDX-License-Identifier: MIT
// This is a simple Solidity smart contract for an ERC20 token named "Token 1 Test" with symbol "T1T".

pragma solidity ^0.8.18;

// Import the ERC20 contract from the OpenZeppelin library.
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Token1 contract inherits from ERC20, making it an ERC20-compliant token.
contract Token1 is ERC20 {
    
    // Constructor to initialize the token with a name and symbol during deployment.
    constructor() ERC20("Token 1 Test", "T1T") {}

    /**
     * @dev Mints new tokens and assigns them to the caller.
     * @param _amount The amount of tokens to mint and assign.
     * @notice This function can only be called by the token owner.
     */
    function mint(uint256 _amount) public {
        // _mint is a function provided by the ERC20 contract to create new tokens.
        // It is used here to mint and assign tokens to the address of the caller (msg.sender).
        _mint(msg.sender, _amount);
    }
}
