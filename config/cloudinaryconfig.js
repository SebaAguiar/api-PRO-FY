const { v2 } = require("cloudinary");
// import {v2 as cloudinary} from 'cloudinary'
const {
    CLOUDINARY_API_KEY,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_SECRET,
} = require("../config")


console.log("CLOUDINARY_CLOUD_NAME", CLOUDINARY_CLOUD_NAME)



const uploadImage = async (filePath) => {
    v2.config({
        cloud_name: "dk4xeyuh6",
        api_key: CLOUDINARY_API_KEY,
        api_secret: CLOUDINARY_API_SECRET,

    })
    return await v2.uploader.upload(filePath, {
        folder: "PRO-FY"
    })
}


const deleteImage = async (publicId) => {
    return await v2.uploader.destroy(publicId)
}

module.exports = { uploadImage, deleteImage }
