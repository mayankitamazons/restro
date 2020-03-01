
// const uuid = require('uuid');
const USER_COLLECTION = 'users';
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId
module.exports = (uri) => {

    const createStaff = async (user) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        const result = await collection.insertOne(user);
        connection.close();
        return result['ops'];
    };

    const updateStaff = async (staff) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const query = {   mobile: staff.mobile };
        const newvalues = {
            $set: {
                email: staff.email,
                name: staff.name,
                mobile: staff.mobile,
                address: staff.address,
                status: staff.status,
                city: staff.city,
                owner_id: staff.owner_id,
                permission: staff.permission,
                area: staff.area
            }
        };
        try {
            const collection = await db.collection(USER_COLLECTION);
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

    const getStaff = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        const result = await collection.findOne({ _id: new ObjectId(id) }, { projection: { password: 0 } })
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'Staff not found'
            }
        } else {

            return result;
        }
    };

    const deleteStaff = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'Staff not found'
            }
        } else {

            return result && result.result && result.n > 0 ? { message: 'User deleted successfully' } : { error: 'Something went wrong' };
        }
    };

    const getStaffList = async (owner_id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        const result = await collection.find({ role: 'Manager', owner_id: owner_id }, { projection: { password: 0 } }).toArray();
        // const result = await collection.find().toArray();
        connection.close();
        return result;
    };
    
    return {
        createStaff, getStaff, getStaffList, updateStaff, deleteStaff
    };
}