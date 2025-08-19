// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample test route
app.get('/', (req, res) => {
  res.send('✅ Backend is working for Interior Design Client Management');
});

// Connect to MongoDB using mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB');

  // Start the server only after DB connection is successful
  app.listen(5000, () => {
    console.log('🚀 Server started on http://localhost:5000');
  });
})
.catch(err => {
  if (!process.env.MONGO_URI) {
  console.error('❌ MONGO_URI is not defined in .env');
  process.exit(1);
}

});