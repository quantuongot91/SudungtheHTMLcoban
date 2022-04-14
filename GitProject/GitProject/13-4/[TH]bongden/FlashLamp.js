class flashLamp {
    constructor(Battery) {
        this.status = false
        this.battery = Battery
    }

    connectBattery(battery) {
        this.battery = battery;
    }

    turnOn() {
        if (this.battery.energy >= 0) {
            this.status = true
            this.battery.decreaseBattery()
            alert('denbat')
        } else {
            alert('hetpin')
        }
    }
    turnOff () {
        this.status = false
        alert('dentat')
    }
    chargeBattery () {
        this.battery.getEnergy(100)
        alert('dasac')
    }

}
let FlashLamp = new flashLamp()
let battery = new Battery()
FlashLamp.connectBattery(battery)