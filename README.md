# Banking DApp

This project is a decentralized banking application (DApp) built on the Ethereum blockchain. It allows users to create accounts, deposit and withdraw funds, and transfer funds to other accounts. The frontend is built with React and uses the Ethers.js library to interact with the smart contract deployed on the Ethereum network.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Smart Contract](#smart-contract)
- [Frontend](#frontend)
- [Usage](#usage)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)
- [MetaMask](https://metamask.io/) extension installed in your browser

## Installation

### Smart Contract

1. Clone the repository:

    ```bash
    git clone https://github.com/AyushKr2003/ETH-AVAX-PROOF-Smart-Contract-Frontend-Integration.git
    cd ETH-AVAX-PROOF-Smart-Contract-Frontend-Integration
    ```

2. Install Hardhat:

    ```bash
    npm install --save-dev hardhat
    ```

3. Initialize Hardhat project:

    ```bash
    npx hardhat
    ```

4. Compile the smart contract:

    ```bash
    npx hardhat compile
    ```

5. Deploy the smart contract:

    ```bash
    npx hardhat run scripts/deploy.js --network localhost
    ```

### Frontend

1. Navigate to the `pages` directory:

    ```bash
    cd pages
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

## Smart Contract

The smart contract is written in Solidity and provides the following functionalities:

- Create an account
- Deposit funds
- Withdraw funds
- Transfer funds to another account
- Get the balance of the account

## Frontend
The frontend is built using React and Ethers.js. It interacts with the deployed smart contract and provides a user interface for users to perform various banking operations.

### Key Files
- `pages/index.js`: Main React component.
- `artifacts/contracts/bankingContract.sol/BankingContract.json`: ABI of the smart contract.

## Usage
- Make sure your Ethereum wallet (MetaMask) is connected and set up with the appropriate network.
- Run the smart contract and the frontend as described in the Installation section.
- Use the web interface to create an account, deposit funds, withdraw funds, and transfer funds.

## License
This project is licensed under the MIT License.