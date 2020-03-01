
const uuid = require('uuid');
const CATEGORY_COLLECTION = 'category';
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId
module.exports = (uri) => {
    console.log('URfdI: ', uri);
    const addCategory = async (category) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(CATEGORY_COLLECTION);
        category['category_id'] = uuid.v1();
        const result = await collection.insertOne(category);
        connection.close();
        console.log('ops: ', result['ops']);
        
        return result['ops'];
    };

    const updateCategory = async (category) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const query = {  category_id: category.category_id };
        const newvalues = {
            $set: {
                name: category.name,
                status: category.status,
                owner_id: category.owner_id,
                updated_date: category.updated_date

            }
        };
        try {
            const collection = await db.collection(CATEGORY_COLLECTION);
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

    const getCategory = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(CATEGORY_COLLECTION);
        const result = await collection.findOne({ category_id: id});
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'Category not found'
            }
        } else {

            return result;
        }
    };

    const deleteCategory = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(CATEGORY_COLLECTION);
        const result = await collection.deleteOne({ category_id: id});
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'Category not found'
            }
        } else {

            return result && result.result && result.n > 0 ? { message: 'User deleted successfully'}:{ error: 'Something went wrong'};
        }
    };

    const getCategoryList = async (owner_id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(CATEGORY_COLLECTION);
        const result = await collection.find({owner_id}).toArray();
        // const result = await collection.find().toArray();
        connection.close();
        return result;
    };
    return {
        addCategory, getCategory, getCategoryList, updateCategory, deleteCategory
    };
}