const fs = require('fs');
const knex = require('knex');
const connectToMysql = async function(){
    
const dbPasssword = await fs.promises.readFile('/run/secrets/db_password')
    const db = knex({
        client: 'mysql2',
        connection: {
            host: 'mysql',//nombre delservicio en el docker-compose.yml
            user: 'user_ABP',
            password: dbPasssword,
            database: 'ABP'
        }
    });
    return db;
};
module.exports = {connectToMysql};