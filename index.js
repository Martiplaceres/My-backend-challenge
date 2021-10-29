const express = require("express");
const app = express();
const PORT = 4000;
const teamRouter = require("./routers/team");
const playerRouter = require("./routers/player");
const userRouter = require("./routers/user");
const jsonParser = express.json();
// // const authRouter = require("./routers/auth");

app.use(express.json());
app.use(jsonParser);
// app.use(auth);

app.use("/team", teamRouter);
app.use("/player", playerRouter);
app.use("/user", userRouter);
// app.use("/auth", authRouter);

app.listen(PORT, () => console.log(`listening... on port ${PORT}`));
