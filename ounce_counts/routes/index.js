const router = require("express").Router();
const wolfpack_backpack_nonAlpha = require("./wolfpack_backpack_nonAlpha");
const backpackRoutes = require("./backpacks");

// Backpack routes
router.use("/backpacks", backpackRoutes);
router.use ("/wolfpack_backpack_nonAlpha", wolfpack_backpack_nonAlpha)
module.exports = router;
