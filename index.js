/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App'; // o el nombre del archivo donde se encuentra tu componente principal
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);