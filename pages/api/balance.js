import { exec } from "child_process";

export default function handler(req, res) {
  exec("spl-token accounts --output json", (err, stdout, stderr) => {
    if (err) {
      console.error("err", err);
      return res.status(500).json({ success: false, err: err });
    }

    if (stderr) {
      console.error("stderr", stderr);
      return res.status(500).json({ success: false, stderr: stderr });
    }

    if (stdout) {
      try {
        const data = JSON.parse(stdout);

        let stockedNftAccounts = [];

        data.accounts.forEach((account) => {
          // filter accounts with tokens resembling NFTs (accounts with 0 decimal mints and token balance of 1)
          if (
            account.tokenAmount.decimals === 0 &&
            account.tokenAmount.uiAmount === 1
          ) {
            stockedNftAccounts.push(account);
          }
        });

        return res.status(200).json({ balance: stockedNftAccounts.length });
      } catch (error) {
        return res.status(500).json({ success: false, error: error });
      }
    }
  });
}

export const config = {
  api: {
    externalResolver: true,
  },
};
