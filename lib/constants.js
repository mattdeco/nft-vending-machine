export const STATES = {
  POLL_FOR_SIGNATURE: "Polling for transaction signature...",
  AWAIT_FOR_VALIDATION: "Validating transaction signature...",
  POLL_FOR_FINAL_TRANSACTION: "Getting final transaction details...",
  AWAIT_FOR_NFT_MINT: "Your NFT is being minted!",
  AWAIT_FOR_NFT_TRANSFER: "Your NFT is being transferred!",
  NFT_MINT_SUCCESS: "Your NFT has now been minted to your wallet!",
  NFT_TRANSFER_SUCCESS: "Your NFT has been transferred to your wallet!",
  NFT_MINT_ERROR: "An error occured while minting your NFT.",
  NFT_TRANSFER_ERROR: "An error occured while transferring your NFT.",
  ERROR: "An unknown error occured.",
  IDLE: "Idle",
};

export const HEADER_IMAGE = "/images/header.png";
export const ANIMATE_BACKGROUND = false;

export const HOME_HEADLINE = "";
export const HOME_SUBHEAD = "";
export const HOME_BODY = "";
export const HOME_CREDIT_LINE = "";

export const INSTRUCTION_STEPS = [
  "Scan the QR code with your mobile wallet",
  "Confirm the transaction on your mobile device",
  "Receive an NFT in your wallet",
];

export const SUPPORTED_WALLETS = [
  {
    name: "Phantom",
    logo: "/images/phantom-logo.svg",
    width: 130,
    height: 30,
  },
  {
    name: "Glow",
    logo: "/images/glow-logo.svg",
    width: 65,
    height: 30,
  },
];
