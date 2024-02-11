import { MiviaApi, MiviaApiOptions } from "@MiviaLabs/mivia-api-nodejs";
import { configDotenv } from "dotenv";

function init() {
  configDotenv();

  const apiConfig: MiviaApiOptions = {
    url: process.env.MIVIA_API_URL,
    version: process.env.MIVIA_API_VERSION,
  };

  MiviaApi.setConfig(apiConfig);
}

export { init };
