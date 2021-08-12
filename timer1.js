let args = (process.argv.slice(2)).map(i => Number(i));

const timer = function(args) {
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'number' && (args[i] > 0)) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, args[i] * 1000);
    }
  }
};

timer(args);