interface Prototype {
  clone(): Prototype
}

class User implements Prototype {
  constructor (
    public name: string,
    public age: number,
    public preferences: {
      theme : string;
      notification : boolean;
    }
  ) {}

  clone() : User {
    return structuredClone(this)
  }
}

const original = new User("Alina", 26, {theme: "black", notification: true})
const clone = original.clone();

clone.preferences.theme = "ligth";

console.log(original)
console.log(original.preferences.theme)
console.log(clone.preferences.theme)
