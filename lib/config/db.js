import mongoose from "mongoose";

export const ConnectDB = async()=>{
    await mongoose.connect('mongodb://jksanjay2006:jksanjay2006@ac-pk1lvmt-shard-00-00.zkoupva.mongodb.net:27017,ac-pk1lvmt-shard-00-01.zkoupva.mongodb.net:27017,ac-pk1lvmt-shard-00-02.zkoupva.mongodb.net:27017/?replicaSet=atlas-xyl8qt-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=todo');
    console.log("DB Connected");
}