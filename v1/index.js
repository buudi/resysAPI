const express = require("express");
const mountRoutes = require("./routes");

const app = express();
const port = 3000;

// todo: modify the origins when connecting to the front end server
// const cors = require("cors");
// const corsOptions = {
//   origin: ["http://localhost:5173", "http://localhost:5174"],
//   methods: ["GET", "POST", "PUT", "DELETE"],
// };
// app.use(cors(corsOptions));

app.use(express.json());

mountRoutes(app);

app.get("/", (req, res) => {
  res.send(`system beta - server`);
});

app.listen(port, () => {
  console.log(`server-beta listening on port ${port}`);
});


const IDgenerator = require("./IDgenerator");
console.log(IDgenerator.generateApartmentId());
