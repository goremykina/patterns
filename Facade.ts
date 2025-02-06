class Light {
    turnOn() {
        console.log("Свет включен");
    }

    turnOff() {
        console.log("Свет выключен");
    }
}

class MusicSystem {
    playMusic() {
        console.log("Музыка играет");
    }

    stopMusic() {
        console.log("Музыка выключена");
    }
}

class AirConditioner {
    setTemperature(temp: number) {
        console.log(`Температура установлена на ${temp}°C`);
    }

    turnOff() {
        console.log("Кондиционер выключен");
    }
}


class SmartHomeFacade {
    private light: Light;
    private music: MusicSystem;
    private airConditioner: AirConditioner;

    constructor() {
        this.light = new Light();
        this.music = new MusicSystem();
        this.airConditioner = new AirConditioner();
    }

    public startRelaxMode(): void {
        console.log("Активирован режим отдыха...");
        this.light.turnOn();
        this.music.playMusic();
        this.airConditioner.setTemperature(22);
    }

    public shutdown(): void {
        console.log("Выключение всех систем...");
        this.light.turnOff();
        this.music.stopMusic();
        this.airConditioner.turnOff();
    }
}


const smartHome = new SmartHomeFacade();

smartHome.startRelaxMode();
console.log("———");
smartHome.shutdown();

