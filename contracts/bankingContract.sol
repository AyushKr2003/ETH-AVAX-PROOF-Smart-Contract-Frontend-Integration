//SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "hardhat/console.sol";

contract BankingContract{
    mapping (address => bool) public account; 
    mapping (address => uint) private balance;


    modifier onlyUsers(){
        require(account[msg.sender] == true, "Please create a account");
        _;
    }

    function creatAccount()public returns(bool){
        account[msg.sender] = true;
        return true;
    }

    function deposit( uint _value)public onlyUsers returns(bool) {
        assert(balance[msg.sender] + _value >= _value); 
        balance[msg.sender]+= _value;
        return true;
    }

    function withdraw(uint _value)public onlyUsers returns(bool){
        require(balance[msg.sender]>= _value,"Insufficient Balance");
        balance[msg.sender]-= _value;
        return true;
    }

    function transfer(address _to, uint _value)public onlyUsers returns(bool){
        require(balance[msg.sender]>= _value,"Insufficient Balance");
        if(msg.sender == _to){
            revert("Trying to send to oneself");
        }
        balance[msg.sender]-= _value;
        balance[_to]+= _value;
        return true;
    }

    function getBalance()public view returns(uint){
        console.log("Balance: ", balance[msg.sender]);
        return balance[msg.sender];
    }
}