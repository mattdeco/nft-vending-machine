# Solana NFT Vending Machine

![Screenshot of main UI](/public/images/readme-screenshot.jpg)

This is a proof of concept of an NFT vending machine built using [Solana Pay](https://solanapay.com), [Metaplex](https://www.metaplex.com), [Phantom Mobile](https://phantom.app), and [Next.js](https://nextjs.org). This was created and demoed at the 2022 Los Angeles Hacker House presented by Solana and FTX US.

## Dependencies

- [Node 14.x](https://nodejs.org)
- [Yarn 1.x](https://yarnpkg.com)
- [Metaboss](https://metaboss.rs) (installed globally via `cargo install metaboss` or elsewhere in your `$PATH`)
- [spl-token](https://spl.solana.com/token#setup) (installed globally via `cargo install spl-token-cli` or elsewhere in your `$PATH`)

## Getting Started

### Step 1: Install Dependencies

`yarn install`

### Step 2: Set Environment Variables

This project uses Next.js' built-in [environment variables](https://nextjs.org/docs/basic-features/environment-variables) support. Create a file named `.env.local` at the root of this repository. See `.env.example` for details on what to include in this file.

The environment variables are:

- `NEXT_PUBLIC_RPC_URL`: The RPC server to connect to.
- `NEXT_PUBLIC_MERCHANT_WALLET_PUBKEY`: The public key of the wallet that will receive transaction funds, mint NFTs, and be set as the update authority on the NFTs.
- `MERCHANT_KEYPAIR_PATH`: The path to the keypair file of the merchant wallet.
- `NEXT_PUBLIC_VENDING_MODE`: Set to `mint` to mint NFTs on-demand, set to `transfer` to send pre-minted NFTs from the merchant wallet.
- `NFT_COLLECTION_SIZE`: The quantity of random NFTs to choose from when minting.
- `NFT_COLLECTION_PATH`: The location of the directory that contains the on-chain JSON data files used to mint by Metaboss.
- `NEXT_PUBLIC_SOLANA_PAY_TRANSACTION_AMOUNT`: How much to charge for the NFTs, leave blank to allow customers to name their own price.
- `NEXT_PUBLIC_SOLANA_PAY_TRANSACTION_LABEL`, `NEXT_PUBLIC_SOLANA_PAY_TRANSACTION_MESSAGE`, and `NEXT_PUBLIC_SOLANA_PAY_TRANSACTION_MEMO`: Transaction metadata fields in the Solana Pay standard.

### Step 3: Start the vending machine

Run `yarn dev`, then navigate to http://localhost:3000. Alternatively, run `yarn build && yarn start` if you want to run in Production mode for performance reasons.

## Overview of a Transaction

The overall lifecycle of a vending machine transaction consists of the following:

1. A QR code is generated using the Solana Pay SDK that includes a reference ID based on a generated public key.
2. The vending machine polls to check for an on-chain transaction that include the reference ID.
3. Phantom Mobile is used to scan the Solana Pay QR code, which builds a transaction that is confirmed by the customer on their mobile device.
4. The vending machine detects the transaction on-chain based on the reference ID, then begins polling to determine the validity and state of the on-chain transaction.
5. Once the on-chain transaction is fully confirmed, the customer's wallet address is retrieved and is then used as the recipient when Metaboss is used to mint the NFT or when spl-token is used to transfer the NFT.
6. The vending machine displays a success (or error) message to the customer, then generates a new QR code with a new reference ID and returns to the idle state.

## Project Structure

Notable portions of this codebase include:

- `lib/constants.js`: Copy and other content-related settings.
- `styles/tokens.scss`: Design tokens such as colors.
- `pages/index.jsx`: The React page component that contains the majority of the UI and transaction polling / confirmation logic.
- `pages/api/mint.js`: The API route that invokes Metaboss to mint an NFT.
- `pages/api/transfer.js`: The API route that invokes spl-token to transfer an NFT.
- `components/`: Miscellaneous UI components.
- `assets/`: The NFT assets including images and both on- and off-chain metadata.

## To Do

1. Right now this handles the payment to the merchant and the minting of the NFT as two separate transactions. Ideally, this should be refactored to be a fully on-chain, atomic transaction that will automatically return funds to the customer in the event of a mint failure.

## Additional Resources

- [UI and Visual Assets](https://www.figma.com/community/file/1074430867825946277/NFT-Vending-Machine) have been shared via the Figma Community.
