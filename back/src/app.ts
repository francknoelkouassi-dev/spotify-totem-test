import express, {NextFunction, Request, Response} from "express";
import createError from "http-errors";
// Our Express APP config
import cors from "cors";
import bodyParser from "body-parser";

import routes from "./routes";

const app = express();

app.use(cors())
app.use(bodyParser.raw())
app.use(bodyParser.json())

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// API routes
app.use(routes);

app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404));
});

// error handler
app.use((err: any, req: Request, res: Response) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.set("port", process.env.PORT || 443);
// export our app
export default app;
