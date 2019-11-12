// https://www.codewars.com/kata/567b22d9ba0e6b8c2400001e

function canCast(pool, ...spells) {
  let manaPool = parseMana(pool);
  // Join all the spells into one string so we only have to deal with one spell
  let spell = parseMana(spells.join(''));
  
  return manaPool.canCastSpell(spell);
}

class Mana {
  constructor() {
    this.black = 0;
    this.green = 0; 
    this.red = 0;
    this.blue = 0; 
    this.white = 0;
    this.colorless = 0;
  }
  
  canCastSpell(manaCost) {
    // clone this, using the current prototype (or we won't have member methods avaiable on tempMana)
    let tempMana = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    let result = false;
    let props = Object.getOwnPropertyNames(tempMana);
    // iterate the various mana types
    for(let i = 0; i < props.length; i++) {
      if(props[i] === 'colorless') {
        // colorless will be evaluated last since it's the last defined property
        result = tempMana.getColorLessMana() >= manaCost.colorless;
      } else if(tempMana[props[i]] < manaCost[props[i]]) {
        // return early if a type of mana is too low
        return false;
      } else {
        tempMana[props[i]] -= manaCost[props[i]];
      }
    };
    
    return result;
  }
  
  getColorLessMana() {
    return this.colorless + this.black + this.green + this.red + this.blue + this.white;
  }
  
}

function parseMana(string) {
  let chars = [...string];
  let mana = new Mana();
  chars.forEach(c => {
    // if the char is a number we assign it to colorless
    if(!isNaN(parseInt(c))) {
      mana.colorless += parseInt(c);
    } else {
      switch(c) {
        case 'B': mana.black++; break;
        case 'G': mana.green++; break;
        case 'R': mana.red++; break;
        case 'U': mana.blue++; break;
        case 'W': mana.white++; break;
      }
    }
  });
  // return the mana object
  return mana;
}