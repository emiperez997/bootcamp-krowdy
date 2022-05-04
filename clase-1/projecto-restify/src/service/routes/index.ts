import { Router } from 'restify-router';
// import UserRoute from './user.routes';
import ProfileRoute from './profile.routes';

const routerInstance = new Router();
const listOfRouter = new Router();

listOfRouter.add('/profile', ProfileRoute);
// listOfRouter.add('/user', UserRoute);

routerInstance.add('/api/v1', listOfRouter)

export default routerInstance;
