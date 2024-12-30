// YoutubeTutorialLink = https://www.youtube.com/watch?v=COn9x4NbOBY
class BatterArray{
    #items;// # is ES-6 private access modifier !
    constructor(){
        this.#items=[];
    }
    getItem(){
        return [...this.#items];
    }
    addItem(item){
        this.#items.push(item);
    }
    removeItem(itemToDelete){
        this.#items=this.#items.filter((item)=> item !== itemToDelete);
    }
    modifyItem(itemToChange,newItem){
        const index=this.#items.indexOf(itemToChange);
        if(index !== -1){
            this.#items[index]=newItem;
        }
    }
}

const arr= new BatterArray();

arr.addItem("This is HTML");
arr.addItem("This is CSS");
arr.addItem("This is JS");
console.log('After Adding Item');
console.log(arr.getItem());
arr.modifyItem("This is CSS","This is PHP");
console.log('After Modifing Item');
console.log(arr.getItem());
console.log('After Deleting Item');
arr.removeItem("This is PHP")
console.log(arr.getItem());