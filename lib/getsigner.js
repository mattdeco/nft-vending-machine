export const getSigner = (accountKeys) => {
  let signerPubkey;

  accountKeys.forEach((account) => {
    if (account.signer) {
      signerPubkey = account.pubkey.toBase58();
    }
  });

  return signerPubkey;
};
