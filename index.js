const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: "https://savoraddis.netlify.app" }));

app.use(express.json());


// Start Server
const PORT =  5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
