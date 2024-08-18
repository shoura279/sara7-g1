import express from 'express'
import session from 'express-session'
import { connectDB } from './db/connect.js'
import authRouter from './src/modules/auth/auth.router.js'
import messageRouter from './src/modules/messages/message.router.js'
import mongoSession from 'connect-mongodb-session'
import userRouter from './src/modules/user/user.router.js'
const MongoDBStore = mongoSession(session)
const app = express()
const port = process.env.PORT || 3000
connectDB()
const store = new MongoDBStore({
    uri: "mongodb+srv://ahmedshoura279:Fng8sFkAmRq47XJC@cluster0.ti4194e.mongodb.net/sara7a-g1",
    collection: 'mySessions'
})
app.use(session({
    secret: 'hambozo',
    resave: false,
    saveUninitialized: false,
    store
}))
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static('public'))
app.get('/', (req, res, next) => {
    res.render('home.ejs')
})
app.use('/auth', authRouter)
app.use('/message', messageRouter)
app.use('/user', userRouter)
app.listen(port, () => console.log('server is running on port', port))