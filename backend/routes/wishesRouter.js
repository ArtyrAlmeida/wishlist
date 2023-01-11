const { Router } = require("express");
const { getWishlist, createWish, deleteWish, updateWish } = require("../controllers/wishesController");

const router = new Router();

router.get("/", getWishlist);
router.post("/", createWish);
router.put("/:id", updateWish);
router.delete("/:id", deleteWish);

module.exports = router;