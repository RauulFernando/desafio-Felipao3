class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase(); // Normaliza para evitar erros de caixa alta
  }

  atacar() {
    let ataque;
    let tipoAtaque;

    // Estrutura de decisão para definir o ataque baseado no tipo
    switch (this.tipo) {
      case 'atirador':
        ataque = 'revólver';
        tipoAtaque = 'disparou com o';
        break;
      case 'guerreiro':
        ataque = 'espada';
        tipoAtaque = 'cortou com a';
        break;
      case 'monge':
        ataque = 'artes marciais';
        tipoAtaque = 'golpeou usando';
        break;
      case 'ninja':
        ataque = 'shuriken';
        tipoAtaque = 'lançou uma';
        break;
      default:
        ataque = 'um ataque indefinido';
        tipoAtaque = 'usou';
    }

    // Exibe a mensagem final
    console.log(`o ${this.nome} que é ${this.tipo} ${tipoAtaque} ${ataque}`);
  }
}

// --- Exemplos de Saída ---

let heroi1 = new Heroi("GankPlank", 1000, "atirador");
heroi1.atacar(); // o GankPlank que é atirador disparou com o revólver

let heroi2 = new Heroi("Garen", 87, "guerreiro");
heroi2.atacar(); // o Garen que é guerreiro cortou com a espada

let heroi3 = new Heroi("Lee Sin", 32, "monge");
heroi3.atacar(); // o Lee Sin que é monge golpeou usando artes marciais

let heroi4 = new Heroi("Kennen", 25, "ninja");
heroi4.atacar(); // o Kennen que é ninja lançou uma shuriken
