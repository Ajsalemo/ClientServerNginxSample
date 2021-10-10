const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Controllers
const homeController = require("./controllers/homeController");
const apiController = require('./controllers/apiController')

app.use(homeController);
app.use('/api/neighborhoods', apiController)

app.listen(port, () => console.log(`Server is listening on port: ${port}`));
