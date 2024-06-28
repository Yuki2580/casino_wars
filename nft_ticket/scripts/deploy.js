const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Ticket = await ethers.getContractFactory("Ticket");
  var uri = "";

  // Monte Carlo
  uri = "https://scarlet-left-bear-99.mypinata.cloud/ipfs/QmSF9JLBnjPJpnbU5RdKr7mqpmMVDC23kP4dYWzvb36ETu";
  const mct_ticket = await Ticket.deploy("Monte Carlo Token", "MCT", true, uri);
  await mct_ticket.deployed();
  console.log("MCT Ticket contract deployed to:", mct_ticket.address);

  // Macau
  uri = "https://scarlet-left-bear-99.mypinata.cloud/ipfs/QmX96zWRPubqn5W7EAjGYqk2GrBLzW666exVQoP4u3GUsV";
  const mctk_ticket = await Ticket.deploy("Macau Token", "MCTK", true, uri);
  await mctk_ticket.deployed();
  console.log("MCTK Ticket contract deployed to:", mctk_ticket.address);

  // Las Vegas
  uri = "https://scarlet-left-bear-99.mypinata.cloud/ipfs/QmZW9m8Kemto5bYGE9iKJwLcJ1HdjKv8g25T7sDTRAPsmB";
  const lvt_ticket = await Ticket.deploy("Las Vegas Token", "LVT", true, uri);
  await lvt_ticket.deployed();
  console.log("LVT Ticket contract deployed to:", lvt_ticket.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
