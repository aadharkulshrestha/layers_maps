import axios from "axios";

const apiEndpoint = "http://localhost:8080";

function test() {
  return apiEndpoint + "/test";
}

export async function Text() {
  const { data: docsData } = await axios.get(test());
  return docsData;
}
