const express = require('express');
const cors = require('cors');
const authRouter = require('./routers/auth');
const vendorRouter = require('./routers/vendor');
const userRouter = require('./routers/user');
const staffRouter = require('./routers/staff');
const areaRouter = require('./routers/area');
const offerRouter = require('./routers/offer');
const settingRouter = require('./routers/setting');
const managerRouter = require('./routers/manager');
const subcategoryRouter = require('./routers/subcategory');
const categoryRouter = require('./routers/category');

const productRouter = require('./routers/product');
const dashboardRouter = require('./routers/dashboard');
const tableRouter = require('./routers/table');
const orderRouter = require('./routers/order');
const fileRouter = require('./routers/file-uploader');


const bodyParser = require('body-parser');
const app = express();
app.use(cors())
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use('/auth', authRouter);
app.use('/vendor', vendorRouter);
app.use('/user', userRouter);
app.use('/staff', staffRouter);
app.use('/area', areaRouter);
app.use('/offer', offerRouter);
app.use('/setting', settingRouter);
app.use('/manager', managerRouter);
app.use('/subcategory', subcategoryRouter);
app.use('/category', categoryRouter);
app.use('/product', productRouter);
app.use('/dashboard', dashboardRouter);
app.use('/table', tableRouter);
app.use('/order', orderRouter);
app.use('/file-upload', fileRouter);



const port = 3000;

app.listen(port, () => console.info(`REST API running on port ${port}`));