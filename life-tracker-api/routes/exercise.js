const express = require("express")
const Exercise = require("../models/exercise")
const security = require("../middleware/security")
const router = express.Router()

router.post(
  "/create",
  security.requireAuthenticatedUser,
  async (req, res, next) => {
    try {
      //create new exercise post
      const { user } = res.locals
      const post = await Exercise.createExercisePost({ user, post: req.body })
      return res.status(201).json({ post })
    } catch (err) {
      next(err)
    }
  }
)

router.get("/", async (req, res, next) => {
  try {
    //list all exercise post
    const posts = await Exercise.listExercisePost()
    return res.status(200).json({ posts })
  } catch (err) {
    next(err)
  }
})

module.exports = router
