require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const fileUpload = require("express-fileupload")


const app = express()

app.use(cors())
app.use(express.json())


app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);




const port = process.env.PORT || 3000

app.use("/api", require("./routes"))

app.listen(port, () => {
  console.log(`APP esta conectada por http://localhost:${port}`);
})

dbConnect()
