import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";

describe("Ticket", function () {
  async function deployContract(){
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const Ticket = await ethers.getContractFactory("Ticket");
    const uri = 'https://blush-leading-goat-539.mypinata.cloud/ipfs/QmNSS1du7wDgBxzrqmPGSHfiBnjLSsVMkqpcsqvUWVW6HM?pinataGatewayToken=5EA3onDk9gg0dAhHyYFZc22atulNzAG2CaQLH1SuyvQygNA0aKrzvRIJHaU9CpB2';

    const ticket = await Ticket.connect(owner).deploy('A', 'AA', true, uri);

    return {
      ticket,
      owner,
      addr1,
      addr2,
      addr3,
    };
  };

  it("should mint NFTs to multiple addresses", async function () {
    const { ticket, owner, addr1, addr2, addr3 } = await loadFixture(deployContract);
    const uri = 'https://blush-leading-goat-539.mypinata.cloud/ipfs/QmNSS1du7wDgBxzrqmPGSHfiBnjLSsVMkqpcsqvUWVW6HM?pinataGatewayToken=5EA3onDk9gg0dAhHyYFZc22atulNzAG2CaQLH1SuyvQygNA0aKrzvRIJHaU9CpB2';
    
    // Mint NFT to addr1
    await ticket.connect(owner).mint(addr1.address);

    // Check addr1 balance and token URI
    const balance = await ticket.balanceOf(addr1.address);
    expect(balance).to.equal(1);

    const tokenURI = await ticket.tokenURI(0);
    expect(tokenURI).to.equal(uri);
    expect(await ticket.connect(owner).locked(0)).to.equal(true);

    //Set different URI
    const uri2 = "ipfs://QmeL83gWo9usFfxApKhZeKNXR2fWvMHZRSwZQC7wVuzqNj";
    await ticket.connect(owner).setTokenURI(0, uri2);
    expect(await ticket.tokenURI(0)).to.equal(uri2);

    // Check transfer and approve function doesn't work due to locked state
    await expect(ticket.connect(owner).transferFrom(addr1.address, addr2.address, 0)).to.be.revertedWithCustomError(ticket, "ErrLocked");
    await expect(ticket.connect(owner)["safeTransferFrom(address,address,uint256)"](addr1.address, addr2.address, 0)).to.be.revertedWithCustomError(ticket, "ErrLocked");
    await expect(ticket.connect(owner)["safeTransferFrom(address,address,uint256,bytes)"](addr1.address, addr2.address, 0, '0x')).to.be.revertedWithCustomError(ticket, "ErrLocked");
    await expect(ticket.connect(owner).approve(addr1.address, 0)).to.be.revertedWithCustomError(ticket, "ErrLocked");
  
    // Check burn function works
    expect(await ticket.balanceOf(addr1.address)).to.equal(1);
    await ticket.connect(owner).burn(0);
    expect(await ticket.balanceOf(addr1.address)).to.equal(0);

    // Check Pausable
    expect(await ticket.connect(owner).paused()).to.equal(false);
    await ticket.connect(owner).updateToPause();
    expect(await ticket.connect(owner).paused()).to.equal(true);

    // Check mint function doesn't work when paused
    await expect(ticket.connect(owner).mint(addr1.address)).to.be.revertedWithCustomError(ticket, "EnforcedPause");
  });
});
