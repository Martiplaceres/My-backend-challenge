const express = require("express");
const Team = require("../models").team;
const Player = require("../models").player;
const { Router } = express;

const router = new Router();

//getting all the teams
router.get("/", async (req, res, next) => {
  try {
    const allTeams = await Team.findAll({
      attributes: ["name"],
    });
    res.json(allTeams);
  } catch (e) {
    next(e);
  }
});

//update number of titles
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

    const teamToUpdate = await Team.findByPk(req.params.id);
    console.log("I'm here");
    if (!id) {
      res.status(404).send("User not found");
    } else {
      const updatedTeam = await teamToUpdate.update(req.body);
      res.json(updatedTeam);
    }
  } catch (e) {
    next(e);
  }
});

//get specific team with players

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Team.findByPk(id, { include: [Player] });
    return res.send(result);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
