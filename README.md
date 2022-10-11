<p align="center">
<img src="/assets/logo02.png" alt="Alt text logo" title="Logo" width="80px" height="80px">
</p>

# MysticMarketplace

An open decentralized NFT Marketplace built with Solidity and Next.js, powered by Polygon Technologies. It basically is an open platform where users can mint and trade their own NFTs.


## Table of Contents

- [The Project](#the-project)
- [Developers](#developers)
- [Resources](#resources)


## The Project

An open platform where users can mint their own NFTs and list them on a Marketplace or buy NFT from others. It includes:

- A smart contract which represents a collection of NFTs by following the ERC-721 standard.
- A smart contract which represents the NFT Marketplace and contains all the logic to make offers, execute offers...
- A Next.js front-end application as a user interface.

`NFTMarketplace` Coinex Testnet



### Demo video



### Project details

Users can access the application via web-browser, and must have the Metamask wallet installed. The interface, built with Next.js, relies on the ethers.js library to communicate with the smart contracts through Metamask. This means that the data reflected on the front-end application is fetched from the Coinex blockchain. Each action performed by the user (mint an NFT, sell NFT, buy NFT...) creates a transaction on Coinex, which will requires Metamask confirmation and a small fee, and this transaction will permanently modify the state of the NFTMarketplace smart contracts. On top of it, user's NFT Metadata will be uploaded to the IPFS, generating a hash which will be permanently recorded on the blockchain to prove ownership.

### Features

Users can perform the following actions on the NFT Marketplace:

#### Mint

Input a name, description and upload a file (image) to mint an NFT. Once minted, a representation of this NFT will be displayed in the marketplace and it will be owned by its creator. This is open for everyone, meaning everyone can participate in this NFT creation through this platform. 

#### Buy NFT

A user can buy NFTs which someone else offered. This will require paying the requested price and a small fee.

#### Sell NFT

Users can sell their NFT by specifying its price (in CET). If someone fulfills this offer, then the NFT and it's ownership is transferred to the new owner. 

### Connect to Coinex Testnet

First of all, it is required to install Metamask wallet browser extension: https://metamask.io/

Then you should configure Metamask to connect to your local blockchain. To do it manually:
- Open Metamask.
- Open the Network Configuration panel.
- Open Custom RPC.
- Connect to Coinex Testnet.

Another way to connect to Coinex Testnet is by using the following link: https://chainlist.org/ and add the network of your choice by simply connecting your wallet.

### Getting test Coinex

You can get Coinex Test tokens from the https://testnet.coinex.net/faucet


## Developers

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Technology stack

- `Solidity`
- `Next.js`
- `hardhat`
- `ethers.js`
- `node.js`
- `Metamask`
- `IPFS`
- `Infura`
- `Alchemy`

### Future Ideas

- Clear deploy on Coinex Mainnet. 
- Auction features.
- Bulk upload of NFTs as collections.
- Creator details and more.


## Resources

- [polygon.technology](https://coinex.net/)
- [Solidity](https://docs.soliditylang.org/en/v0.8.15/)
- [node.js](https://nodejs.org/)
- [ethers.js](https://docs.ethers.io/v5/)
- [next.js](https://nextjs.org/)
- [IPFS](https://ipfs.io/)
- [Infura](https://infura.io/)
- [Alchemy](https://www.alchemy.com/)
- [Vercel](https://vercel.com/docs)
