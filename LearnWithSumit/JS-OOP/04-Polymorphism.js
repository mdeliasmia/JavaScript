// YoutubeTutorialLink = https://www.youtube.com/watch?v=COn9x4NbOBY
class Player{
    #name;// # is ES-6 private access modifier !
    #age;
    constructor(n,a){
        this.#name=n;
        this.#age=a;
    }
    getName(){
        return this.#name;
    }
    setName(n){
        this.#name=n;
    }
    getAge(){
        return this.#age;
    }
    setAge(dob){
        this.#age=dob;
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
    getPlayerDetails(){
        return `${this.getName()} is ${this.getAge()} Years old and Total Centuries = ${this.#centuries}`;
    }
}
class Footballer extends Player{
    #goals;
    constructor(n,a,g){
        super(n,a);
        this.#goals=g;
    }
    getPlayerDetails(){
        return `${this.getName()} is ${this.getAge()} Years old and Total Goals = ${this.#goals}`;
    }
}

const sakib = new Cricketer("sakib",36,15);
const ronaldo=new Footballer("Ronaldo",40,200);

console.log(sakib.getPlayerDetails());
console.log(ronaldo.getPlayerDetails());