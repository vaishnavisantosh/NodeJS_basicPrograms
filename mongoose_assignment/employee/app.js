// import employee from './employee.model'
var Employee = require('./employee.model')
var expess = require('express')
var app = expess()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var db = 'mongodb://localhost/shop'
mongoose.connect(db)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.send('happpy to be here')
})

app.get('/employee', (req, res) => {
  console.log('getting list of all employee')
  Employee.find({})
    .exec((err, employee) => {
      if (err) {
        res.send('error has occured')
      } else {
        console.log(employee)
        res.json(employee)
      }
    })
})

app.get('/employee/:id', (req, res) => {
  Employee.findOne({ _id: req.params.id })
    .exec((err, employ) => {
      if (err) {
        res.send('error occured')
      } else {
        res.json(employ)
      }
    })
})

app.post('/employee', (req, res) => {
  const newEmp = new Employee()

  newEmp.name = req.body.name
  newEmp.doj = req.body.doj
  newEmp.experienceInYear = req.body.experienceInYear

  newEmp.save((err, response) => {
    if (err) {
      res.send('error occured!!')
    } else {
      res.send(response)
    }
  })
})

// app.put('/employee/:id', (req, res) => {
//   Employee.findByIdAndUpdate({ _id: req.params.id }, { $set: { title: req.params.title } }, { upsert: true }, (err, updatedEmp) => {
//     if (err) {
//       console.log('error occured!!!!')
//     } else {
//       res.status(204)
//     }
//   })
// })

app.delete('/employee/:id', (req, res) => {
  Employee.findOneAndRemove({ _id: req.params.id }, (err, book) => {
    if (err) {
      console.log('error occured!!')
    } else {
      res.status(204)
    }
  })
})

var port = 3003

app.listen(port, () => {
  console.log('app is listening::Port:: ', port)
})
