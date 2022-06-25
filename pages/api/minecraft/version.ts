const axios = require("axios");

export default async function handler(req, res) {
  const response = await axios.get(
    `https://api.modrinth.com/v2/project/${req.query.id}/version`
  );

  const featured = response.data.filter((item) => item.featured);
  const versions = [];

  featured.forEach(element => {
    element.game_versions.forEach((element) => {
      if (!versions.includes(element)) versions.push(element);
    });
  });

  res.status(200).send(
    JSON.stringify({
      version: versions.sort().reverse().join(", "),
    })
  );
}
