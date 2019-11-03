// https://www.codewars.com/kata/5902bc7aba39542b4a00003d

let whoEatsWho = function(zoo) {
  let zooItems = zoo.split(',');
  // Set our initial zoo as the first line
  let history = [zoo];
  
  for(let i = 0; i < zooItems.length; i++) {
    // get the current animals neighbours, remove undefined elements that might appear
    // if we're at the start or end of an array
    let neighbours = [
      { animal: zooItems[i-1], index: i-1 }, 
      { animal: zooItems[i+1], index: i+1 }, 
    ].filter(el => el.animal);
    
    // Get a list of diets for the current zoo item
    let diets = getDietList(zooItems[i]);
    let match;
    // Some things in the zoo might be inamite and doesn't eat food, so check the diet length
    if(diets.length > 0) {
      // Find the first matching food from left to right (neighbours are already ordered left to right)
      match = neighbours.find(neighbour => {
        return diets.find(food => {
          return neighbour.animal === food;
        });
      });
    }
    // If we find that our current animal can eat one of its neighbours, compose the string and add it to the history array
    // also remove the eaten object from the zooItems array
    if(match) {
      let eatString = zooItems[i] + ' eats ' + match.animal;
      zooItems.splice(match.index, 1);
      history.push(eatString);
      // when we've removed an animal we restart the loop since ordering may have changed.
      // and we set it to -1 instead of 0 because after this iteration the i var will be incremented.
      i = -1;
    }
  }
  
  // push the remaning zooItems as our final array entry, these things cannot eat anything / or cannot eat their neigbours.
  history.push(zooItems.join(','));
  return history;
}

function getDietList(animal) {
  let diet = {
    'antelope': ['grass'],
    'big-fish': ['little-fish'],
    'bug': ['leaves'],
    'bear': ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
    'chicken': ['bug'],
    'cow': ['grass'],
    'fox': ['chicken', 'sheep'],
    'giraffe': ['leaves'],
    'lion': ['antelope', 'cow'],
    'panda': ['leaves'],
    'sheep': ['grass'],
    'grass': []
  };

  let result = diet[animal];
  return result ? result : [];
}
