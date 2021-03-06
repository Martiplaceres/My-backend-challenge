("use strict");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "test",
          email: "test@test.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("users", null, {});
  },
};
