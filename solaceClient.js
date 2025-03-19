const solace = require("solclientjs");
require('dotenv').config();

const { SOLACE_URL, SOLACE_VPN, SOLACE_USER, SOLACE_PASSWORD } = process.env;

const initSolaceClient = () => {
  const factoryProps = new solace.SolclientFactoryProperties();
  factoryProps.profile = solace.SolclientFactoryProfiles.version10;
  solace.SolclientFactory.init(factoryProps);
  solace.SolclientFactory.setLogLevel(solace.LogLevel.DEBUG);

  const session = solace.SolclientFactory.createSession({
    url: SOLACE_URL || "ws://localhost:8008",
    vpnName: SOLACE_VPN || "default",
    userName: SOLACE_USER || "default",
    password: SOLACE_PASSWORD || "",
    sslValidateCertificate: false
  });

  try {
    session.connect();
  } catch (error) {
    console.error("Failed to connect to Solace: ", error.toString());
  }

  return session;
};

module.exports = initSolaceClient;
