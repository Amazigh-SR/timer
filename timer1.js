//Array containing the user input
const input = process.argv.slice(2);

//Loop through the input array and associate each setTimeout to an element * 1000
for (const num of input) {
  if (isNaN(Number(num)) || Number(num) < 0) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write("\x07");
  }, Number(num) * 1000);
}
