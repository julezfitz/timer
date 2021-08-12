const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let readLineLoop = function() {
  rl.question("What time would you like your alarm? ", (answer) => {
    if (answer === 'b') {
      process.stdout.write('\x07');
      readLineLoop();
    }
    if ((answer >= 1) && (answer <= 9)) {
      console.log(`Setting timer for ${answer} seconds.`);
      timer(answer);
      readLineLoop();
    }
  });
};

readLineLoop();

const timer = function(time) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
};

rl.on('SIGINT', function() {
  console.log(" Thanks for using me, Ciao!");
  rl.close();
  process.exit();
});
