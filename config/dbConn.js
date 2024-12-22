// فایل dbConn.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = 'mongodb://localhost:27017/your_database'; // جایگزین کنید با نام دیتابیس واقعی خود
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
