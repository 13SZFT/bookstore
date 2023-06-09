const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        author: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('book', bookSchema);
