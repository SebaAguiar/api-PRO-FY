
const handleHttpError = (res, message = "someting happens", code = 406) => {
  res.status(code);
  res.send({ error: message })

}

module.exports = { handleHttpError }
