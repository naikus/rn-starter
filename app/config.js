import pkg from "../package.json";

export default {
  appName: "rnstarter",
  appVersion: process.env.APP_VERSION || pkg.version,

  api: {
    // secure: false, to use plain http:// uses https:// by default
    server: process.env.API_SERVER || "rnstarter.com",
    port: process.env.API_PORT || 443,
    basePath: "/api",
    secure: true,
    token: process.env.API_TOKEN || "dfjl4545j45kl3jldfdkj35jpwmdscvnbz",
    useBasicAuth: true
  }
};
