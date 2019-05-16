const { createServer } = require('http')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = parseInt(process.env.PORT, 10) || 3000

app.prepare().then(() => {
    createServer((req, res) => {
        handle(req, res)
    }).listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})

// const { parse } = require('url')

// const USER = 'qubic'
// const PASS = ''

// const isAuthed = req => {
//     const auth = req.headers['authorization']

//     if (!auth) {
//         return false
//     }

//     const tmp = auth.split(' ')
//     const buf = new Buffer(tmp[1], 'base64')
//     const plain = buf.toString()
//     const [user, pass] = plain.split(':')

//     return user === USER && pass === PASS
// }

// app.prepare().then(() => {
//     createServer((req, res) => {
//         const requireAuth = () => {
//             res.statusCode = 401
//             res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"')
//             res.end('<html><body>Access denied</body></html>')
//         }

//         if (!isAuthed(req)) {
//             requireAuth()
//             return
//         }

//         handle(req, res)
//     }).listen(port, err => {
//         if (err) throw err
//         console.log(`> Ready on http://localhost:${port}`)
//     })
// })
