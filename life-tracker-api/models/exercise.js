const { user } = require("../db")
const db = require("../db")
const { BadRequestError } = require("../utils/errors")

class Exercise {
  static async listExercisePost() {
    //list all post in db in descending oerder of when they were created
    const results = await db.query(
      `
            SELECT e.id,
                   e.img_url AS "imgUrl",
                   e.exercise_category AS "exerciseCategory"
                   e.exercise_name AS "exerciseName",
                   e.exercise_duration AS "exerciseDuration",
                   e.exercise_intensity AS "exerciseIntensity",
                   e.user_id AS "userId",
                   u.email AS "userEmail"
            FROM exercise AS e
                JOIN users AS u ON u.id = e.user_id
        `
    )
    return results.rows
  }

  static async createExercisePost({ user, post }) {
    //create new exercise post
    const requiredFields = [
      "imgUrl",
      "exerciseCategory",
      "exerciseName",
      "exerciseDuration",
      "exerciseIntensity",
    ]
    requiredFields.forEach((field) => {
      if (!post.hasOwnProperty(field)) {
        throw new BadRequestError(
          `Required field - ${field} - missing from request body`
        )
      }
    })

    const results = await db.query(
      `
            INSERT INTO exercise (img_url, exercise_category, exercise_name, exercise_duration, exercise_intensity, user_id)
            VALUES ($1, $2, $3, $4, $5, (SELECT id FROM users WHERE email = $6 ))
            RETURNING id,
                      img_url AS "imgUrl",
                      exercise_category AS "exerciseCategory",
                      exercise_name AS "exerciseName",
                      exercise_duration AS "exerciseDuration",
                      exercise_intensity AS "exerciseIntensity",
                      user_id AS "userId"
        `,
      [
        post.imgUrl,
        post.exerciseCategory,
        post.exerciseName,
        post.exerciseDuration,
        post.exerciseIntensity,
        user.email,
      ]
    )
    return results.rows[0]
  }
}

module.exports = Exercise
