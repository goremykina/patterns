export interface Car {
    drive(): string;
}


class Sedan implements Car {
    drive(): string {
        return 'Езда на седане';
    }
}

class SUV implements Car {
    drive(): string {
        return 'Езда на внедорожнике';
    }
}


class CarFactory {
    private carType: new () => Car;
    
    constructor(carType: new () => Car) {
        this.carType = carType;
    }
    
    createCar(): Car {
        return new this.carType();
    }
    
    testDrive(): string {
        const car = this.createCar();
        return `Тест-драйв: ${car.drive()}`;
    }
}


function clientCode(factory: CarFactory) {
    console.log(factory.testDrive());
}

console.log('Запуск с SedanFactory:');
clientCode(new CarFactory(Sedan));

console.log('Запуск с SUVFactory:');
clientCode(new CarFactory(SUV));
