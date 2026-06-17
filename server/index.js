require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || 5050;

app.listen(port, "0.0.0.0", () => {
    console.log(`Server is listening on port ${port}`);
});