const axios = require("axios");

export default async function handler(req, res) {
  const response = await axios.get(
    `https://api.curseforge.com/v1/mods/${req.query.modid}`,
    {
      headers: { "x-api-key": process.env.API_KEY },
    }
  );

  res.status(response.status).send(
    JSON.stringify({
      downloads: response.data.data.downloadCount,
    })
  );
}
