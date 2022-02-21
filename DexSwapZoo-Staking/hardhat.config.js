require("dotenv").config();
require("@nomiclabs/hardhat-truffle5");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");
require("./tasks/deploy");

const infuraId = process.env.INFURA_ID;
const AURORA_PRIVATE_KEY = process.env.AURORA_PK;
const POLYGON_PRIVATE_KEY = process.env.POLYGON_PK;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    networks: {
        mainnet: {
            url: `https://mainnet.infura.io/v3/${infuraId}`,
        },
        aurora: {
            url: 'https://testnet.aurora.dev',
            accounts: [`0x${AURORA_PRIVATE_KEY}`],
            chainId: 1313161555,
            gasPrice: 120 * 1000000000,
            from: '0xAd5104295Eedf7cd678387F18cb2da733F40E1be' 
        },
        mumbai: {
            url: `https://matic-mumbai.chainstacklabs.com`,
            accounts: [`0x${POLYGON_PRIVATE_KEY}`]
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.5.16",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    gasReporter: {
        currency: "USD",
        enabled: process.env.GAS_REPORT_ENABLED === "true",
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
};
