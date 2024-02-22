import Route from '../Route.mjs';
import * as controller from '../controller.mjs';

const apiRoute = [
    new Route('get', '/', controller.test).createRoute(),
    new Route('get', '/ok', controller.test2).createRoute()
];

export { apiRoute };
