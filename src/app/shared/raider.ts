export class Raider {
    order: number;
    name: String;
    role: String;
    selected: String;

    constructor(order: number, name: String, role: String) {
        this.order = order;
        this.name = name;
        this.role = role;
        this.selected = 'NO';
    }

}