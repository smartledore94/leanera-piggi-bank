export class Penalty {
    name: string;
    value: number;

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }

    getName() {
        return this.name;
    }

    getValue() {
        return this.value;
    }

    writeToDB() {
        /**
         * Create a DB-connection and write a penalty (this.name, this.value) to the db
         */
    }

}