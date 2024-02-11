import { MiviaApi } from "@MiviaLabs/mivia-api-nodejs";
import { init } from ".";

(async () => {
  try {
    init();

    /// Login USER by email and password ///
    const res = await MiviaApi.auth.loginByEmail("test@test.com", "test");

    console.log(
      `User successfully logged in. \nAuthentication token: ${res.data.jwtToken}`
    );
  } catch (e: any) {
    console.error(e);
  }
})();
