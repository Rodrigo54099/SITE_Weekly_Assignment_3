const express = require("express")
const router = express.Router()

 router.get("/", async (req, res, next) => {
    try {
      //list all sleep post
    } catch (err) {
      next(err)
    }
  })

  router.post("/create", async (req, res, next) => {
    try {
      //create new sleep post
    } catch (err) {
      next(err)
    }
  })

  module.exports = router