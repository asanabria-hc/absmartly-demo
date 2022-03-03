// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getNewSmartlyContext } from "../../absmartly/initSdk";
import { v4 as uuidv4 } from "uuid";

// Docs: https://nextjs.org/docs/api-routes/introduction

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { exp } = req.query;

  const units = {
    UserId: uuidv4(),
    SessionId: uuidv4(),
  };

  const sdk = await getNewSmartlyContext(units);
  await sdk.ready();

  const treatment = sdk.treatment(exp);

  res.status(200).json({ treatment, units });
}
