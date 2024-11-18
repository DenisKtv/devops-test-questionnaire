import { Application } from 'express';
import question from './question';

const routes = (app: Application) => {
    app.use('/question', question);
};

export default routes;