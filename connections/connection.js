const mongoose = require('mongoose');
mongoose.set(`strictQuery`, true);
async function getConnection() {
    await mongoose.connect(`mongodb+srv://neelesh:neelesh@cluster0.muwj7wy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        .then(() => {
            console.log("Database connected successfully 🥳");
        }).catch((e) => {
            console.error(e);
        })
}

module.exports = getConnection;