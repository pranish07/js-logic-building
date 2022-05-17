let input = 6;

for (i = 1; i <= 12; i++) {
  const result = i * input;
  if (i < 10) {
    console.log(`${input}*0${i} = ${result}`);
  } else console.log(`${input}*${i} = ${result}`);
}
