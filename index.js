const jsonserver = require('json-server')

const server = jsonserver.create()

//middleware//

const middleware = jsonserver.defaults()
//route//

const route = jsonserver.router('db.json')
//cors//

const cors = require('cors')

server.use(cors())
server.use(middleware)
server.use(route)

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log("server is listening to port " + PORT);

})