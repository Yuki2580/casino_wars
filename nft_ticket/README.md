# City NFT Project

This project is launching three city-themed NFTs to kick off the Casino Wars game framework. The three distinct NFTs are Las Vegas NFT, Macau NFT, and Monte Carlo NFT. We are utilizing ERC5192, a soul-bound token standard, to create non-transferable NFTs, ensuring users can possess only one of the three NFTs. The administrator has the authority to halt the minting process by setting the Pausable status to pausable.

In this project, we do not deploy NFT contracts on the mainnet; instead, we deploy them to the Base Sepolia Testnet.

In the ".env" file, you need to set the ALCHEMY_API_KEY, which can be obtained from the Alchemy website, and the PRIVATE_KEY, which can be retrieved from your wallet. In this implementation, we used the MetaMask private key.

Before compiling the Solidity files, please set the "virtual" keyword in the safeTransferFrom function on line 152 in the file located at node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol.



Alchemy Website
- https://www.alchemy.com/

Contract Addresses
- Las Vegas: 0x693F24A8D3a3DEC819C55875ccafB462bc4Fe00c
- Macau: 0x1F82F19Adc76e65483d5B02f0226ccc2d0d9C90c
- Monte Carlo: 0xfbfa3b21ABDfD639929406195Cf043fad6Fda91C

Base Sepolia Basescan
- https://sepolia.basescan.org/

You can run test by using command below:
```shell
npx hardhat test
```

You can deploy the three NFTs contract by using command below:
```shell
npx hardhat ignition deploy ./ignition/modules/Ticket.ts
```

If you want to call a function in the deployed contracts, run the script files
```shell
npx hardhat run scripts/filename.js
```