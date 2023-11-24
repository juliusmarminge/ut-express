import { generateComponents } from "@uploadthing/react";
import { generateReactHelpers } from "@uploadthing/react/hooks";

import type { OurFileRouter } from "../../../express/src/uploadthing";

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>({
    url: "http://localhost:3001",
  });

export const { useUploadThing } = generateReactHelpers<OurFileRouter>({
  url: "http://localhost:3001",
});
