import {observable} from "mobx";
import {getEnv, getRoot} from "mobx-state-tree";

const withEnv = self => ({
    views: {
      get environment() {
        return getEnv(self);
      }
    }
  }),
  withStatus = self => {
    const statusInfo = observable({
      status: "idle", // idle | busy | error | done,
      message: null
    });
    return {
      views: {
        get status() {
          return statusInfo.status;
        }
      },
      actions: {
        idle() {
          statusInfo.status = "idle";
        },
        busy() {
          statusInfo.status = "busy";
        },
        done() {
          statusInfo.status = "done";
        },
        error(message = "Error") {
          statusInfo.status = "error";
          statusInfo.error = message;
        }
      }
    };
  },
  withRootStore = self => ({
    views: {
      get rootStore() {
        return getRoot(self);
      }
    }
  });

export {
  withRootStore,
  withEnv,
  withStatus
};
