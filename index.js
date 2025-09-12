const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const mongoose = require("mongoose");
const serverRoutes = require('./routes/server');
const manuItemRoute = require('./routes/manuItemRoute');


// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// cors
app.use(cors())


// Local MongoDB URL
const uri = "mongodb://127.0.0.1:27017/bistroBossRestaurant"; 

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// routes
app.use('/', serverRoutes);
app.use('/api', manuItemRoute);

app.listen(port, () => {
  console.log(`Bistro boss backend listening on port ${port}`)
})