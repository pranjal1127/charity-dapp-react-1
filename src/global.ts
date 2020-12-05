import { ethers } from 'ethers';

// import { SurveyBuildSurvey } from './ethereum/typechain/SurveyBuildSurvey';
import { CustomProvider } from 'eraswap-sdk';
import { CharityDappCharityDapp } from './ethereum/CharityDappCharityDapp';

// mark the typings of your global variables
declare global {
  interface Window {
    provider: ethers.providers.JsonRpcProvider;
    providerESN: CustomProvider;
    wallet: any;
    ethereum: ethers.providers.ExternalProvider;
    charityInstance: CharityDappCharityDapp;

    // wallet: CustomWallet | ethers.providers.JsonRpcSigner | undefined; // marking this as undefined helps to prevent many runtime bugs when wallet is not loaded
  }
}
