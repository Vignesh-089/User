import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./database/db.js";
import UserRoutes from "./routes/user.js"
import cors from "cors"

const app = express();
dotenv.config();
const port = process.env.PORT;

// app.get('/', (req, res) => {
//     res.send('Hello ')
// })
app.use(express.json());
app.use(cors())
app.use("/task", UserRoutes);

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
    ConnectDB();
});
