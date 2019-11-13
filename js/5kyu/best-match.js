// https://www.codewars.com/kata/58b38256e51f1c2af0000081

function bestMatch(aGoals, zGoals) {
  // Keep meta info about the best matching element so far.
  let meta = { goals: 0, diff: 0, index: 0 };
  
  for(let i = 0; i < zGoals.length; i++) {
    // check the score difference for the current match in the array(s)
    let diff = aGoals[i] - zGoals[i];
    // if the diff is smaller than the previous best match, update our match info
    // or if the diff is the same as the last best match but team1 scored more goals, update our match info
    if((diff < meta.diff || meta.diff === 0) || (diff === meta.diff && aGoals[i] > meta.goals)) {
        meta.goals = aGoals[i];
        meta.diff = diff;
        meta.index = i;
    }
  }
  return meta.index;
}