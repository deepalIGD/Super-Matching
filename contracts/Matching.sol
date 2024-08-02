// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Matching {
    // Storage for hashes
    bytes32[10000] public hashes;
    uint256 public count;
    
    // Event to emit when a hash is added
    event HashAdded(bytes32 newHash);

    // Constructor sets the count value
    constructor() {
        count = 0;
    }

    // Function to add a new hash
    function addHash(bytes32 newHash) public {
        require(count < 10000, "Hash storage is full");
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
        for(uint k = 0; k < 10000; k++){
            if (hashes[k] == inputHash) {
                return true;
            }
        }
        return false;
    }
}
