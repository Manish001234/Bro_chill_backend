const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
	cors({
		origin: "*",
		credentials: true,
		methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
	})
);
require("dotenv").config();
const connect = require("./config/db");

const PORT = process.env.PORT || 8080;

const foodController = require("./controller/food.controller");


app.use("/", foodController);



app.listen(PORT, async()=>{
    try{
        await connect();
        console.log("DB is Connected..!");
    }catch(err){
        console.log(err);
    }
})