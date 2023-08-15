const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World con Express y h1!</h1>');
    }
);

app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
    }
);
