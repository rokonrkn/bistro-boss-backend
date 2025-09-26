const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const path = require('path');

const serverRoutes = require('./routes/server');
const manuItemRoute = require('./routes/manuItemRoute');
const registrationRoutes = require('./routes/registrationRoutes');
const loginRoutes = require('./routes/loginRoutes');

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static folder for uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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
app.use('/user', registrationRoutes);
app.use('/user', loginRoutes);

app.listen(port, () => {
  console.log(`🚀 Bistro boss backend listening on port ${port}`);
});
