import express from 'express';
const router = express.Router();

class Route {

    constructor(method, route, fn) {
        this.method = method;
        this.route = route;
        this.fn = fn;
    }

    createRoute() {
        return router[this.method](this.route, this.fn);
    }
}

export default Route;
