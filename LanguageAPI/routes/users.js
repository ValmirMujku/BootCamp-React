var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   let dataArray = [
      {id:1, title: 'BootCamp-21', youtube:'https://www.youtube.com/embed/Wisv0pLa7aE', facebook:'https://www.facebook.com/groups/3269389296418016', perprogramera:'https://perprogramera.com/', price:'200.00'},
     {id:2, title: 'Java', youtube:'https://www.youtube.com/embed/eIrMbAQSU34', facebook:'https://www.facebook.com/groups/3269389296418016', perprogramera:'https://perprogramera.com/', price:'49.99'},
     {id:3, title: 'JavaScript', youtube:'https://www.youtube.com/embed/-lYMSS1Y8O0', facebook:'https://www.facebook.com/groups/3269389296418016', perprogramera:'https://perprogramera.com/', price:'119.99'},
     {id:4, title: 'Python', youtube:'https://www.youtube.com/embed/YfzupRkvQZQ', facebook:'https://www.facebook.com/groups/3269389296418016', perprogramera:'https://perprogramera.com/', price:'69.99'},
     {id:5, title: 'PHP', youtube:'https://www.youtube.com/embed/qJMAYbv3wZA', facebook:'https://www.facebook.com/groups/3269389296418016', perprogramera:'https://perprogramera.com/', price:'89.99'}, 
     {id:6, title: 'SQL', youtube:'https://www.youtube.com/embed/POgn6Iq3M1o', facebook:'https://www.facebook.com/groups/3269389296418016', perprogramera:'https://perprogramera.com/', price:'59.99'}, 
     {id:7, title: 'CSS-3', youtube:'https://www.youtube.com/embed/7hAtnncFT_Q', facebook:'https://www.facebook.com/groups/3269389296418016', perprogramera:'https://perprogramera.com/', price:'49.99'},
     {id:8, title: 'Django', youtube:'https://www.youtube.com/embed/ET1CbptAz9U', facebook:'https://www.facebook.com/groups/3269389296418016', perprogramera:'https://perprogramera.com/', price:'99.99'}, 
     {id:9, title: 'Django', youtube:'https://www.youtube.com/embed/ET1CbptAz9U', facebook:'https://www.facebook.com/groups/3269389296418016', perprogramera:'https://perprogramera.com/', price:'49.99'}, 
     {id:10, title: 'Laravel', youtube:'https://www.youtube.com/embed/PfhtWO72IhU', facebook:'https://www.facebook.com/groups/3269389296418016', perprogramera:'https://perprogramera.com/', price:'79.99'}, 
     {id:11, title: 'HTML-5', youtube:'https://www.youtube.com/embed/funWSIhHhbE', facebook:'https://www.facebook.com/groups/3269389296418016', perprogramera:'https://perprogramera.com/', price:'39.99'}, 
     {id:12, title: 'BootStrap', youtube:'https://www.youtube.com/embed/fapY9rvbz4E', facebook:'https://www.facebook.com/groups/3269389296418016', perprogramera:'https://perprogramera.com/', price:'69.99'},     
     
   ];

   res.json({
      data:dataArray
   });
});

module.exports = router;
