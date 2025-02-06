interface Observer {
    update(videoTitle: string): void;
}

interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(videoTitle: string): void;
}


class YouTubeChannel implements Subject {
    private observers: Observer[] = [];

    public subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    public unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(sub => sub !== observer);
    }

    public notify(videoTitle: string): void {
        console.log(`Новый выпуск: "${videoTitle}"`);
        this.observers.forEach(observer => observer.update(videoTitle));
    }


    public uploadVideo(videoTitle: string): void {
        console.log(`Загружено новое видео: "${videoTitle}"`);
        this.notify(videoTitle);
    }
}


class User implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public update(videoTitle: string): void {
        console.log(`${this.name}, новое видео на канале: "${videoTitle}"`);
    }
}


const channel = new YouTubeChannel();

const user1 = new User("Alex");
const user2 = new User("Kate");

channel.subscribe(user1);
channel.subscribe(user2);

channel.uploadVideo("TypeScript for beginners");

channel.unsubscribe(user1);

channel.uploadVideo("JavaScript for beginners");

