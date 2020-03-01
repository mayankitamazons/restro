
// const uuid = require('uuid');
const USER_COLLECTION = 'users';
const MongoClient = require('mongodb').MongoClient;
const uuid = require('uuid');
module.exports = (uri) => {

    const createStaff = async (user) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        user['staff_id'] = uuid.v1();
        const result = await collection.insertOne(user);
        connection.close();
        return result['ops'];
    };

    const updateStaff = async (staff) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const query = {   staff_id: staff.staff_id };
        const newvalues = {
            $set: {
                email: staff.email,
                name: staff.name,
                mobile: staff.mobile,
                address: staff.address,
                status: staff.status,
                city: staff.city,
                password: staff.password,
                owner_id: staff.owner_id,
                updated_date: product.updated_date
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
        const result = await collection.findOne({ staff_id: id }, { projection: { _id: 0 } })
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
        const result = await collection.deleteOne({ staff_id: id });
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

    const getStaffListForVendor = async (owner_id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        const result = await collection.find({ owner_id: owner_id, $or: [{role: 'Chef'}, {role: 'Waiter'}]}, { projection: { password: 0, _id: 0 } }).toArray();
        // const result = await collection.find().toArray();
        connection.close();
        return result;
    };

    const getStaffList = async () => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        const result = await collection.find({ $or: [{role: 'Chef'}, {role: 'Waiter'}]}, { projection: { password: 0, _id: 0 } }).toArray();
        // const result = await collection.find().toArray();
        connection.close();
        return result;
    };
    

    return {
        createStaff, getStaff, getStaffList, updateStaff, deleteStaff, getStaffListForVendor
    };
}