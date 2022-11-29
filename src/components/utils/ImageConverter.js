import Resizer from "react-image-file-resizer";

export const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      400,
      400,
      "WEBP",
      80,
      0,
      (uri) => {
        resolve(uri);
      },
      "file"
    );
  });
