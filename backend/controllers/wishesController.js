const Wish = require("../models/wishesModel");
const mongoose = require("mongoose")

const getWishlist = async (req, res) => {
    const user = req.user;
    
    if(user.role === 'OWNER') {
        const wishlist = await Wish.find({}, { bought: 0, boughtBy: 0 });
        return res.status(200).json(wishlist);
    }

    const wishlist = await Wish.find();
    res.status(200).json(wishlist);
}

const createWish = async (req, res) => {
    try {
        const wish = await Wish.create({ ...req.body, bought: false, boughtBy: '' });
        res.status(201).json(wish);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteWish = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such wish' });
    }

    const wish = await Wish.findByIdAndDelete(id);

    if(!wish) return res.status(404).json({ error: 'No such wish' });

    res.status(200).json(wish);
}

const updateWish = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such wish' });
    }

    const wish = await Wish.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if(!wish) {
        return res.status(404).json({ error: 'No such wish' });
    }

    res.status(200).json(wish);
}

module.exports = { getWishlist, createWish, updateWish, deleteWish }