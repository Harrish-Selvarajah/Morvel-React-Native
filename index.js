/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import indexApp from "./indexApp";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => indexApp);
