import {useState, useEffect} from "react";
import {ethers} from "ethers";
import Form_abi from "../artifacts/contracts/form.sol/form.json";

export default function Home() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [formContract, setformContract] = useState(undefined);
  const [Name, setName] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [post, setPost] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  const [details, setDetail] = useState({
    name: '',
    age: '',
    post: '',
  });

  
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const formABI = Form_abi.abi;  

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

    getFormContract();
  }

  const getFormContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const FormContract = new ethers.Contract(contractAddress, formABI, signer);
    setformContract(FormContract);
  }


  const onChnageHandleName = ()=> {
    setName(event.target.value);
  }

  const onChnageHandleAge = ()=> {
    setAge(event.target.value);
  }

  const onChnageHandlePost = ()=> {
    setPost(event.target.value);
  }

  const onChnageHandleAdd = ()=> {
    setAddress(event.target.value);
  }


  const setDetails = async() => {
    if(formContract){
        await formContract.setDetails(String(Name), age, String(post));
        alert("Details set");
    }
  }


  const getDetails = async () => {
    if (formContract) {
        const details = await formContract.getDetails();
        setDetail({
          name: details[0],
          age: details[1].toString(), 
          post: details[2],
        });
    }
  }

  const personalDetails = async() => {
    if(formContract){
      const details = await formContract.personDetails(address);
      setDetail({
        name: details[0],
        age: details[1].toString(), 
        post: details[2],
      });
    }
  }

  const clearDetails = async() => {
    setDetail({
      name: '',
      age: '',
      post: '',
    });
  }
  const init = () => {
    if(!ethWallet){
      return <p>Please install Metamask</p>
    }

    if(!account){
      return <button onClick={connetAccount}>Connect Metamask</button>
    }

    
    return (
      <div >
        <h1>Personal Details Form</h1>
        <p>Account: {account}</p>

        <label>
        Name: <input name="Name" value = {Name} onChange={onChnageHandleName} />
        Age: <input name="age" value = {age} onChange={onChnageHandleAge} />
        Post: <input name="post" value = {post} onChange={onChnageHandlePost} />
        <button onClick={setDetails}>Set Details</button>
        </label>
        <br></br>
        <button onClick={getDetails}>Get Details</button>
        <label>
        Address: <input name="address" value = {address} onChange={onChnageHandleAdd} />
        </label>
        <button onClick={personalDetails}>Get Details by address</button>
        <p>Details:-</p>
        <p>Name: {details.name}</p>
        <p>Age: {details.age}</p>
        <p>Post: {details.post}</p>
        <button onClick={clearDetails}>Clear Details</button>
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
