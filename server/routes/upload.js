import express from 'express';
import multer from 'multer';
import { uploadImage, deleteImage, getAllImages } from '../controllers/uploadController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

// Routes
router.post('/', authMiddleware, upload.single('image'), uploadImage);
router.delete('/:fileName', authMiddleware, deleteImage);
router.get('/', authMiddleware, getAllImages);

export default router;
