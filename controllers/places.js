const router = require('express').Router()
const places = require('../models/modelsPlaces.js')

//GET /places
router.get('/', (req, res) => {
    res.render('places/index', {places})
})

//POST /place
router.post('/', (req, res) => {
  if (!req.body.pic) {
    //default image if one not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

//GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new')
})
module.exports = router

//SHOW
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!places[id]){
    res.render('error404')
  } else {
  res.render('places/show', { place: places[id] })
  }
})
