const axios = require("axios");

export default async function handler(req, res) {
  const response = await axios.get(
    `https://api.curseforge.com/v1/mods/${req.query.modid}`,
    {
      headers: { "x-api-key": process.env.API_KEY },
    }
  );

  const latestFile = response.data.data.latestFiles.filter(item => item.id == response.data.data.mainFileId)[0];
  const latestFileIndex = response.data.data.latestFilesIndexes.filter(item => item.fileId == response.data.data.mainFileId)[0];

  res.status(response.status).send(
    JSON.stringify({
      downloads: response.data.data.downloadCount,
      gameVersion: latestFileIndex.gameVersion,
      version: latestFile.displayName,
    })
  );
}
