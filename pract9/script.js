let arr1 = [
    1,
    5,
    9,
    4,
    {
        name: "Paliichuk Artur",
        mark: 75, 
        subject: "JS"
    },
    function(number) {
        return number ** 4;
    },
    function(obj) {
        console.log(obj.name);
    },
    -6,
    14
];

arr1.forEach(item => console.log(item));

arr1.splice(arr1.indexOf(5), 1, 8);

arr1.splice(arr1.indexOf(4), 0, "Hello");

let arr2 = arr1.filter(item => typeof item === 'function');

arr2.forEach(item => console.log(item));

let arr3 = arr1.slice(0, 3).concat(arr1.slice(4, 5));

arr3.forEach(item => console.log(item));

let arr3Reversed = arr3.slice().reverse();

arr3Reversed.forEach(item => console.log(item));

console.log(arr1.indexOf(-6));

console.log(arr1.filter(item => typeof item === 'number' && item > 4));

arr1.find(item => typeof item === 'function' && item.toString().includes('console.log(obj.name)'))(arr1.find(item => typeof item === 'object'));

console.log(arr1.find(item => typeof item === 'function' && item.toString().includes('return number ** 4'))(-6));

for (let index in arr1) {
    console.log(arr1[index]);
}

for (let index in arr1) {
    if (typeof arr1[index] === 'object') {
        for (let key in arr1[index]) {
            console.log(key + ': ' + arr1[index][key]);
        }
    }
}

for (let item of arr1) {
    console.log(item);
}

arr1.version = "1.0.0";

for (let index in arr1) {
    console.log(arr1[index]);
}

for (let item of arr1) {
    console.log(item);
}

let Petryk = {
    name: "Petryk",
    skill: "JS",
    level: "junior"
};

let Mychajlyk = {
    name: "Mychajlyk",
    skill: "HTML/CSS",
    level: "middle"
};

let Volodyk = {
    name: "Volodyk",
    skill: "TS",
    level: "trainee"
};

let map1 = new Map();
map1.set(Petryk.name, Petryk);
map1.set(Mychajlyk.name, Mychajlyk);
map1.set(Volodyk.name, Volodyk);

console.log(map1.has("Ivanko"));

console.log(map1.has("Volodyk"));

for (let key of map1.keys()) {
    console.log(key);
}
map1.delete("Mychajlyk");

for (let [key, value] of map1) {
    console.log(`${value.name} is ${value.level} in ${value.skill}`);
}

let set1 = new Set([Petryk, Mychajlyk, Volodyk]);

let Antypko = {
    name: "Antypko",
    skill: "PHP",
    level: "senior"
};

console.log(set1.has(Antypko));

console.log(set1.has(Mychajlyk));

for (let item of set1) {
    console.log(item);
}
set1.delete(Volodyk);

for (let item of set1) 
    console.log(`${item.name} is ${item.level} in ${item.skill}`);

