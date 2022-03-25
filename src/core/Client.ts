export default class Client {

    public id?: string;
    public name: string;
    public age: number;

    constructor (name: string, age: number, id?: string) {
        this.id   = id;
        this.name = name;
        this.age  = age;
    }

    static emptyClient() {
        return new Client('', 0);
    }

    // getId() {
    //     return this.id;
    // }

    // getName() {
    //     return this.name;
    // }

    // getAge() {
    //     return this.age;
    // }
}