// https://www.codewars.com/kata/80-s-kids-number-10-captain-planet

function parseData() {
  let locations = [];
  let parsed = dataFile.split('\n').filter(str => str !== '##################################');
  parsed.pop();
  
  for(let i = 0; i < parsed.length; i = i + 4) {
    let [, location] = parsed[i].split(' ');
    let [,, ammonia] = parsed[i + 1].split(' ');
    let [,,, nitrogenOxide] = parsed[i + 2].split(' ');
    let [,,, carbonMonoxide] = parsed[i + 3].split(' ');
    
    locations.push({ 
      location,
      ammonia: Number(ammonia),
      nitrogenOxide: Number(nitrogenOxide),
      carbonMonoxide: Number(carbonMonoxide)
    });
  }
  
  let dangerZones = {
    ammonia: getDangerZones(locations, 'ammonia'),
    nitrogenOxide: getDangerZones(locations, 'nitrogenOxide'),
    carbonMonoxide: getDangerZones(locations, 'carbonMonoxide')
  };
  
  let ammonia = dangerZones.ammonia.reduce(reduceLocationInfo, "");
  let nitrogenOxide = dangerZones.nitrogenOxide.reduce(reduceLocationInfo, "");
  let carbonMonoxide = dangerZones.carbonMonoxide.reduce(reduceLocationInfo, "");
  
  return `Ammonia levels in ${ammonia} are too high. Nitrogen Oxide levels in ${nitrogenOxide} are too high. Carbon Monoxide levels in ${carbonMonoxide} are too high.`;
}


function reduceLocationInfo(total, current, i) {
  if(i === 0) {
    total += current.location;
  } else {
    total += ', ' + current.location;
  }
  return total;
}

function getDangerZones(array, key) {
  let highestReading = getHighestReading(array, key);
  return array.filter(loc => loc[key] === highestReading)
}

function getHighestReading(array, key) {
  // use a temp array so we dont mess up the sorting on our initial array
  let sortedByKey = [...array].sort((loc1, loc2) => loc1[key] < loc2[key]);
  return sortedByKey.length > 0 ? sortedByKey[0][key] : 0;
}