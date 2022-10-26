import Api from "../../services/Api";

const transform = data => data;

export default {
  async getSomething() {
    const {body} = Api.get("/some/thing");
    return transform(body);
  }
};
