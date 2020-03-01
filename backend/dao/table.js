
const uuid = require('uuid');
const TABLE_COLLECTION = 'table';

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId

// Table Name, Sub Category Name, Category Name, Price, Status, Action

module.exports = (uri) => {
    console.log('URfdI: ', uri);
    const addTable = async (table) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        table['table_id'] = uuid.v1();
        const collection = await db.collection(TABLE_COLLECTION);
        const result = await collection.insertOne(table);
        connection.close();
        return result['ops'];
    };

    const updateTable = async (table) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const query = { table_id: table.table_id };
        
        const newvalues = {
            $set: {
                name: table.name,
                seating: table.seating,
                status: table.status,
                owner_id: table.owner_id,
                updated_date: table.updated_date
            }
        };
        
        try {
            const collection = await db.collection(TABLE_COLLECTION);
            const result = await collection.updateOne(query, newvalues);
            connection.close();
            return result;

        } catch (error) {
            connection.close();
            return {
                error: error && error['errmsg'] ? error['errmsg'] : 'Something went wrong'
            };
        }
    };

    const getTable = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(TABLE_COLLECTION);
        const result = await collection.findOne({ _id: new ObjectId(id) })
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'Table not found'
            }
        } else {

            return result;
        }
    };

    const deleteTable = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(TABLE_COLLECTION);
        
        const result = await collection.deleteOne({ table_id: id});
        connection.close();
        
        if (!result) {
            return {
                statusCode: 400,
                error: 'Table not found'
            }
        } else {

            return result && result.result && result.n > 0 ? { message: 'Table deleted successfully'}:{ error: 'Something went wrong'};
        }
    };

    const getTableList = async (owner_id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(TABLE_COLLECTION);
        const result = await collection.find({  owner_id: owner_id }).toArray();
        // const result = await collection.find().toArray();
        connection.close();
        return result;
    };
    // const getTableListByCategory = async (owner_id, category) => {
    //     const connection = await MongoClient.connect(uri);
    //     const db = connection.db('restro');
    //     const collection = await db.collection(TABLE_COLLECTION);
    //     const result = await collection.find({ owner_id: owner_id, cuisine: category }).toArray();
    //     // const result = await collection.find().toArray();
    //     connection.close();
    //     return result;
    // };
    return {
        addTable, getTable, getTableList, updateTable, deleteTable
    };
}