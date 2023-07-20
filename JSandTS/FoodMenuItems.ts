interface Menu {
    foodName: string;
    description: string;
    price: number;
    pedas: boolean;
    cutlery: string[];
}
    

class Menu {
    constructor(foodName: string, description: string, price: number, pedas: boolean, cutlery: string[]) {
        this.foodName = foodName;
        this.description = description;
        this.price = price;
        this.pedas = pedas;
        this.cutlery = ['Sudu', 'Garfu'];
    }
}

let nasiLemak = new Menu('Nasi Lemak Kampung', 'Nasi lemak resepi tradisi dibungkus dengan daun pisang', 2.50, true, ['Sudu', 'Garfu', 'Pinggan'],);
console.log(nasiLemak);


class Burger extends Menu{
    constructor(foodName: string, description: string, price: number, pedas: boolean, cutlery: string[]) {
        super(foodName, description, price, pedas, cutlery); // Call the super constructor with all the parameters
        this.cutlery = ['Sudu', 'Pisau']; // Assign the desired value to this.cutlery
    }
}

let burgerZinger = new Burger('Zinger Burger', 'Burger dengan daging ayam goreng yang lembut dan juicy', 5.50, false, ['Sudu', 'Pisau', 'Pinggan'],);
console.log(burgerZinger);



class Ayam extends Menu{
    constructor(foodName: string, description: string, price: number, pedas: boolean, cutlery: string[]) {
        super(foodName, description, price, pedas, cutlery); // Call the super constructor with all the parameters
        this.cutlery = ['Sudu', 'Pisau']; // Assign the desired value to this.cutlery
    }
}

let ayamGoreng = new Ayam('Ayam Goreng Negro', 'Ayam goreng rentung, lama terbiar dalam kuali', 9.90, false, [],);
console.log(ayamGoreng);



class Air extends Menu{
    constructor(foodName: string, description: string, price: number, pedas: boolean, cutlery: string[]) {
        super(foodName, description, price, pedas, cutlery); 
        this.cutlery = ['Cawan'];
    }
}

let airKopiO = new Air ('Air Kopi O', 'Kopi hitam dari dapur pak belalang', 5.00, false, ['Cawan'],);
console.log(airKopiO);

let airOren = new Air ('Air Oren', 'Oren sejuk dari peti ais', 3.00, false, ['Gelas'],);
console.log(airSirapSelasih);
