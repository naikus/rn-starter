// @TODO
import AsyncStorage from "@react-native-async-storage/async-storage";
import Config from "../config";

const objToString = Object.prototype.toString,
  getTypeOf = that => {
    return objToString.call(that).slice(8, -1); // e.g. [object Array] => Array
  },
  StorageProto = {
    getKey(key) {
      return `${this.ns}.${key}`;
    },
    async setItem(key, value, replacer) {
      const fqKey = this.getKey(key),
        json = JSON.stringify(value, replacer);
      await AsyncStorage.setItem(fqKey, json);
    },
    async getItem(key, reviver) {
      const fqKey = this.getKey(key),
        json = await AsyncStorage.getItem(fqKey);
      return JSON.parse(json, reviver);
    },
    async removeItem(key) {
      const fqKey = this.getKey(key);
      await AsyncStorage.removeItem(fqKey);
    },
    async clear() {
      const fqKeys = await AsyncStorage.getAllKeys(),
        thisKeys = fqKeys.filter(key => key.startsWith(`${this.ns}.`));
      await AsyncStorage.multiRemove(thisKeys);
    }
  },
  createStorage = namepsace => {
    return Object.create(StorageProto, {
      ns: {
        value: namepsace
      }
    });
  },
  Storage = createStorage(Config.appName);
// eslint-disable-next-line prettier/prettier
export {
  Storage,
  createStorage
};
