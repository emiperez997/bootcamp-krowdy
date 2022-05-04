import { Router } from 'restify-router';
// import UserRoute from './user.routes';
// import ProfileRoute from './profile.routes';

const routerInstance = new Router();
// const listOfRouter = new Router();

// listOfRouter.add('/profile', ProfileRoute);
// listOfRouter.add('/user', UserRoute);

// routerInstance.add('/app/v1', listOfRouter)

// Prueba de endpoint
routerInstance.get('/', async (req, res) => {
  return res.json({message: 'Hola'})
});

export default routerInstance;
