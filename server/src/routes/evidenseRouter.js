import { Router } from 'express';
import multer from 'multer';

const uploadImageRouter = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/photos/crimes');
  },
  filename: function (req, file, cb) {
    const uniqueFileName = `${Date.now()}_${file.originalname}`;

    cb(null, uniqueFileName);
  }
});

const uploadToUser = multer({ storage });

uploadImageRouter.post('/upload-evidense', uploadToUser.single('file'), (req, res) => {
  res.send({ imageUrl: `http://localhost:8000/photos/crimes/${req.file.filename}` });
});

export default uploadImageRouter;
