const router = require("express").Router();
const wolfpackRoutes = require("./wolfpackInfoRoutes");
// const userRoutes = require("./user");
const wolfpackBackpackRoutes = require("./backpack");


//alpha wolfpack routes
router.use("/wolfpackInfo", wolfpackRoutes);
// define user routes
// router.use("/user", userRoutes);
// define wolfpack-backpack-routes routes
router.use("/backpack", wolfpackBackpackRoutes);


module.exports = router;
