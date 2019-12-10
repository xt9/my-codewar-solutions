// https://www.codewars.com/kata/574d0b01b4b769b207000ca3

class Wand {
  constructor(spells) {
    this.spellList = [];
    
    if(spells) {
      let spellMap = new Map(Object.entries(spells));
      spellMap.forEach((v, k) => this[k] = () => {
        this.spellList.unshift(k);
        return v.apply(this);
      });
    }
    
    return new Proxy(this, {
      set: function(target, name, val) {
        if(isFunction(val)) {
          target[name] = function() {
            target.spellList.unshift(name);
            return val.apply(target);
          };
        } else {
          target[name] = val;
        }
        return true;
      }
    });
  }
  
  deletrius() {
    this.spellList = [];
    let result = [...this.spellList];
    this.spellList.unshift('deletrius');
    return result;
  }
  
  prioriIncantatem() {
    let result = [...this.spellList].filter((spell, i) => {
      return i < MAX_PRIOR_SPELLS;
    });
    this.spellList.unshift('prioriIncantatem');
    return result;
  }
}

Object.getOwnPropertyNames(Object.prototype).forEach(key => {
  if(isFunction(Object.prototype[key])) {
    Wand.prototype[key] = function() {
      this.spellList.unshift(key);
      return Object.prototype[key].apply(this);
    };
  }
});

function isFunction(functionToCheck) {
 return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}