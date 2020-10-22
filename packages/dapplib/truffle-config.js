require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remind proud grace globe olympic stove'; 
let testAccounts = [
"0x0e313986b3fb7ad5feb0640e26826ac18f7184f059b9d91332d231c019fd498a",
"0x7777eaeb0849ac579f63ce70e7ed0f36ef29e92637679a67e5b710d2dade3d89",
"0x5d04d305dbac451ef0ff8682d8bbd81a3349f7aadadefafd0d5fcb4d110757bd",
"0x1c6bc9fd4e1ee90c4a6ecfd66a94fbb64b6cdb8f231f31c0caf2b1ba03bb31ca",
"0x7e6b5b4065bac0a595f06452c8755fdcf766d1a40574dcd1f498b7c3562d1f16",
"0x71f5ba78596932cf33fafd70af6dc80263cd8624d1ed83f575e72912eb3251e0",
"0xc1abe8f8bf3b237a26c83d46c6d06d2b99bd49b7bf5cd011c07c962472c95476",
"0xe4761802aef6d443b784ccf0af945c5585bd40f4d8856e2f157c0284e80e65e1",
"0xeafba2f5163ea1003ccc6c1714a25c72f6b057a466c1981397491b4e292afe4f",
"0x67f764b5167b9e5c3800af1f49338e149d06cccab1504227f138d1eb53d713d9"
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
