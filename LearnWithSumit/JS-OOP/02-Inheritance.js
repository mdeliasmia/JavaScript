// YoutubeTutorialLink = https://www.youtube.com/watch?v=COn9x4NbOBY
class Player{
    #name;// # is ES-6 private access modifier !
    #age;
    constructor(n,a){
        this.#name=n;
        this.#age=a;
    }
    getPlayerDetails(){
        return `${this.#name} is ${this.#age} Years old`;
    }
}

class Cricketer extends Player{
    #centuries;
    constructor(n,a,c){
        super(n,a);
        this.#centuries=c;
    }
}
class Footballer extends Player{
    #goals;
    constructor(n,a,g){
        super(n,a);
        this.#goals=g;
    }
}

const sakib = new Cricketer("sakib",36,15);
const ronaldo=new Footballer("Ronaldo",40,200);

console.log(sakib.getPlayerDetails());
console.log(ronaldo.getPlayerDetails());