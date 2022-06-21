module.exports = {
  networks: {
    development: {              // This is a development network
      host: "127.0.0.1",        // this is connecting to ganache
      port: 7545,               //this is the port that ganache is running on 
      network_id: "*" // Match any network id
    }                           //this was connected to local blockchain
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}

