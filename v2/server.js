const {makeApp} = require("./src/app");
const config = require("./config/app.config");

const app = makeApp("default");

const port = config.port;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});