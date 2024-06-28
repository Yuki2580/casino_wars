// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.13;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {ERC721Pausable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {IERC5192} from "./IERC5192.sol";

abstract contract ERC5192 is ERC721Pausable, ERC721URIStorage, IERC5192 {
  bool private isLocked;

  error ErrLocked();
  error ErrNotFound();

  constructor(string memory _name, string memory _symbol, bool _isLocked)
    ERC721(_name, _symbol)
  {
    isLocked = _isLocked;
  }

  modifier checkLock() {
    if (isLocked) revert ErrLocked();
    _;
  }

  function locked(uint256 tokenId) external view returns (bool) {
    if (_ownerOf(tokenId) == address(0)) revert ErrNotFound();
    return isLocked;
  }

  function safeTransferFrom(address from, address to, uint256 tokenId)
    public
    override(ERC721, IERC721)
    checkLock
  {
    super.safeTransferFrom(from, to, tokenId);
  }

  function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data)
    public
    override(ERC721, IERC721)
    checkLock
  {
    super.safeTransferFrom(from, to, tokenId, data);
  }

  function transferFrom(address from, address to, uint256 tokenId)
    public
    override(ERC721, IERC721)
    checkLock
  {
    super.transferFrom(from, to, tokenId);
  }

  function approve(address approved, uint256 tokenId) public override(ERC721, IERC721) checkLock {
    super.approve(approved, tokenId);
  }

  function setApprovalForAll(address operator, bool approved)
    public
    override(ERC721, IERC721)
    checkLock
  {
    super.setApprovalForAll(operator, approved);
  }

  function supportsInterface(bytes4 interfaceId)
    public
    view
    virtual
    override(ERC721, ERC721URIStorage)
    returns (bool)
  {
    return interfaceId == type(IERC5192).interfaceId
      || super.supportsInterface(interfaceId);
  }

  function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal virtual override (ERC721, ERC721Pausable) whenNotPaused returns (address) {
        return super._update(to, tokenId, auth);
    }

  function tokenURI(uint256 tokenId) public view virtual override(ERC721, ERC721URIStorage) returns (string memory) {
    return super.tokenURI(tokenId);
  }
}
