const path = require("path");
import { exec } from "child_process";

export default function handler(req, res) {
  const { signer } = req.query;

  // pick 1 from n total
  const randomEdition =
    Math.floor(Math.random() * process.env.NFT_COLLECTION_SIZE) + 1;

  const nftDataFile = path.join(
    process.env.NFT_COLLECTION_PATH,
    `${randomEdition}-nft.json`
  );

  const commandstr = `metaboss mint one --keypair ${process.env.MERCHANT_KEYPAIR_PATH} --nft-data-file ${nftDataFile} --receiver ${signer} --rpc ${process.env.NEXT_PUBLIC_RPC_URL}`;

  let success = true;

  exec(commandstr, (err, stdout, stderr) => {
    if (err) {
      success = false;
      console.error("err", err);
    }

    if (stderr) {
      success = false;
      console.error("stderr", stderr);
    }

    if (stdout) {
      console.log("success", stdout);
    }

    if (success) {
      res.status(200).json({ signer: signer, success: true });
    } else {
      res.status(500).json({ success: false, stderr: stderr });
    }
  });
}

export const config = {
  api: {
    externalResolver: true,
  },
};
