import cors from 'cors';
import express, { Application /* , Request, Response */ } from 'express';
// import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// app.set('view engine', 'pug');

// application routes
// app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// app.use((err, req, res, next) => {
//   res.locals.error = err;
//   //------------------------vvvvvvv added
//   const status = err.status || 500;
//   res.status(status);
//   res.render('error');
// });

// const getAController = (req: Request, res: Response) => {
//   const a = 10;
//   res.send(a);
// };

// app.get('/', getAController);

export default app;
