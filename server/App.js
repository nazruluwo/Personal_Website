import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8080;

// cors middleware
var allowedOrigins = ['http://localhost:5173'];

app.use(cors({
  origin: function(origin, callback){
   // allow requests with no origin 
   // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
               'allow access from the specified Origin.';
      return callback(new Error(msg), false);
   }
  return callback(null, true);
  }
}));

app.get('/api/test', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});