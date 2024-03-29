# Constant Product AMM

## Overview

This repository contains the implementation of a Constant Product Automated Market Maker (AMM). The AMM is a decentralized exchange mechanism that allows users to trade tokens directly on a blockchain without the need for a centralized authority or order book.

## Features

- **Constant Product Formula:** The AMM uses a constant product formula to determine token prices and adjust them automatically based on the ratio of tokens in the liquidity pool.
  
- **Liquidity Pool:** Users can provide liquidity to the decentralized exchange by depositing token pairs into a liquidity pool. Liquidity providers earn fees from trades in proportion to their share of the pool.
  
- **Token Swapping:** Traders can swap one token for another directly through the AMM, and the smart contract ensures that the constant product relationship is maintained.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Hardhat framework installed (`npm install --save-dev hardhat`)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Mide001/constant-product-amm
    ```

2. Navigate to the project directory:

    ```bash
    cd constant-product-amm
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Usage

1. Compile the smart contracts:

    ```bash
    npx hardhat compile
    ```

2. Deploy the smart contracts to a blockchain of your choice:

    ```bash
    npx hardhat run scripts/deploy.js --network localhost
    ```

3. Run tests:

    ```bash
    npx hardhat test
    ```

## Contributing

Feel free to contribute by opening issues, providing feedback, or submitting pull requests. Make sure to follow the code of conduct.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


