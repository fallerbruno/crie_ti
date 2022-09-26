require('./db');

import * as express from 'express';
import routes from './routes';

const PORT = process.env.PORT || 3000;

const app: express.Express = express();

app.use(express.json());

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('[' + (new Date()) + '] ' + req.method + ' ' + req.url);
    next();
});

app.use(routes);

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}/`);
});
