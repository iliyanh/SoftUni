function cats(arr){



    class Cats {
        constructor(name, age){
            this.name= name,
            this.age = age
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(let el of arr){
        let line = el.split(" ");
        let name = line[0];
        let age = Number(line[1]);
        let cat = new Cats(name, age);

        cat.meow()
    }
    
    

}
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);