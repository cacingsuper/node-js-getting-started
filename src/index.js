import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from '../server/routes';
import http from 'http'

const PORT = process.env.PORT || 5000
const app = express();
const server = http.createServer(app);
const hostname = '127.0.0.1';

routes(app)

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/' , (req,res) => {
  res.send("Hello from Heroku")
})

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
  


server.listen(PORT,hostname, () => console.log(`Server running at http://${hostname}:${PORT}/`))



