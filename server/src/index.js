require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.use('/api/books', require('./routes/book.routes'));

// Error handler
app.use(require('./middlewares/errorHandler'))

// Run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log( 
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
)