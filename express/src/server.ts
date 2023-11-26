import "dotenv/config";
import express from "express";
import { createUploadthingExpressHandler } from "uploadthing/express";
import { uploadRouter } from "./uploadthing";
import cors from "cors";

const app = express();
app.use("*", cors());
console.log("process:", process.env.UPLOADTHING_SECRET);
console.log("id", process.env.UPLOADTHING_APP_ID);

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.originalUrl}`);
  console.log("Request headers:", req.headers);
  console.log("Request body:", req.body);
  next();
});

app.use(
  "/api/uploadthing",
  createUploadthingExpressHandler({
    router: uploadRouter,
  })
);

app.listen(3001, () => {
  console.log("listening on port 3001");
});
