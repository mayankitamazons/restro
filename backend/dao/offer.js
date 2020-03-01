
// const uuid = require('uuid');
const OFFER_COLLECTION = 'offer';
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId
const uuid = require('uuid');
module.exports = (uri) => {
    console.log('URfdI: ', uri);
    const addOffer = async (offer) => {
        const connection = await MongoClient.connect(uri);

        const db = connection.db('restro');
        const collection = await db.collection(OFFER_COLLECTION);
        const duplication = await collection.find({
            "$or": [{
                name: offer.name
            }, {
                coupon_code: offer.coupon_code
            }]
        }).toArray();

        if (duplication.length) {
            connection.close();
            return {
                'statusCode': 409,
                error: 'Offer name or coupon code already exist.'
            };
        } else {
            offer['offer_id'] = uuid.v1();
            const result = await collection.insertOne(offer);
            return result['ops'];
        }

    };

    const updateOffer = async (offer) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');

        const collection = await db.collection(OFFER_COLLECTION);
        const query = { offer_id: offer.offer_id };
        const newvalues = {
            $set: {
                name: offer.name,
                owner_id: offer.owner_id,
                off: offer.off,
                coupon_code: offer.coupon_code,
                off_type: offer.off_type,
                status: offer.status,
                min_value:  offer.min_value,
                max_value:  offer.max_value,
                validity:  offer.validity,
                created_date:  offer.created_date,
                updated_date:  offer.updated_date
            }
        };
        try {
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

    const getOffer = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(OFFER_COLLECTION);
        const result = await collection.findOne({ offer_id: id});
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'Offer not found'
            }
        } else {

            return result;
        }
    };

    const deleteOffer = async (id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(OFFER_COLLECTION);
        const result = await collection.deleteOne({ offer_id: id });
        connection.close();
        if (!result) {
            return {
                statusCode: 400,
                error: 'Offer not found'
            }
        } else {

            return result && result.result && result.n > 0 ? { message: 'User deleted successfully'}:{ error: 'Something went wrong'};
        }
    };

    const getOfferList = async (owner_id) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(OFFER_COLLECTION);
        const result = await collection.find({owner_id}).toArray();
        // const result = await collection.find().toArray();
        connection.close();
        return result;
    };
    return {
        addOffer, getOffer, getOfferList, updateOffer, deleteOffer
    };
}