import {
	useRoutes
} from "react-router-dom";
import { RouteConfig } from "./RouteConfig";

export const App = () => {
  let routing = useRoutes(RouteConfig);

  return routing;
}
