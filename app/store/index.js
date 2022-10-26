import React, {useContext} from "react";
import {types, onSnapshot, getEnv} from "mobx-state-tree";
// Stores go here
import UIStore from "./ui-store";

const RootStore = types.model("RootStore", {
    uiStore: types.optional(UIStore, {})
  }),
  RootStoreContext = React.createContext({}),
  // Provide contexts for components and also a hook for functional components
  RootStoreProvoder = RootStoreContext.Provider,
  useStore = () => useContext(RootStoreContext);

export {
  RootStore,
  RootStoreContext,
  RootStoreProvoder,
  useStore
};
