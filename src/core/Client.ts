export default class Client {

    private id?: string;
    private name: string;
    private age: number;

    constructor (name: string, age: number, id?: string) {
        this.id   = id;
        this.name = name;
        this.age  = age;
    }

    static emptyClient() {
        return new Client('', 0);
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getAame() {
        return this.age;
    }
}