const {connectToDB} = require("./db");
const app = require('./app');

const port = 3000;
app.listen(port, async () => {
    console.log(`app is listening on port: ${port}`)
    await connectToDB();
})