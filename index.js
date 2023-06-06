const { server } = require('./server');

const port = 5050;
server.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
});