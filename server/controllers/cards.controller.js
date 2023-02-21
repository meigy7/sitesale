const cardService = require('../services/card.sercvice');

class CardController {
  async createCard(req, res, next) {
    try {
      const {
        header,
        category,
        subCategory,
        price,
        subPrice,
        title,
        capScrin,
        scrinOne,
        scrinTwo
      }  = req.body;
      const cardData = await cardService.createCards(
        header,
        category,
        subCategory,
        price,
        subPrice,
        title,
        capScrin,
        scrinOne,
        scrinTwo
      );
      return res.json(cardData);
    } catch (e) {
      next(e);
    };
  }

  async getCards(req, res, next) {
    try {
      const cards = await cardService.getAllCards();
      return res.json(cards)
    } catch (e) {
      next(e);
    };
  }
}

module.exports = new CardController();