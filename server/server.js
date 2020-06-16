let path = require("path");
let fs = require("fs");

let chirpArr = [
    {
        Username: "l33tGamerBoixXx",
        Comment: "There"
    },
    {
        Username: "oodlesofnoodles",
        Comment: "Is"
    },
    {
        Username: "pandanarchy",
        Comment: "A"
    },
    {
        Username: "johngoodmanslefteyeball",
        Comment: "Bird"
    },
    {
        Username: "yourlegosareworthless",
        Comment: "Somewhere"
    }
]

let chirpPath = path.join(__dirname, "../chirps.json");

let chirpJSON = JSON.stringify(chirpArr)

fs.writeFileSync(chirpPath, chirpJSON, err => {
    if (err) console.log(err);
});

fs.readFile(chirpPath, {encoding: 'UTF-8'}, (err, data) => {
    console.log(data);
})