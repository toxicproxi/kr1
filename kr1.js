let name = 'Никита';
const birthday = 2002;
const month = 11;
const hello = (`Привет, ${name}, ${month} месяца ${birthday} года рождения`);

for (let i = -15; i <= 15; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

const range = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
};
range(-15, 15);


const average = (a, b) => {
  return (a + b) / 2;
};

const square = x => x * x;

const cube = x => x**3;

for (let i = 1; i <= 5; i++) {
  console.log(average(square(i), cube(i)));
}