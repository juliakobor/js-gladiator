
export class Arena {
    name;
    gladiators = [];

    //the arena has a name
    constructor(name, gladiators) {
        this.name = name;
        this.gladiators = gladiators;
    }

    //the name is capitalized
    get capName() {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }

    //the arena can have gladiators
    /* set gladiators(gladNames) {
         this.#gladiators = gladNames;
     }
 }*/

    /*let gladiatorMixin = {
        addGladiators(gladiators) {
            console.log(gladiators);
        }
    Object.assign(Arena.prototype, gladiatorMixin);
    colosseum.addGladiators("Spartacus");*/
}

let colosseum = new Arena ("colosseum", ["Spartacus", "Atticus", "Maximus"]);
console.log(colosseum.capName);
console.log(colosseum.gladiators);




