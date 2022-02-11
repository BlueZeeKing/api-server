const request = require('request');

export default function handler(req, res) {
  request('https://www.apsva.us/wp-json/wp/v2/mat_alert', function (error, response, body) {
    let data = JSON.parse(body)
    let outData = {}
    outData['title'] = data[0]['title']['rendered']
    outData['link'] = data[0]['link']
    console.log(outData)
    res.status(200).send(JSON.stringify(outData));
  })
}