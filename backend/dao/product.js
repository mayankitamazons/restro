
// const uuid = require('uuid');
const PRODUCT_COLLECTION = 'product';

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId
const uuid = require('uuid');
// Product Name, Sub Category Name, Category Name, Price, Status, Action

module.exports = (uri) => {
    console.log('URfdI: ', uri);
    const createProduct = async (product) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(PRODUCT_COLLECTION);
        product['product_id'] = uuid.v1();
        const result = await collection.insertOne(product);
        connection.close();
        return result['ops'];
    };

    const updateProduct = async (product) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const query = { product_id: product.product_id };
        const newvalues = {
            $set: {
                name: product.name,
                status: product.status,
                category: product.category,
                price: product.price,
                subcategory: product.subcategory,
                owner_id: product.owner_id,
                customizable: product.customizable,
                item_options: product.item_options,
                image: product.image,
                updated_date: product.updated_date
            }
        };
        try {
            const collection = await db.collection(PRODUCT_COLLECTION);
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

    const getProduct = async (product_id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(PRODUCT_COLLECTION);
        const result = await collection.findOne({ product_id: product_id })
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'Product not found'
            }
        } else {

            return result;
        }
    };

    const deleteProduct = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(PRODUCT_COLLECTION);
        
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'Product not found'
            }
        } else {

            return result && result.result && result.n > 0 ? { message: 'Product deleted successfully'}:{ error: 'Something went wrong'};
        }
    };

    const getProductList = async (owner_id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(PRODUCT_COLLECTION);
        const result = await collection.find({  owner_id: owner_id }).toArray();
        // const result = await collection.find().toArray();
        connection.close();
        return result;
    };
    const getProductListByCategory = async (owner_id, category) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(PRODUCT_COLLECTION);
        const result = await collection.find({ owner_id: owner_id, cuisine: category }).toArray();
        // const result = await collection.find().toArray();
        connection.close();
        return result;
    };
    return {
        createProduct, getProduct, getProductList, updateProduct, deleteProduct, getProductListByCategory
    };
}