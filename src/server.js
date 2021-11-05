const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(___dirname + "/dist/"));
app.get(/.*/, function(req, res) {
    res.sendfile(___dirname + "/dist/index.html")
});
app.listen(port);

console.log("Server started ...")