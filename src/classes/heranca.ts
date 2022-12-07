export class Pessoa {
  public readonly name: string;
  public readonly lastname: string;
  public readonly age: number;
  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  get completeName(): string {
    return this.name + " " + this.lastname;
  }
}

class Filho extends Pessoa {
  private readonly ehMenor: boolean;
  constructor(name: string, lastname: string, age: number, ehMenor: boolean) {
    super(name, lastname, age);
    this.ehMenor = ehMenor;
  }
}

const pessoa1 = new Pessoa("Suzana", "Ribeiro", 29);
const filho1 = new Filho("Vitor", "Augusto", 13, true);

console.log(pessoa1, filho1);
console.log(pessoa1.completeName);
