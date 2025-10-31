var express = require('express')
var app = express()
var cors = require('cors')
const port = 5000
var Words = require ('./Date.js').Words

var corsOptions = {
  origin: 'http://localhost:3000',

}
let  reviewedWord = ["building "];
app.use(cors(corsOptions))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    vocab:
      "Building Lego cities and towns is the favorite avity of many kids."
  },
  )
})

app.get('/review', (req, res) => {
  //check
  // let Word;
  // for (let v of Words.IELTS) {
  //   if(!reviewedWord.includes(v.word)) {
  //     Word = v;
  //     break
  //   }
  // }
  // let Word = Words.IELTS.find(v => !reviewedWord.includes(v.word))
 let Word = Words.IELTS.filter(v => !reviewedWord.includes(v.word))[0];

  res.json({
    Word : Word
  })
})

app.post('/review', (req, res) => {

  reviewedWord.push(req.body.word)
  
  console.log(reviewedWord)

  res.json({
    status: "success"
  })
})
app.get('/Vocabs', (req, res) => {
  res.json({
    Words: Words
  });
});

app.get('/maincontent', (req, res) => {
  res.json({
    levels: [
      {
        title: "General Vocabulary for learning",
        text: `Whether you’re looking up a specific word or just browsing,
                you’ll find a universe of friendly explanations and fun activities
                designed to educate and entertain.`,
        link: "/General"
      },
      {
        title: "Master Vocabulary for Any English Test",
        text: `Specialized collections for Duolingo, Pearson, IELTS, TOEFL, and more.
                Build your vocabulary efficiently with our targeted approach.`,
        link: "/Master"
      },
      {
        title: "Specialized Vocabulary Collections",
        text: `Choose from our extensive library of vocabulary collections 
                tailored to specific English proficiency tests.`,
        link: "/Specialized"
      }
    ]
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

