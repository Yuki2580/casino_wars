const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TicketModule = buildModule("TicketModule", (m: any) => {
  var uri = "";

  // Monte Carlo
  uri = "https://scarlet-left-bear-99.mypinata.cloud/ipfs/QmSF9JLBnjPJpnbU5RdKr7mqpmMVDC23kP4dYWzvb36ETu";
  const mct = m.contract("Ticket", ["Monte Carlo Token", "MCT", true, uri], {
    id: "monte_carlo",
  });

  // Macau
  uri = "https://scarlet-left-bear-99.mypinata.cloud/ipfs/QmX96zWRPubqn5W7EAjGYqk2GrBLzW666exVQoP4u3GUsV";
  const mctk =  m.contract("Ticket", ["Macau Token", "MCTK", true, uri], {
    id: "macau",
  });

  // Las Vegas
  uri = "https://scarlet-left-bear-99.mypinata.cloud/ipfs/QmZW9m8Kemto5bYGE9iKJwLcJ1HdjKv8g25T7sDTRAPsmB";
  const lvt =  m.contract("Ticket", ["Las Vegas Token", "LVT", true, uri], {
    id: "las_vegas",
  });

  return { mct, mctk, lvt };
});

module.exports = TicketModule;