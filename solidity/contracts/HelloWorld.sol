// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details

contract HelloWorld {
    // Variável de estado
    string public messageState = "Ola semana Solidity!";

    // Variável constante
    string public constant MESSAGE_CONSTANT = "Ola constante!";

    // Variável immutable
    address public immutable OWNER;

    constructor() {
        OWNER = msg.sender;
    }

    function greetings() public pure returns (string memory) {
        string memory internalmessage = "Ola semana Solidity!";
        return internalmessage;
    }

    function getBlockNumber() public view returns (uint) {
        return block.number;
    }
}
