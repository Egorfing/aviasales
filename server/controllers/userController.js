const db = require('../db.js')

class UserController {
    async createUser(req, res) {
        const newUser = await db.query('INSERT INTO "user" (shared, email) values ($1, $2) RETURNING *', [false, null])
        console.log('Создан новый пользователь')
        res.json(newUser.rows[0])
    }
    async updateUser(req, res) {
        const { id, shared, email } = req.body
        const user = await db.query('UPDATE "user" set shared = $1, email = $2 where id = $3 RETURNING *', [shared, email, id])
        console.log('Данные занесены в базу данных')
        res.json(user.rows[0])
    }
}

module.exports = new UserController()