import express from "express";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";


const app = express();

app.use(express.json());
app.use(cookieParser());


app.use("/api/triangle/", postRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});


