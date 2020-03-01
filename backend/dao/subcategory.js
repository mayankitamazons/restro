
const uuid = require('uuid');
const SUBCATEGORY_COLLECTION = 'subcategory';
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId
module.exports = (uri) => {
    console.log('URfdI: ', uri);
    const addSubcategory = async (subcategory) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(SUBCATEGORY_COLLECTION);
        subcategory['subcategory_id'] = uuid.v1();
        const result = await collection.insertOne(subcategory);
        connection.close();
        return result['ops'];
    };

    const updateSubcategory = async (subcategory) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const query = {  subcategory_id: subcategory.subcategory_id };
        const newvalues = {
            $set: {
                name: subcategory.name,
                status: subcategory.status,
                category: subcategory.category,
                owner_id: subcategory.owner_id
            }
        };
        try {
            const collection = await db.collection(SUBCATEGORY_COLLECTION);
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

    const getSubcategory = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(SUBCATEGORY_COLLECTION);
        const result = await collection.findOne({ _id: new ObjectId(id)});
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'Subcategory not found'
            }
        } else {

            return result;
        }
    };

    const deleteSubcategory = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(SUBCATEGORY_COLLECTION);
        const result = await collection.deleteOne({ subcategory_id: subcategory_id });
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'Subcategory not found'
            }
        } else {

            return result && result.result && result.n > 0 ? { message: 'User deleted successfully'}:{ error: 'Something went wrong'};
        }
    };

    const getSubcategoryList = async (owner_id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(SUBCATEGORY_COLLECTION);
        const result = await collection.find({owner_id}).toArray();
        // const result = await collection.find().toArray();
        connection.close();
        return result;
    };
    const getSubcategoryListForCategory = async (owner_id, category_id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(SUBCATEGORY_COLLECTION);
        const result = await collection.find({owner_id,'category._id': category_id}).toArray();
        // const result = await collection.find().toArray();
        connection.close();
        return result;
    };
    return {
        addSubcategory, getSubcategory, getSubcategoryList, updateSubcategory, deleteSubcategory, getSubcategoryListForCategory
    };
}