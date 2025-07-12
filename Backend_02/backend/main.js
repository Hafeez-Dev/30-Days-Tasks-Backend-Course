import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("dist"))

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    { id: 3, 
      joke: "What do you call fake spaghetti? An impasta!" 
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
