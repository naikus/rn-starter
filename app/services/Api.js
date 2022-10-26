import Frisbee from "frisbee";
import Config from "../config";

const createApiInstance = options => {
    const {
        secure = true,
        server,
        port,
        basePath,
        token,
        useBasicAuth
      } = options,
      scheme = secure ? "https:" : "http:",
      basicToken = token + "@",
      // eslint-disable-next-line prettier/prettier
      baseUrl =  `${scheme}//${useBasicAuth ? basicToken : ""}${server}:${port}${basePath}`,
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };

    if (!useBasicAuth) {
      headers.Authorization = `Bearer ${token}`;
    }
    // console.log(baseUrl);

    return new Frisbee({
      baseURI: baseUrl,
      headers,
      logRequest(path, opts) {
        // console.log(path, opts);
      },
      logResponse(path, opts, response) {
        // console.log(response);
      }
    });
  },

  Api = createApiInstance(Config.api);
// Set2 basic auth
// Api.auth(token); // Do not use
// If jwt is used
// Api.jwt(token);

// eslint-disable-next-line prettier/prettier
export {
  createApiInstance,
  Api
};
