import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { getNewSmartlyContext } from "../absmartly/initSdk";
import { v4 as uuidv4 } from "uuid";

// Docs: https://nextjs.org/docs/api-reference/next/server#nextmiddleware

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const exp = req.nextUrl.searchParams.get("exp");

  const units = {
    UserId: uuidv4(),
    SessionId: uuidv4(),
  };

  const sdk = await getNewSmartlyContext(units);
  await sdk.ready();

  const treatment = sdk.treatment(exp);

  return NextResponse.json({ treatment, units });
}
