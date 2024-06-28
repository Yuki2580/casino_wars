// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./ERC5192.sol";

contract Ticket is Ownable, ERC5192 {
    uint256 private _tokenIdCounter;
    string private _uri;

    constructor(string memory name, string memory symbol, bool lock, string memory uri) Ownable(msg.sender) ERC5192(name, symbol, lock) {
        _tokenIdCounter = 0;
        _uri = uri;
    }

    function mint(address to) public whenNotPaused() {
        require(balanceOf(to) == 0, "User already owns an NFT");
        _mint(to, _tokenIdCounter);
        _setTokenURI(_tokenIdCounter, _uri);
        _tokenIdCounter += 1;
    }

    function setTokenURI(uint256 tokenId, string memory uri) public onlyOwner {
        _setTokenURI(tokenId, uri);
    }

    function burn(uint256 tokenId) public onlyOwner {
        _burn(tokenId);
    }

    function updateToPause() public onlyOwner {
        _pause();
    }

    function updateToUnPause() public onlyOwner {
        _unpause();
    }
}