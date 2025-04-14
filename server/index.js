import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import User from "./models/User.js";

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://mubynr:momoslots@cluster0.ik5jxkg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
	console.log(">Connected to DB")
})

app.post("/login", (req, res) => {
	const {email, password} = req.body;
	User.findOne({ email: email })
	.then(user => {
		if (user) {
			if (user.password === password) {
				res.json("Success")
			} else {
				res.json("Incorrect Password")
			}
		} else {
			res.json("No account with that email")
		}
	})
})

app.listen(3000, () => {
    console.log(">Listening on port 3000")
})

/*
const newUser = await User.create({
	fullName: "Brianna Noveal",
	email: "brianna@gmail.com",
	password: "123456"
})
console.log(newUser)
*/
	
/*
const user = await User.findOne({email: "mubynr@gmail.com"});
if (user) {
	if (user.password === "123456") {
		console.log("Login successful")
	} else {
		console.log("Password is incorrect")
	}
} else {
	console.log("User does not exist")
}
*/

/*
user.password = "654321";

await user.save();
console.log(user)
*/

/*
const deleteUser = await User.deleteOne({email: "brianna@gmail.com"});
console.log(deleteUser)
*/

/*
const allUsers = await User.find({});
console.log(allUsers);
*/