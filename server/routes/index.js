import Users from '../controllers/user'

export default (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the BookStore API!',
  }));

  app.get('/api/user/:id', (req, res) => res.status(200).send({
    message: 'user data',
  }));

  app.post('/api/users', Users.signUp); // API route for user to signup
};