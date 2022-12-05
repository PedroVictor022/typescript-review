export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj
  }

  getNome() {
    return this.nome;
  }

  addingColab(colab: Colaborador): void {
    this.colaboradores.push(colab);
  }
  
  showColabs(): void {
    for(const colab of this.colaboradores) {
      console.log(colab);
    }
  }

}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const e1 = new Empresa("Alura", "12.223.234/0902934-11");
const colab1 = new Colaborador("Pedro", "Victor");
const colab2 = new Colaborador("Otavio", "Miranda");
const colab3 = new Colaborador("Rodrigo", "Moraes");

e1.addingColab(colab1);
e1.addingColab(colab2);
e1.addingColab(colab3);

console.log(e1.getNome());
e1.showColabs();
