// https://www.codewars.com/kata/58298e19c983caf4ba000c8d

function minUmbrellas(weather) {
  // return 0 if weather does not consist of even pairs.
  if(weather.length % 2 !== 0) {
    return 0;
  }

  let dayForecasts = [];
  for(i = 0; i < weather.length; i++) {
    dayForecasts.push({ 
      morning: weather[i], 
      afternoon: weather[i+1]
    });
    // increment an extra time since we put 2 elements in forecast
    i++;
  }

  let umbrellas = {
    home: 0,
    work: 0
  };
  
  dayForecasts.forEach((day, i) => {
    // if it's raining when we leave in the morning we need an umbrella.
    if(isRaining(day.morning)) {
      // if we have no umbrellas at home we need to 'create' one
      if(umbrellas.home === 0) {
        umbrellas.home++;
      }
      // when we leave our home with an umbrella it's no longer there
      umbrellas.home--;
      // But when we arrive at work we gain an umbrella there.
      umbrellas.work++;
    }
    
    // if it's raining when we're leaving from work we need an umbrella.
    if(isRaining(day.afternoon)) {
      // if we have no umbrellas at work we need to 'create' one
      if(umbrellas.work === 0) {
        umbrellas.work++;
      }
      // when we leave our work with an umbrella it's no longer there
      umbrellas.work--;
      // But when we arrive at our home we gain an umbrella there.
      umbrellas.home++;
    }
  });
  
  return umbrellas.home + umbrellas.work;
}

function isRaining(val) {
  return val === 'rainy' || val === 'thunderstorms';
}