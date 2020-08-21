import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

const app = express(); // app 이라는 변수에 express를 실행해서 담은 것.

app.use(helmet()); // 보안 관련 미들웨어
app.set("view engine", "pug");
app.use(cookieParser()); // cookie를 전달받아서 사용할 수 있도록 만들어주는 미들웨어
app.use(bodyParser.json()); // 사용자가 웹으로 전달하는 데이터들을 검사하는 미들웨어
app.use(bodyParser.urlencoded({ extended: true })); // form 혹은 json 형태로 된 body를 검사한다.
app.use(morgan("dev")); // loging 관련 미들웨어

app.use(localsMiddleware); // local변수를 global변수로 사용하도록 만들어주는 미들웨어

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
