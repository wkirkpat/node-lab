const path = require("path");
const fs = require("fs");
const request = require("request");


request("https://reddit.com/r/popular.json", (err, res, body) => {
  if (err) console.log(err);

  JSON.parse(body).data.children.forEach((item) => {
    if (
      path.extname(item.data.thumbnail) === ".jpg" ||
      path.extname(item.data.thumbnail) === ".png" ||
      path.extname(item.data.thumbnail) === ".gif"
    ) {
        let dataPath = path.join(__dirname, `/downloads/${item.data.id}.md`)
        let media = item.data.thumbnail;
        fs.writeFileSync(dataPath, media, (err) => {
            if(err) console.log(err);
        } )
    }
  });
});
