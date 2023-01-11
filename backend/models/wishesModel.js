const mongoose = require("mongoose");
const { Schema } = mongoose;

const wishesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
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
    url: {
        type: String,
        required: false,
    },
}, { timestamps: true });

const Wish = mongoose.model("Wish", wishesSchema);

module.exports = Wish;
