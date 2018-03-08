pragma solidity ^0.4.17;

import "../installed_contracts/zeppelin/contracts/token/StandardToken.sol";

contract VybCoin is StandardToken {

  string public name = "VybCoin";
  string public symbol = "VybCoin";
  uint8 public constant decimals = 18;

  function VybCoin(address tokenHolder) {
    totalSupply = 1200000000 ether;
    balances[tokenHolder] = totalSupply;
  }
}
