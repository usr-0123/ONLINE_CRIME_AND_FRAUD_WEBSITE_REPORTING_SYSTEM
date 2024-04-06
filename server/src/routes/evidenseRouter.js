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

uploadImageRouter.post('/upload-evidence', uploadToUser.single('file'), (req, res) => {

  try {
    const imageUrl = `http://localhost:8000/photos/crimes/${req.file.filename}`;

    res.status(201).json({ imageUrl });

  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Failed to upload file' });

  }

});

export default uploadImageRouter;
