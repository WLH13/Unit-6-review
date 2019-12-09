require('dotenv').config();
const express = require('express'),
      app = express();

app.use(express.json());

const port = 4040;
app.listen(port, () => console.log(`Server running on ${port}`));