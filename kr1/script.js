// Варіант-2
function TriangleArea(base = 7, height = 3) {
    const area = 0.5 * base * height;
    console.log("Площа трикутника:", area);
}
TriangleArea();
TriangleArea(3, 6);

function Boat(color, maxSpeed, maxTonnage, brand, countryOfRegistration) {
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.maxTonnage = maxTonnage;
    this.brand = brand;
    this.countryOfRegistration = countryOfRegistration;
}

Boat.prototype.AssignCaptain = function(name, yearsOfExperience, hasFamily) {
    this.captain = {
        name: name,
        yearsOfExperience: yearsOfExperience,
        hasFamily: hasFamily
    };
};

class SimpleCircle {
    constructor(majorRadius) {
        this.majorRadius = majorRadius;
    }

    set MajorRadius(value) {
        this.majorRadius = value;
    }
}

class SimpleEllipse extends SimpleCircle {
    constructor(majorRadius, minorRadius) {
        super(majorRadius);
        this.minorRadius = minorRadius;
    }

    static CalculateArea(majorRadius, minorRadius) {
        return Math.PI * majorRadius * minorRadius;
    }

    square() {
        return Math.PI * this.majorRadius * this.minorRadius;
    }
}

const myBoat = new Boat("Blue", 30, 100, "Bark", "USA");
myBoat.AssignCaptain("John Doe", 10, true);
console.log(myBoat);

const myCircle = new SimpleCircle(5);
console.log(myCircle);

const myEllipse = new SimpleEllipse(7, 3);
console.log(myEllipse);
console.log("Площа еліпса:", SimpleEllipse.CalculateArea(myEllipse.majorRadius, myEllipse.minorRadius));

function SubGenerator(number) {
    return function(subtrahend) {
        return subtrahend - number;
    };
}

const subtractFive = SubGenerator(5); 
console.log(subtractFive(10)); 
console.log(subtractFive(8)); 


