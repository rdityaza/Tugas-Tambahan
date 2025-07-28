require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('MongoDB error:', err));

app.get('/', (req, res) => {
    res.json({ message: 'Backend berjalan' });
});

app.listen(process.env.PORT, () =>
    console.log(`Server berjalan di port ${process.env.PORT}`)
);
