const mongoose=require("mongoose")

exports.dbConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Atlas connected");
    } catch (error) {
        console.log("DB Error: " + error);
    }

}