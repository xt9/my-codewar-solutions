// https://www.codewars.com/kata/566b490c8b164e03f8000002

function fight(r1, r2, tactics) {
  
  for(let round = 0; round < highestTacticsLength(r1, r2); round++) {
    if(r2.speed > r1.speed) {
      r1 = damageRobot(r1, r2, round, tactics);
      if(isDead(r1)) break;
      r2 = damageRobot(r2, r1, round, tactics);
      if(isDead(r2)) break;
    } else {
      r2 = damageRobot(r2, r1, round, tactics);
      if(isDead(r2)) break;
      r1 = damageRobot(r1, r2, round, tactics);
      if(isDead(r1)) break;
    }
  }
  
  if(r1.health === r2.health) {
    return 'The fight was a draw.';
  }
  return r1.health > r2.health ? getVictoryLine(r1) : getVictoryLine(r2);
}

function getVictoryLine(r) {
  return `${r.name} has won the fight.`;
}

function highestTacticsLength(r1, r2) {
  return r1.tactics.length > r2.tactics.length ? r1.tactics.length : r2.tactics.length;
}

function damageRobot(target, assailant, round, tactics) {
  let tacticsKey = assailant.tactics[round];
  let damage = tacticsKey ? tactics[tacticsKey] : 0;
  console.log('Round: ' + round + ': ' + tacticsKey + ' -> ' + target.name + '(ass speed: ' + assailant.speed + ')');
  target.health -= damage;
  if(isDead(target)) {
    console.log(target.name + ' died, ' + assailant.name + ' wins.');
  }
  return target;
}

function isDead(r) {
  return r.health <= 0;
}