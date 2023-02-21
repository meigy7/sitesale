const Router = require('express');
const cardController = require('../controllers/cards.controller');

const router = new Router();

router.post('/createcards', cardController.createCard);
router.get('/getcards', cardController.getCards);

module.exports = router;
