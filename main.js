var computer = new Object()

computer.name = "Asus"
computer.CPU = "Nvida 4090"
computer.RAM = "16 GB"
computer.GPU = "Dell"

delete computer.RAM

console.log(computer.name)
console.log(computer["RAM"])

var car = {
    name: "BMW E46 M3",
    color: "grey",
    year: "2006",
    kilometers: 20000,

    get getKilometers(){
        return this.kilometers;
    },
    set setKilometers(km){
        this.kilometers = km;
    }
}

console.log(car.getKilometers)

car.setKilometers = 25000

console.log(car.getKilometers)

function Computer(name , CPU , RAM , GPU){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}
var computer1 = new Computer("MacBook", "M1-Core", "16GB", "56000M CPU")
var computer2 = new Computer("MacBook", "M2-Core", "28GB", "6000M CPU")
var computer3 = new Computer("MacBook", "M3-Core", "35GB", "6000M CPU")

console.log(computer1)

console.log(computer2)

console.log(computer3)