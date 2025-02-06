class Book {
    private static instance: Book | null = null;
    private title: string;
    private author: string;


    private constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
        console.log(`Книга "${this.title}" авторства ${this.author} создана!`);
    }


    public static getInstance(title: string, author: string): Book {
        if (Book.instance === null) {
            Book.instance = new Book(title, author);
        }
        return Book.instance;
    }


    public getInfo(): void {
        console.log(`Название: "${this.title}", Автор: ${this.author}`);
    }


    public read(): void {
        console.log(`Вы читаете книгу "${this.title}"...`);
    }
}


const book1 = Book.getInstance("11/22/63", "Стивен Кинг");
const book2 = Book.getInstance("Мастер и Маргарита", "Михаил Булгаков");


console.log(book1 === book2); // true


book1.getInfo();
book1.read();
book2.getInfo();
book2.read();

