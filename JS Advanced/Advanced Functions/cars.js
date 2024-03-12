function createObj(input){
    let obj = {};

    function create(name, parentName = null){
        if(parentName){
            const parent = obj[parentName];
            obj[name] = Object.create(parent)
        } else {
            obj[name] = {}
        }
    }
    function set(name, key, value){
        obj[name][key] = value
    }
    function print(name) {
        const object = obj[name];
        const inherited = [];
    
        for (let key in object) {
          if (object.hasOwnProperty(key)) {
            inherited.push(`${key}:${object[key]}`);
          }
        }
    
        console.log(inherited.join(","));
      }
      
      input.forEach((element) => {
        const [command, ...params] = element.split(" ")
        if(command === "create"){
            const [name, inherit, parentName] = params;
            create(name, parentName);
        } else if (command === "set"){
            const [name, key, value] = params;
            set(name, key, value);
        } else if (command === "print"){
            const [name]= params;
            print(name)
        }
      });
    


}
createObj(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2'])