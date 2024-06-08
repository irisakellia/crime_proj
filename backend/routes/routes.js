const express = require('express');
const caseController = require('../controllers/caseController.js')

const router = express.Router();

router.post('/addCase', caseController.addNewCase);
router.get('/cases', caseController.getCases);
router.get('/cases/:id', caseController.getCase);
router.delete('/delete/:id', caseController.deleteCase);

module.exports = router;