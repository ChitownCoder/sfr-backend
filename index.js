
require('dotenv').config();


const server = require('./api/server');

console.log(process.env.DB_ENV);


const PORT = process.env.PORT;

server.listen(PORT, () => {
   console.log(`\n 🖥 Johnny 5 is ALIVE on : ${PORT} 🖥... \n `);
});

