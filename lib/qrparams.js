import { Keypair, PublicKey } from "@solana/web3.js";
import BigNumber from "bignumber.js";

export const generateQRParams = () => {
  return {
    recipient: new PublicKey(process.env.NEXT_PUBLIC_MERCHANT_WALLET_PUBKEY),
    amount: process.env.NEXT_PUBLIC_SOLANA_PAY_TRANSACTION_AMOUNT
      ? new BigNumber(process.env.NEXT_PUBLIC_SOLANA_PAY_TRANSACTION_AMOUNT)
      : null, // if env var isn't set, passing null allows customers to name their own price
    reference: new Keypair().publicKey,
    label: process.env.NEXT_PUBLIC_SOLANA_PAY_TRANSACTION_LABEL,
    message: process.env.NEXT_PUBLIC_SOLANA_PAY_TRANSACTION_MESSAGE,
    memo: process.env.NEXT_PUBLIC_SOLANA_PAY_TRANSACTION_MEMO,
  };
};
