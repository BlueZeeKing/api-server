const axios = require("axios");

export default async function handler(req, res) {
  const curseResponse = await axios.get(
    `https://api.curseforge.com/v1/mods/${req.query.curseid}`,
    {
      headers: { "x-api-key": process.env.API_KEY },
    }
  );

  const modrinthResponse = await axios.get(
    `https://api.modrinth.com/v2/project/${req.query.modrinthid}`
  );

  console.log(modrinthResponse.data.downloads);

  res.status(200).send(
    JSON.stringify({
      downloads:
        curseResponse.data.data.downloadCount + modrinthResponse.data.downloads,
    })
  );
}
