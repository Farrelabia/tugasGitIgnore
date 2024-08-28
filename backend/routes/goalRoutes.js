const express = require("express");
const { getGoals, setGoals, putGoals } = require("../controllers/goalControllers");
const router = express.Router();

router.use(express.json());

router.get("/", getGoals)

router.post("/", setGoals)

router.put("/", putGoals)

module.exports = router;