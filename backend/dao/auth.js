
// const uuid = require('uuid');
const USER_COLLECTION = 'users';
const MongoClient = require('mongodb').MongoClient;

module.exports = (uri) => {
    console.log('URfdI: ', uri);

    const login = async (email, password, ) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');

        const collection = await db.collection(USER_COLLECTION);

        const user = await collection.findOne({ email: email, password: password }, { projection: { password: 0} })
        connection.close();
        if (!user) {
            return {
                'statusCode': 400,
                error: 'User not found'
            }
        } else{
            return user;
        }
    };

    const userLogin = async (mobile, password ) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');

        const collection = await db.collection(USER_COLLECTION)

        const user = await collection.findOne({ mobile: mobile, password: password, role: 'User' }, { projection: { password: 0} })
        connection.close();
        if (!user) {
            return {
                'statusCode': 400,
                error: 'User not found',
                success: 0
            }
        } else {
            user.id = user._id;
            delete user._id;
            return {
                "error" : false,
                "success_msg" : "Login Successfully!",
                "success" : 1,
            user}
            // return user;
        }
    };

    const userRegister = async (user) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        // console.log('ind: ', ind);
       const duplication = await collection.find({
            "$or": [{
                email: user.email
            }, {
                mobile: user.mobile
            }]
        }).toArray();
        if (duplication.length) {
            return {
                'statusCode': 409,
                error: 'Email or mobile number already exist.'
            };
        }  else {

            let result = await collection.insertOne(user);
            connection.close();
            if (result && result['ops'] && result['ops'].length) {
                result = result['ops'][0];
                result.id = result._id;
                delete result._id;
                return result;
            } else {
                return {
                    'statusCode': 400,
                    error: 'Something went wrong'
                };
            }
        }


    };

    const createUser = async (user) => {
        const connection = await MongoClient.connect(uri);
        const db = connection.db('restro');
        const collection = await db.collection(USER_COLLECTION);
        const result = await collection.insertOne(user);
        connection.close();
        return result['ops'];
    };
    return {
        createUser,
        login,
        userLogin,
        userRegister
    };
}