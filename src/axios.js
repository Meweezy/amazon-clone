import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-e9b80.cloudfunctions.net/api", //the API (cloud function)url
  //"http://localhost:5001/challenge-e9b80/us-central1/api",
});

export default instance;
