
// const uuid = require('uuid');
const AREA_COLLECTION = 'area';
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId
module.exports = (uri) => {
    console.log('URfdI: ', uri);
    const addArea = async (user) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(AREA_COLLECTION);
        const result = await collection.insertOne(user);
        connection.close();
        return result['ops'];
    };

    const updateArea = async (area) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const query = {  area: area.area };
        const newvalues = {
            $set: {
                area: area.area,
                status: area.status,
            }
        };
        try {
            const collection = await db.collection(AREA_COLLECTION);
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

    const getArea = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(AREA_COLLECTION);
        const result = await collection.findOne({ _id: new ObjectId(id)});
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'Area not found'
            }
        } else {

            return result;
        }
    };

    const deleteArea = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(AREA_COLLECTION);
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'Area not found'
            }
        } else {

            return result && result.result && result.n > 0 ? { message: 'User deleted successfully'}:{ error: 'Something went wrong'};
        }
    };

    const getAreaList = async () => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(AREA_COLLECTION);
        const result = await collection.find().toArray();
        // const result = await collection.find().toArray();
        connection.close();
        return result;
    };
    return {
        addArea, getArea, getAreaList, updateArea, deleteArea
    };
}