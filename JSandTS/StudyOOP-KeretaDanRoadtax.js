class Kereta {
    constructor(pengeluar, model, ccEnjin){
        this.pengeluar = pengeluar;
        this.model = model;
        this.ccEnjin = ccEnjin;   
    }
    getRoadtax() {
        let baseRate = 0.0, progressiveRate = 0.0, difference = 0;
        let engineCapacity = this.ccEnjin
            if(engineCapacity <= 1000) {
                baseRate = 20.00;
                difference = engineCapacity - 0;
                progressiveRate = 0.00;
            } else if(engineCapacity <= 1200) {
                baseRate = 55.00;
                difference = engineCapacity - 0;
                progressiveRate = 0.00;
            } else if(engineCapacity <= 1400) {
                baseRate = 70.00;
                difference = engineCapacity - 0;
                progressiveRate = 0.00;
            } else if(engineCapacity <= 1600) {
                baseRate = 90.00;
                difference = engineCapacity - 0;
                progressiveRate = 0.00;
            } else if(engineCapacity <= 1800) {
                baseRate = 200.00;
                difference = engineCapacity - 1600;
                progressiveRate = 0.40;
            } else if(engineCapacity <= 2000) {
                baseRate = 280.00;
                difference = engineCapacity - 1800;
                progressiveRate = 0.50;
            } else if(engineCapacity <= 2500) {
                baseRate = 380.00;
                difference = engineCapacity - 2000;
                progressiveRate = 1.00;
            } else if(engineCapacity <= 3000) {
                baseRate = 880.00;
                difference = engineCapacity - 2500;
                progressiveRate = 2.50;
            } else {
                baseRate = 2130.00;
                difference = engineCapacity - 3000;
                progressiveRate = 4.50;
            }
        return (progressiveRate * difference) + baseRate;
    }
}

car1 = new Kereta(`Proton`, `Persona`, 1597);
console.log(car1.getRoadtax());