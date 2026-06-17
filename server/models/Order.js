const db = require('../db/connect');

class Orders {
    constructor({order_id, snack_id, order_date, quantity}) {
        this.order_id = order_id;
        this.snack_id = snack_id;
        this.order_date = order_date;
        this.quantity = quantity;
    }

    static async getAllOrders() {
        const [response] = await db.query("SELECT * FROM orders;");
        console.log(response)
        if(response.length == 0) {
            throw new Error("No Orders")
        }
        return response.map(o => new Orders(o));
    }

    static async getOrderById(id) {
        const [response] = await db.query(`SELECT * FROM orders WHERE order_id=?;`,[id]);
        if(response.length !== 1) {
            throw new Error('Unable to get order');
        }
        return new Orders(response[0]);
    }

    static async createOrder(data) {
        const { snack_id, order_date, quantity } = data
        const [response] = await db.query(`INSERT INTO orders (snack_id, order_date, quantity) VALUES (?, ?, ?)`,[ snack_id, order_date, quantity])
        const id = response.insertId
        const result = await Orders.getOrderById(parseInt(id))
        return result;
    }
}
module.exports=Orders