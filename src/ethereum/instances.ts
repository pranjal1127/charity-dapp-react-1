import { ethers } from 'ethers';
import { CustomProvider,  addresses } from 'eraswap-sdk';
// import { CustomProvider } from './custom-providers';

// import {
// } from 'eraswap-sdk/dist/typechain/ESN';

const config = addresses[process.env.REACT_APP_ENV === 'production' ? 'production' : 'development'];
//@ts-ignore
// window.providerESN = new CustomProvider('mainnet');
window.provider = new ethers.providers.JsonRpcProvider('https://mainnet.eraswap.network');

// Temporary wallet
if (process.env.REACT_APP_TEST_WALLET_PRIVATE_KEY) {
  window.wallet = new ethers.Wallet(process.env.REACT_APP_TEST_WALLET_PRIVATE_KEY, window.provider);
} 