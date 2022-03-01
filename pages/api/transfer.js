import { exec } from "child_process";

export default function handler(req, res) {
  const { signer } = req.query;

  if (!signer)
    return res.status(500).json({ success: false, err: "Missing signer" });

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

        if (stockedNftAccounts.length === 0) {
          return res
            .status(500)
            .json({ success: false, err: "No NFTs available." });
        }

        // choose a random one
        const randomEdition = Math.floor(
          Math.random() * stockedNftAccounts.length
        );

        // transfer the token
        exec(
          `spl-token --url ${process.env.NEXT_PUBLIC_RPC_URL} --output json transfer --fund-recipient ${stockedNftAccounts[randomEdition].mint} ALL ${signer}`,
          (err, stdout, stderr) => {
            if (err) {
              console.error("err", err);
              return res.status(500).json({ success: false, err: err });
            }

            if (stderr) {
              console.error("stderr", stderr);
              return res.status(500).json({ success: false, stderr: stderr });
            }

            if (stdout) {
              const data = JSON.parse(stdout);
              console.log("data", data);
              return res.status(200).json(data);
            }
          }
        );
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
