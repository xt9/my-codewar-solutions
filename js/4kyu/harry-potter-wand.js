// https://www.codewars.com/kata/574d0b01b4b769b207000ca3

class Wand {
  constructor(spells) {
    this.spellList = [];
    
    Object.assign(this, spells);
    
    return new Proxy(this, {
      get: function(target, key) {
        if(typeof target[key] === 'function') {
          target.spellList = [key, ...target.spellList];
          return target[key];
        }
        return target[key];
      }
    });
  }
  
  deletrius() {
    this.spellList.splice(1);
  }
  
  prioriIncantatem() {
    return [...this.spellList].filter((spell, i) => {
      return i > 0 && i <= MAX_PRIOR_SPELLS;
    });
  }
}