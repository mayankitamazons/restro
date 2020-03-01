
// const uuid = require('uuid');
const ORDER_COLLECTION = 'order';

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId
const uuid = require('uuid');
// Order Name, Sub Category Name, Category Name, Price, Status, Action

module.exports = (uri) => {
    console.log('URfdI: ', uri);
    const createOrder = async (order) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(ORDER_COLLECTION);
        order['order_id'] = uuid.v1();
        const result = await collection.insertOne(order);
        connection.close();
        return result['ops'];
    };
	// - All Order (User Name, Order ID, Product, Quantity, Price, Date & Time, Status (Deliver, Cooking, On the Way, Confirmed))
    const updateOrder = async (order) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const query = { order_id: order.order_id };
        const newvalues = {
            $set: {
                user_name: order.user_name,
                user_id: order.user_id,
                status: order.status,
                product: order.product,
                quantity: order.quantity,
                price: order.price,
                owner_id: order.owner_id,
                customization: order.customization,
                updated_date: order.updated_date
            }
        };
        try {
            const collection = await db.collection(ORDER_COLLECTION);
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

    const getOrder = async (order_id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(ORDER_COLLECTION);
        const result = await collection.findOne({ order_id: order_id })
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'Order not found'
            }
        } else {

            return result;
        }
    };

    const deleteOrder = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(ORDER_COLLECTION);
        
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'Order not found'
            }
        } else {

            return result && result.result && result.n > 0 ? { message: 'Order deleted successfully'}:{ error: 'Something went wrong'};
        }
    };

    const getOrderList = async (owner_id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(ORDER_COLLECTION);
        const result = await collection.find({  owner_id: owner_id }).toArray();
        // const result = await collection.find().toArray();
        connection.close();
        return result;
    };
    const getOrderListByCategory = async (owner_id, category) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(ORDER_COLLECTION);
        const result = await collection.find({ owner_id: owner_id, cuisine: category }).toArray();
        // const result = await collection.find().toArray();
        connection.close();
        return result;
    };
    return {
        createOrder, getOrder, getOrderList, updateOrder, deleteOrder, getOrderListByCategory
    };
}