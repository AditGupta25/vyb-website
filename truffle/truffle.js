module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    staging: {
      host: 'localhost',
      port: 8545,
      network_id: 3,
      from: '0xDAe6A0e9e9032270dC88a8F6a6967C0321470bf3',
      gas: 4600000,
      gasPrice: 40000000000
    }
  }
};
