const express = require('express')
const router = express.Router()

const { getPeople, createPerson, createPersonInsomia, updatePerson, deletePerson } = require('../controllers/people')

router.get('/', getPeople)
router.post('/', createPerson)
router.post('/insomia', createPersonInsomia)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

// router.route('/').get(getPeople).post(createPerson)
// router.route('/insomia').post(createPersonInsomia)
// router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router