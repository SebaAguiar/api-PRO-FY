const { v2 } = require("cloudinary");
// import {v2 as cloudinary} from 'cloudinary'
const {
    CLOUDINARY_API_KEY_PRO,
    CLOUDINARY_CLOUD_NAME_PRO,
    CLOUDINARY_API_SECRET_PRO,
} = require("../config")

v2.config({
    cloud_name: CLOUDINARY_CLOUD_NAME_PRO,
    api_key: CLOUDINARY_API_KEY_PRO,
    api_secret: CLOUDINARY_API_SECRET_PRO,
    secure: true
})


const uploadImageProfessional = async (filePath) => {
    return await v2.uploader.upload(filePath, {
        folder: "Pro-FY2"
    })
}

const deleteImage = async (publicId) => {
    return await v2.uploader.destroy(publicId)
}

module.exports = {uploadImageProfessional, deleteImage  }
