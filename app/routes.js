import {routes as aboutRoutes} from "./modules/about";
import {routes as startRoutes} from "./modules/start";

export default [
  ...startRoutes,
  ...aboutRoutes
];
