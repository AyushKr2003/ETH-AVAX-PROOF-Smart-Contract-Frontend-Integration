import {useState, useEffect} from "react";
import {ethers} from "ethers";
import bank_abi from "../artifacts/contracts/bankingContract.sol/BankingContract.json";

export default function Home() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [bank, setBank] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const bankABI = bank_abi.abi;  

  const getWallet = async()=> {
    if(window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if(ethWallet){
      const account = await ethWallet.request({method: "eth_requestAccounts"});
      handleAccount(account);
    }
  }

  const handleAccount = (account) =>{
    if(account){
      console.log("Account: ", account);
      setAccount(account);
    } else {
      console.log("No account found");
    }
  }

  const connetAccount = async()=>{
    if(!ethWallet){
      alert("Metamask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({method: "eth_requestAccounts"});
    handleAccount(accounts);

    getBankContract();
  }

  const getBankContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const bankContract = new ethers.Contract(contractAddress, bankABI, signer);
    setBank(bankContract);
  }

  const getBalance = async() => {
    if(bank){
      setBalance(Number((await bank.getBalance())));
      // console.log("Balance: ", balance);
    }
  }

  const createAccount = async() => {
    if(bank){
        await bank.creatAccount();
        console.log("Account created");
        getBalance();
    }
  }

  const deposit = async() => {
    if (bank) {
      await bank.deposit(100);
      getBalance();
    }
  }

  const withdraw = async() => {
    if (bank) {
      await bank.withdraw(100);
      getBalance();
    }
  }

  const onChnageHandle = ()=> {
    setAddress(event.target.value);
  }

  const transfer = async() => {
    console.log(address);
    if(bank){
      
      await bank.transfer(address,100);
      
      console.log(address);
    }
  }

  const init = () => {
    if(!ethWallet){
      return <p>Please install Metamask</p>
    }

    if(!account){
      return <button onClick={connetAccount}>Connect Metamask</button>
    }

    
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    if(bank.account(signer.getAddress())){
      getBalance();
    }

    

    return (
      <div >
        <h1>Banking Contract</h1>
        <p>Account: {account}</p>
        <button onClick={getBalance}>Show Balance</button>
        <p>Balance: {balance}</p>
        <button onClick={createAccount} >Create Account</button>
        <button onClick={deposit} >Deposit 100</button>
        <button onClick={withdraw} >Withdraw 100</button>
        <label>
        Account Address: <input name="address" value = {address} onChange={onChnageHandle} />
        <button onClick={transfer}>Transfer 100</button>
        <p>{address}</p>
      </label>
      </div>
    )
  }

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      {init()}
      <style jsx>{`
        .container {
          text-align: center
        }
      `}
      </style>
    </main>
  )
}