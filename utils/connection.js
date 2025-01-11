const mongoose = require('mongoose')

async function connectDb() {
    try {
        const Mongo_URI = process.env.Mongo_URI
        
        if (!Mongo_URI) {
            throw new Error('NO Uri sring is available')
        }

        await mongoose.connect(Mongo_URI)
        console.log('Mongo db is connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports={connectDb}