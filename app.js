import express from "express";
import morgan from "morgan"; // loging 관련 미들웨어
import helmet from "helmet"; // nodeJS 보안 관련 미들웨어
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express(); // app 이라는 변수에 express를 실행해서 담은 것.

const handleHome = (req, res) => {
	res.send("hi from home"); // 뭔가 응답하려면 이렇게 send
};
const handleProfile = (req, res) => {
	res.send("you are on my profile");
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome); // 보통 get, post 시에 실행하는 함수는 항상 request객체, response객체 인자를 필요로함
app.get("/profile", handleProfile);
app.use("/user", userRouter); // use를 쓴 이유는, userRouter 전체를 사용하겠다는 의미

export default app;
