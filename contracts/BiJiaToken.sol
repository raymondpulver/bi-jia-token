pragma solidity ^0.6.0;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BiJiaToken is ERC20 {
  constructor(address supplyHolder, uint256 initialSupply) ERC20("Bi Jia Token", "BJT") public {
    _setupDecimals(18);
    _mint(supplyHolder, initialSupply);
  }
}
