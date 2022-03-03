import { SDK } from "@absmartly/javascript-sdk";

export type SmartlyContextUnits = {
  SessionId: string;
  UserId: string;
};

export async function getNewSmartlyContext(units?: SmartlyContextUnits) {
  const instance = new SDK({
    endpoint: process.env.NEXT_PUBLIC_ABSMARTLY_ENDPOINT,
    apiKey: process.env.NEXT_PUBLIC_ABSMARTLY_API_KEY,
    environment: process.env.NEXT_PUBLIC_ABSMARTLY_ENV,
    application: process.env.NEXT_PUBLIC_ABSMARTLY_APPLICATION,
  });

  return instance.createContext({ units });
}
