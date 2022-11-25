require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const fileUpload = require("express-fileupload")
const { default: AdminBro } = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const option = require('./config/admin.options')
const buildAdminRouter = require('./config/admin.router')


const app = express()

app.use(cors())
app.use(express.json())

const admin = new AdminBro(option)
const router = buildAdminRouter(admin);
app.use(admin.options.rootPath, router)


app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);
//2


app.use(express.static("storage"))

const port = process.env.PORT || 3000

app.use("/api", require("./routes"))

app.listen(port, () => {
  console.log(`APP esta conectada por http://localhost:${port}`);
})

dbConnect()
