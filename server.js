const express = require('express');
const mongoose = require('mongoose');
const Task = require('./model/taskModel');
const modelRoutes = require('./routes/taskRoutes')
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())
app.use("/api/task",modelRoutes)

// const logger = (req, res, next) => {
// 	console.log("Middleware Run");
// 	console.log(req.method)
// 	next()
// }


app.get("/", (req, res) => {
	res.send("Home Page");
});





const PORT = process.env.PORT || 5000;

mongoose.connect(
	'mongodb+srv://syedbilal:billy786@cluster0.jer9jii.mongodb.net/?retryWrites=true&w=majority',
	(err) => {
		if (err) {
			console.log(err)
		} else {
			console.log("Mongoose Db connected");
		}
	}
)

app.listen(PORT, () => {
	console.log(`Port Connected as ${PORT}`);
});