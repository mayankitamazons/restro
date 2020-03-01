
// const uuid = require('uuid');
const USER_COLLECTION = 'users';
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId
module.exports = (uri) => {
    console.log('URfdI: ', uri);
    const createUser = async (user) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        const result = await collection.insertOne(user);
        connection.close();
        return result['ops'];
    };

    const updateUser = async (user) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const query = { mobile: user.mobile };
        const newvalues = {
            $set: {
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                mobile: user.mobile,
                address: user.address,
                status: user.status,
                city: user.city
            }
        };
        try {
            const collection = await db.collection(USER_COLLECTION);
            const result = await collection.updateOne(query, newvalues, { upsert: true });
            connection.close();
            return result;
        } catch (error) {

            connection.close();
            return {
                error: error && error['errmsg'] ? error['errmsg'] : 'Something went wrong'
            };
        }
    };

    const getUser = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        const result = await collection.findOne({ _id: new ObjectId(id) }, { projection: { password: 0 } })
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'user not found'
            }
        } else {

            return result;
        }
    };

    const deleteUser = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'user not found'
            }
        } else {

            return result && result.result && result.n > 0 ? { message: 'User deleted successfully'}:{ error: 'Something went wrong'};
        }
    };

    const getUserList = async () => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        const result = await collection.find({ role: 'User' }, { projection: { password: 0 } }).toArray();
        // const result = await collection.find().toArray();
        connection.close();
        return result;
    };
    return {
        createUser, getUser, getUserList, updateUser, deleteUser
    };
}