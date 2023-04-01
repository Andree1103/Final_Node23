"use strict";
const getTime = (timestamp) => {
  const millis = timestamp * 1000;
  const date = new Date(timestamp);
  return date.toDateString();
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Shampoo",
          description: "Los mejores shampo para el cabello",
          price: 10.0,
          availableQty: 6,
          userId: 1,
          productImage:
            "https://www.atriainnovation.com/wp-content/uploads/2022/06/Portada_3.jpg",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "Limpiavidrios",
          description: "Deja tus vidrios lo mas blancos posibles",
          price: 15.0,
          availableQty: 0,
          userId: 1,
          productImage:
            "https://www.atriainnovation.com/wp-content/uploads/2022/06/Portada_3.jpg",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "Antisarro",
          description:
            "Quita el sarro de los lugares mas imposibles de limpiar",
          price: 35.0,
          availableQty: 5,
          userId: 1,
          productImage:
            "https://www.atriainnovation.com/wp-content/uploads/2022/06/Portada_3.jpg",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "Escoba",
          description: "La escoba de harry potter",
          price: 16.5,
          availableQty: 2,
          userId: 1,
          productImage:
            "https://www.atriainnovation.com/wp-content/uploads/2022/06/Portada_3.jpg",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "Brilla muebles",
          description: "Deja tus muebles como nuevos",
          price: 12.0,
          availableQty: 10,
          userId: 1,
          productImage:
            "https://www.atriainnovation.com/wp-content/uploads/2022/06/Portada_3.jpg",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "Limpiador de pisos",
          description: "Tus pisos como nuevos",
          price: 50.0,
          availableQty: 3,
          userId: 1,
          productImage:
            "https://www.atriainnovation.com/wp-content/uploads/2022/06/Portada_3.jpg",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
      ],
      {}
    );
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
