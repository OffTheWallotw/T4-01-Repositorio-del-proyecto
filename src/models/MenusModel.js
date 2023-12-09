const { connectMysql } = require('../dbconnection');
class MenusModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('problemas');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('problemas').where('id_problema', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('problemas').insert(datos).returning('id_problema');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('problemas').where('id_problema', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_problema'] = id;
        await db('problemas').where('id_problema', id).del();
        await db.insert(newData).into('problemas');
        return id;
    }
}

module.exports = MenusModel;