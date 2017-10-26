const config = require('./config');

const siteOperator = module.require(`./sites/${config.site}`);

siteOperator
  .run()
  .catch((error) => {
    console.error('CATCH ERROR: ', error);
    process.exit(1);
  })
  .then(result =>
    process.stdout.write(`\n  result: \n${JSON.stringify(result)}`));
