
// const uuid = require('uuid');
const USER_COLLECTION = 'users';

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const uuid = require('uuid');
module.exports = (uri) => {
    console.log('URfdI: ', uri);
    const createVendor = async (user) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        user['vendor_id'] = uuid.v1();
        const result = await collection.insertOne(user);
        connection.close();
        return result['ops'];
    };

    const updateVendor = async (vendor) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const query = { vendor_id: vendor.vendor_id };
        const newvalues = {
            $set: {
                vendor_id: vendor.vendor_id,
                mobile: vendor.mobile,
                email: vendor.email,
                name: vendor.name,
                address: vendor.address,
                status: vendor.status,
                area: vendor.area,
                gst_no: vendor.gst_no,
                contact_person_name: vendor.contact_person_name,
                whatsapp_no: vendor.whatsapp_no,
                restaurant_category: vendor.restaurant_category,
                is_top_restaurant: vendor.is_top_restaurant,
                cuisine: vendor.cuisine,
                state: vendor.state,
                rating: vendor.rating,
                branches: vendor.branches,
                updated_date: vendor.updated_date,
                image: vendor.image
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

    const getVendor = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        const result = await collection.findOne({ vendor_id: id }, { projection: { password: 0 } })
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'Vendor not found'
            }
        } else {

            return result;
        }
    };

    const deleteVendor = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'Vendor not found'
            }
        } else {

            return result && result.result && result.n > 0 ? { message: 'User deleted successfully'}:{ error: 'Something went wrong'};
        }
    };

    const getVendorList = async () => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        const result = await collection.find({ role: 'Vendor' }, { projection: { password: 0 } }).toArray();
        // const result = await collection.find().toArray();
        connection.close();
        return result;
    };
    const getVendorListByCategory = async (category) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        const result = await collection.find({ role: 'Vendor', cuisine: category }, { projection: { password: 0 } }).toArray();
        // const result = await collection.find().toArray();
        connection.close();
        return result;
    };
    return {
        createVendor, getVendor, getVendorList, updateVendor, deleteVendor, getVendorListByCategory
    };
}