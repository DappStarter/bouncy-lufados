require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name renew stereo slow good knee slot ghost'; 
let testAccounts = [
"0x67271e5c6bfdff65b4b62850531b1dfe61e879e445096b7a3a58580c35e801fd",
"0x0bf60083dc5d43057be9767fb9e3a21afaedbdd322ffac978eee1f6a980712be",
"0x9c68a4cf53145ec0daa46ea0d076d3ca74429cc4d3e626a8321c7231659ee8c6",
"0xa7b573220d5e9b8d1c295258d48c8e2974e31c7333a535645ee6b0d0e52a960d",
"0xdf2bd38950b450883520382d0a0b2e396b10adf0965a52bcf3a6448e847a39fa",
"0x42951f595d2bff2cf6a151e2f01861717dab0c7a62b81354621c532c494f1ecd",
"0xf383e2987b649be96f5f9d426f61a93dd17c435bc4c43568047d19a506feadff",
"0x0d756783ee383339896b0c29b17ffbbbeb3dda9c1e116683d15e708a12ab1186",
"0x124afdaceec1965d1d46091a165c502c3c2b6cfdd6d185de61a82f54a4ec677d",
"0x32ec91559a64ca2c83f9d1235678bc583575e52a5ac6567395606af6862125c0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
