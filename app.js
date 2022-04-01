const express = require("express");
const app = express();
const port = 8888;

app.get("/api", (req, res) => {
  try {
    res.status(200).send("Get data has successfully hello World!")
  } catch (error) {
    console.log("error :: ", error);
    return res.status(500).send("Server error");
  }
});

app.post("/", function (req, res) {
  res.send("Got a POST request");
});

app.put("/user", function (req, res) {
  res.send("Got a PUT request at /user");
});

app.delete("/user", function (req, res) {
  res.send("Got a DELETE request at /user");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
