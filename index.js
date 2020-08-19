const express = require("express"); // require 는 module를 가져오는 역할. 따라서 express 모듈을 가져온다는 뜻
const app = express(); // app 이라는 변수에 express를 실행해서 담은 것.

const PORT = 4000;

const handleListening = () => {
	// 이 함수 형식은 콜백 형식. 여기서 함수 생성하고 밑에 listen 하면 이 함수를 호출함.
	console.log(`Listening on: http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
	res.send("hi from home"); // 뭔가 응답하려면 이렇게 send
};

const handleProfile = (req, res) => {
	res.send("you are on my profile");
};

app.get("/", handleHome); // 보통 get, post 시에 실행하는 함수는 항상 request객체, response객체 인자를 필요로함
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
