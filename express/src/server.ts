import "dotenv/config";

import express from "express";
import { createUploadthingExpressHandler } from "uploadthing/express";
import { uploadRouter } from "./uploadthing";
import cors from "cors";

const app = express();
app.use("*", cors());

app.use(
  "/api/uploadthing",
  createUploadthingExpressHandler({
    router: uploadRouter,
  })
);

app.listen(3001, () => {
  console.log("listening on port 3001");
});
