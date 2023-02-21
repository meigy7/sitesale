const cardModel = require('../models/card.model');

class CardService { 
  async createCards(
    header,
    category,
    subCategory,
    price,
    subPrice,
    title,
    capScrin,
    scrinOne,
    scrinTwo) {
    const card = await cardModel.create({
      header,
      category,
      subCategory,
      price,
      subPrice,
      title,
      capScrin,
      scrinOne,
      scrinTwo
    });

    return {card}
  }

  async getAllCards() {
    const cards = await cardModel.find();
    return cards;
  };
};

module.exports = new CardService();