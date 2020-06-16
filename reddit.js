const path = require("path");
const fs = require("fs");
const request = require("request");
const dataPath = path.join(__dirname, "/popular-articles.json");

request("https://reddit.com/r/popular.json", (err, res, body) => {
  if (err) console.log(err);

  let articleArr = [];

 JSON.parse(body).data.children.forEach((item) => {
    articleArr.push({
      title: item.data.title,
      url: item.data.url,
      author: item.data.author,
    });
  });

  fs.writeFileSync(dataPath, JSON.stringify(articleArr), (err) => {
    if (err) console.log(err);
  });
});
