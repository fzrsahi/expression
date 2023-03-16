"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", [
      {
        uuid: "8ebe2db9-5ba5-445c-963b-adfe77ef29a1",
        name: "Fazrul Sahi",
        email: "fazrul@gmail.com",
        password:
          "$2b$10$6WEgCdT7nqPz1u4xj6jHIuXcTuyPtA9vnYt4BhDPMdZbSFZ3vNP5e",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
