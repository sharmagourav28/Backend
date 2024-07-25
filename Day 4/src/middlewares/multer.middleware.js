import multer from "multer";

// disk storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); //file path
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
});
