const {Sequelize} = require('sequelize');

const conn = new Sequelize('books', 'root', 'password', {
    dialect: 'mysql',
})


const connectToDB = async () => {
    try{
        await conn.authenticate();
        console.log("Connected to the db")
    } catch(error){
        console.log("We got an error connecting to the db:" +error);
    }
}
module.exports = {conn, connectToDB};