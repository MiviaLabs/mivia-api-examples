import { MiviaApi } from "@MiviaLabs/mivia-api-nodejs";
import { init } from ".";

(async () => {
  try {
    init();

    /// Login USER by email and password ///
    const res = await MiviaApi.auth.loginByEmail("mac@mivia.net", "test");

    console.log(
      `User successfully logged in. \nAuthentication token: ${res.data.jwtToken}`
    );

    // Example response:
    // {
    //   data: {
    //     jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMzExMjM2Mi1jOTk0LTQ5ZDMtYmY0OS04YjA3ZmYzMWYyNGUiLCJhdXRoIjoiMTM1OWY5MTUtNWFhMC00MDY2LTk1ZWMtMTkwYjk1YmI4Mjg5IiwiaWF0IjoxNzA3NjU5MjE0fQ.RNyMlQLdAL16cXIGfiV8FwJtKbT5dhRENDNPN5AukCQ'
    //   }
    // }
  } catch (e: any) {
    console.log(JSON.parse(e.message));

    // Example error:
    // {
    //   message: 'Invalid email and/or password',
    //   error: 'Forbidden',
    //   statusCode: 403
    // }
  }
})();
