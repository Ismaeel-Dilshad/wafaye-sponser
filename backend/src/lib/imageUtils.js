import fs from 'fs';
import path from 'path';

const uploadsDir = path.join(process.cwd(), '../frontend/public/uploads');

/**
 * Delete an image file from the uploads directory
 * @param {string} imageUrl - The image URL (e.g., '/uploads/filename.png')
 * @returns {boolean} - Whether the deletion was successful
 */
export const deleteImage = (imageUrl) => {
    if (!imageUrl || !imageUrl.startsWith('/uploads/')) {
        return false;
    }

    try {
        const filename = imageUrl.replace('/uploads/', '');
        const filePath = path.join(uploadsDir, filename);

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log(`Deleted image: ${filename}`);
            return true;
        }
    } catch (error) {
        console.error('Error deleting image:', error);
    }

    return false;
};

/**
 * Delete image if it's different from the new one
 * @param {string} oldImageUrl - The old image URL
 * @param {string} newImageUrl - The new image URL
 */
export const deleteImageIfChanged = (oldImageUrl, newImageUrl) => {
    if (oldImageUrl && oldImageUrl !== newImageUrl && oldImageUrl.startsWith('/uploads/')) {
        deleteImage(oldImageUrl);
    }
};
