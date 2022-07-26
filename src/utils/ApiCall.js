import axios from "axios";

class APICall {
  instance;
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:1337/applications",
      timeout: 1000,
    });
  }
  async request(method, url, data, auth) {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      url,
    };
    if (data) {
      config.data = data;
    }
    if (auth)
      config.headers.token = `token ${localStorage.getItem("TOKEN_KEY")}`;
    try {
      let res = await this.instance(config);
      if (url) return res;
    } catch (error) {
      throw error;
    }
  }
}
export let apicall = new APICall();
