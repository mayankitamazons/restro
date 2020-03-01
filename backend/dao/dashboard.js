
// const uuid = require('uuid');
const USER_COLLECTION = 'users';
const OFFER_COLLECTION = 'offer';
const TABLE_COLLECTION = 'table';
const ORDER_COLLECTION = 'order';

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
// - Total Chef
// - Total Waiter
// - Total Table
// - Total Order
// - Total Offer
// - Total Revenue
module.exports = (uri) => {
    const getAdminStats = async () => {
        const connection = await MongoClient.connect(uri);

        const db = connection.db('restro');
        const userCollection = await db.collection(USER_COLLECTION);
        const orderCollection = await db.collection(ORDER_COLLECTION);

        const userCount = await userCollection.find({ role: 'User' }).count();
        const vendorCount = await userCollection.find({ role: 'Vendor' }).count()
        const chefCount = await userCollection.find({ role: 'Chef' }).count()
        const waiterCount = await userCollection.find({ role: 'Waiter' }).count()
        const orderCount = await orderCollection.count()

        connection.close();
        return {
            user: userCount,
            vendor: vendorCount,
            chef: chefCount,
            waiter: waiterCount,
            order: orderCount
        }
    };

    const getVendorStats = async (id) => {
        const connection = await MongoClient.connect(uri);

        const db = connection.db('restro');
        const userCollection = await db.collection(USER_COLLECTION);
        const offerCollection = await db.collection(OFFER_COLLECTION);
        const tableCollection = await db.collection(TABLE_COLLECTION);
        const orderCollection = await db.collection(ORDER_COLLECTION);

        const offerCount = await offerCollection.find({ owner_id: id }).count();
        // const vendorCount = await userCollection.find({ role: 'Vendor' }).count()
        const chefCount = await userCollection.find({ role: 'Chef', owner_id: id }).count()
        const waiterCount = await userCollection.find({ role: 'Waiter', owner_id: id  }).count()
        const tableCount = await tableCollection.find({ owner_id: id  }).count()
        const orderCount = await orderCollection.find({ owner_id: id  }).count()

        connection.close();
        return {
            offer: offerCount,
            chef: chefCount,
            waiter: waiterCount,
            table: tableCount,
            order: orderCount
        }
    };

    return {
        getAdminStats, getVendorStats
        // addOffer, getOffer, getOfferList, updateOffer, deleteOffer
    };
}