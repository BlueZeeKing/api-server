const axios = require("axios");

export default async function handler(req, res) {
  const response = await axios.get("https://www.apsva.us/wp-json/wp/v2/mat_alert")
  let data = {};

  if (data.length == 0) {
    data["title"] = "";
    data["link"] = "";
  } else {
    data["title"] = response.data[0]["title"]["rendered"];
    data["link"] = response.data[0]["link"];
  }

  data["available"] = response.data.length > 0;

  res.status(response.status).send(JSON.stringify(data));
}
