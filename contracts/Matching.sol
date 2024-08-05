// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Matching {
    // Storage for hashes
 
    uint size;
    uint256 public count = 0;
    bytes32 [] hashes;
    
    
    // Event to emit when a hash is added
    event HashAdded(bytes32 newHash);

    // Constructor sets the count value
    constructor(uint input) {
        size = input;
        hashes = new bytes32[](size);
    }

    // Function to add a new hash
    function addHash(bytes32 newHash) public {
        require(count < size, "Hash storage is full");
        // Add the new hash
        hashes[count] = newHash;
        count++;

        emit HashAdded(newHash);
    }


    // Function to get the current count of stored hashes
    function getCount() public view returns (uint256) {
        return count;
    }

    function matchHash(bytes32 inputHash) public view returns (bool){
        for(uint k = 0; k < size; k++){
            if (hashes[k] == inputHash) {
                return true;
            }
        }
        return false;
    }
}
