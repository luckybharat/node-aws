const express = require("express");
const app = express();
const PORT  = process.env.PORT || 3006;
app.get("/", (req, res) => {
    return res.send("it worked yeah");
})
app.listen(PORT, () => {
    console.log("app is running at http://localhost:"+PORT);
});
