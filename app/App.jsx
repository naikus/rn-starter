/**
 * React Native Starter
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import routes from "./routes";
import {RootStore, RootStoreProvoder} from "./store";
import {Api, EventApi, createApiInstance} from "./services/Api";
import {Storage, createStorage} from "./services/Storage";
import {Colors, Fonts, Size} from "./theme";


const Stack = createNativeStackNavigator(),
  startUp = async () => {
    // const appStorage = createStorage("rnstarter");
    const store = RootStore.create(
      // Default values. @TODO load from async storage??
      {},
      // Environment
      {
        Api,
        EventApi,
        createApiInstance,
        // Storage: appStorage,
        Storage,
        createStorage
      }
    );
    return store;
  },

  defaultScreenOptions = {
    headerStyle: {
      backgroundColor: Colors.white,
      height: 80
    },
    headerTintColor: Colors.text,
    headerTitleStyle: {
      fontWeight: "300",
      textTransform: "uppercase",
      fontSize: Size.medium
    },
    headerTransparent: true //ideally want this when in Unity mode (or similar)
  },

  // Our main entry point for our App
  App = props => {
    const [rootStore, setRootStore] = useState(null);

    useEffect(() => {
      startUp().then(rStore => {
        setRootStore(rStore);
      });
    }, []);

    if (!rootStore) {
      return null;
    }

    const items = routes.map(route => {
      const {
        name,
        title,
        component,
        screenOptions = {
          title: title
        }
      } = route;

      return (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={screenOptions} />
      );
    });
    return (
      <RootStoreProvoder value={rootStore}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={defaultScreenOptions}
            initialRouteName="start">
            {items}
          </Stack.Navigator>
        </NavigationContainer>
      </RootStoreProvoder>
    );
  };

export default App;
