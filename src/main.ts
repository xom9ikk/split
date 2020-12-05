import * as core from '@actions/core';

const main = () => {
  try {
    const string = core.getInput('string');
    const separator = core.getInput('separator');
    const limit = parseInt(core.getInput('limit'), 10);

    console.log(`Input string : ${string}`);
    console.log(`Separator    : ${separator}`);
    console.log(`Limit        : ${limit}`);

    const parts = string.split(separator, limit);

    parts.forEach((part, index) => {
      core.setOutput(`_${index}`, part);
    });

    core.setOutput('length', parts.length);
  } catch (error) {
    core.setFailed(error.message);
  }
};

main();
