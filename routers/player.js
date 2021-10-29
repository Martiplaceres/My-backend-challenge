const express = require("express");
const Player = require("../models").player;
const { Router } = express;

const router = new Router();
//players above 29

// router.get("/", async (req, res, next) => {
//   try {
//     const playerAge = await Player.findAll({
//       where: ["age > ? ", 29],
//     });
//     res.json(playerAge);
//   } catch (e) {
//     next(e);
//   }
// });

// delete a user by id
router.delete("/:playerId", async (req, res, next) => {
  try {
    const playerId = req.params.playerId;
    const player = await Player.findByPk(playerId);

    if (!player) {
      return res.status(404).send("player doesn't exist");
    }

    await player.destroy();
    res.send(`player ${playerId} was destroyed`);
  } catch (e) {
    next(e); // error handler from express
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, age, teamId } = req.body;
    if (!name) {
      res.status(400).send("The new player should have an name");
    } else if (!age) {
      res.status(400).send("The new player should have age");
    } else if (!teamId) {
      res.status(400).send("The new player should have teamId");
    } else {
      const newPlayer = await Player.create({
        name: req.body.name,
        age: parseInt(req.body.age),
        teamId: parseInt(req.body.teamId),
      });

      console.log("Player created");

      res.send(newPlayer);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
