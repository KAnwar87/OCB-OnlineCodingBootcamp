class Device {
    constructor (modelName, price){
        this.modelName = modelName;
        this.price = price;
        this.capital = 100000;
    }
    bentuk(){
        console.log(`Laptop`)
    }
    maxUnits(){
        let kira = this.capital / this.price;
        return console.log(`Maximum unit ` + this.modelName + ` yang boleh dibeli dengan modal RM ` + this.capital + ` ialah ` + Math.floor(kira) +` unit.`);
        // return console.log(`Maximum unit ${modelName}boleh dibeli dengan modal RM ` + ` ialah `Math.floor(kira) +` unit`);
    }
}

let macBook = new Device (`MacBook Air 15″`,6199)

macBook.bentuk()
macBook.maxUnits()

class Tab extends Device{
    bentuk(){
        console.log(`Tablet`)
    }
}

let ipad = new Tab (`iPad Air`,2899)

ipad.bentuk()
ipad.maxUnits()
