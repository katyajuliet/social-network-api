const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        } )
    } catch (err) {
        console.error(err);
    }
}
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb+srv://rootuser:<password>@cluster0.al2rsgk.mongodb.net/?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// // Use this to log mongo queries being executed!
// mongoose.set("debug", true);

module.exports = connectDB