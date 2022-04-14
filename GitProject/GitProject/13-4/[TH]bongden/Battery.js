class Battery {
    constructor() {
        this.energy = 100;
    }
    decreaseBattery () {
        this.energy -= 10;
    }
    getEnergy(energy) {
        this.energy =  energy;
    }
}