import { IOrder } from '../interfaces/order';
import { DbObjectService } from "../services/db.object.service";

export class Order {
    constructor() { }

    getOrders() {
        let db = new DbObjectService<IOrder>("orders");
        return db.get_all_objects()
    }

    getOrder(minimumOrder: IOrder) {
        let db = new DbObjectService<IOrder>("orders");
        return db.get_db_object(minimumOrder)
    }

    createOrder(order: IOrder) {
        let db = new DbObjectService<IOrder>("orders");
        return db.create_db_object(order)
    }

    updateOrder(oldOrder: IOrder, newOrder: IOrder) {
        let db = new DbObjectService<IOrder>("orders");
        return db.update_db_object(oldOrder, newOrder)
    }

    deleteOrder(id: number) {
        let db = new DbObjectService<IOrder>("orders");
        return db.delete_db_object(id+"", "orders_id")
    }

    orderTotal(order: IOrder) {
        let total = 0
        order?.meta?.products?.forEach((a)=>{total = total + parseInt(a.price)})
        return total
    }
}