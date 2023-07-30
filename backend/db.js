const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

//mongodb://localhost:27017
const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
    console.log('Connected success');
    
}

module.exports = connectToMongo;
