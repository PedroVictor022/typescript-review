/**
 * PUBLIC - define se a prop pode ser acessada de qualquer lugar
 * Readonly - o dado pode ou nao ser alterado
 * Constructor() - podemos receber valores de argumentos
 */

export class Empresa {
  public readonly name: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addNewColab(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  showColabs() {
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

const e1 = new Empresa("Ifood", "9020391029309123");
const c2 = new Colaborador("Roberto teste", "0293019230");
const c3 = new Colaborador("Roberto teste", "0349029343");
const c4 = new Colaborador("Roberto teste", "0292398498");
e1.addNewColab(c2);
e1.addNewColab(c3);
e1.addNewColab(c4);
e1.showColabs();

