import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    const dateNow = new Date();

    cb(null, dateNow.toISOString() + file.originalname);
  },
});

export default multer({ storage });
