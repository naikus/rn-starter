import {types, onSnapshot} from "mobx-state-tree";
import {withEnv, withRootStore} from "./extensions";

// eslint-disable-next-line prettier/prettier
export default types.model("UIStore")
  .props({
    theme: types.optional(types.string, "default"),
    offscreen: false
  })
  .actions(self => {
    return {
      afterCreate() {
        const {Storage} = self.environment;
        onSnapshot(self, snapshot => {
          Storage.setItem("uiprefs", snapshot);
        });
      },
      setTheme(theme) {
        self.theme = theme;
      }
    };
  })
  .extend(withRootStore)
  .extend(withEnv);
