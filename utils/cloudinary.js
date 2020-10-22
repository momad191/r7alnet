require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "momad191",
    api_key: "569326899647897",
    api_secret: "OGnEPD07ZzKxlk2WeATnuGShhNw",
});

module.exports = { cloudinary };