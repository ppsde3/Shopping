const path = require('path')

module.exports={
    PORT=3000,
    db:{
        database: 'Shopping',
        user: process.env.DB_USER || 'tabtracker',
        password:process.env.DB_USER || 'tabtracker',
        options:{
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: path.resolve(__dirname, '../../tabtracker.sqlite')
        }
    }
}