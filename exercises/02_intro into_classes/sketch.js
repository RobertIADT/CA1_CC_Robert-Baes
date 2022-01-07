let molecules = [];

for (let i = 0; i < 100; i++) {
    molecules.push(new Molecule);
}

function setup() {
    createCanvas(500, 500);
    background(255, 0, 0);
}

function draw() {
    background(255, 0, 0);

    for (let i = 0; i < molecules.length; i++) {

        molecules[i].move();
        molecules[i].render();

    }
}