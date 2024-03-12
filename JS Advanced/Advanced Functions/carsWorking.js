function objectModifier() {
  const objects = {};

  function create(name, parentName = null) {
    if (parentName) {
      const parent = objects[parentName];
      objects[name] = Object.create(parent);
    } else {
      objects[name] = {};
    }
  }

  function set(name, key, value) {
    objects[name][key] = value;
  }

  function print(name) {
    const obj = objects[name];
    const allProps = new Set();

    let currentObj = obj;

    while (currentObj) {
      for (let key in currentObj) {
        if (currentObj.hasOwnProperty(key)) {
          allProps.add(`${key}:${currentObj[key]}`);
        }
      }
      currentObj = Object.getPrototypeOf(currentObj);
    }

    console.log([...allProps].join(","));
  }

  return {
    executeCommands(commands) {
      commands.forEach((command) => {
        const [action, ...params] = command.split(" ");
        if (action === "create") {
          const [name, asd, parentName] = params;
          create(name, parentName);
        } else if (action === "set") {
          const [name, key, value] = params;
          set(name, key, value);
        } else if (action === "print") {
          const [name] = params;
          print(name);
        }
      });
    },
  };
}

// Example usage
const modifier = objectModifier();

const commands = [
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
];

modifier.executeCommands(commands);
// Output:
// color:red
// model:new,color:red




