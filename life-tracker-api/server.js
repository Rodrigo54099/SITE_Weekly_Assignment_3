const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { PORT } = require("./config")
const { NotFoundError } = require("./utils/errors")
const security = require("./middleware/security")
const authRoutes = require("./routes/auth")
const exerciseRoutes = require("./routes/exercise")
const nutritionRoutes = require("./routes/nutrition")
const sleepRoutes = require("./routes/sleep")

const app = express()
//enables cross-origin resource sharing
app.use(cors())
//parses incoming requests with JSON payloads
app.use(express.json())
//logs requests info
app.use(morgan("tiny"))

//for every request, check if token exists in the authorization header
//if it does, attach decoded user to res.locals
app.use(security.extractUserFromJwt)

app.use("/auth", authRoutes)
app.use("/exercise", exerciseRoutes)
app.use("/nutrition", nutritionRoutes)
app.use("/sleep", sleepRoutes)

/** Handle 404 errors -- this matches everything */
app.use((req, res, next) => {
  return next(new NotFoundError())
})

/** Generic error handler; anything unhandled goes here. */
app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message

  return res.status(status).json({
    error: { message, status },
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
