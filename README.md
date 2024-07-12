# Personal Details Form on Ethereum

This project is a simple decentralized application (dApp) for storing and retrieving personal details on the Ethereum blockchain. The project includes a smart contract written in Solidity, deployment script using Hardhat, and a React frontend to interact with the smart contract.


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

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the development server:

    ```bash
    npm run dev
    ```
    Open http://localhost:3007 to view it in your browser.

## Deployment
### Deploy the contract locally :
   - First, start a local Hardhat node in one terminal:

        ```bash
        npx hardhat node
        ```
   - Then, in another terminal, run the deployment script:
    
        ```bash
        npx hardhat run --network localhost scripts/deploy.js
        ```
   - At last, start the frontend application in a new terminal:
        ```bash
        npm run dev
        ```
        Open http://localhost:3007 in your browser to view the application.    

## Project Structure
- `contracts/`: Contains the Solidity smart contract.
- `scripts/`: Contains the deployment script.
- `artifacts/`: Generated artifacts after contract compilation.
- `pages/`: Contains the React frontend code.


## Interacting with the dApp

### Connect Wallet
Click on the `Connect Metamask` button to connect your Metamask wallet to the dApp.
### Set Details
Fill in your name, age, and post in the input fields.
Click the `Set Details` button to store your details on the blockchain.
### Get Details
Click the `Get Details` button to retrieve your details from the blockchain.
### Get Details by Address
Enter an account address in the `Address` input field.
Click the "Get Details by address" button to retrieve the details stored under that address (only accessible by the contract owner).
### Clear Details
Click the `Clear Details` button to clear the displayed details.


## Smart Contract
The smart contract is written in Solidity and provides the following functionalities:

- Set personal details (name, age, post) for the user.
- Get personal details of the user.
- Get personal details of any user by the contract owner.

## Frontend
The frontend is built using React and Ethers.js. It interacts with the deployed smart contract and provides a user interface for users to set and retrieve their personal details.

## License
This project is licensed under the MIT License.