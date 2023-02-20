const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomIndex = (data) => Math.floor(Math.random() * data.length);

export { getRandomNumber, getRandomIndex };

//Для ментора: генерацию ранд.индекса пока решил не убирать, так как не совсем понял, как будем реализовывать.