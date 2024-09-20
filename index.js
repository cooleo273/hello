const express = require('express');

const app = express();

app.use(express.json());


// Start Server
const PORT =  5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
