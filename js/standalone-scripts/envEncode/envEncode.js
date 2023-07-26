const fs = require('fs');
const { argv } = require('process');

const [, , mode] = argv;
fs.writeFileSync(
  '../.env',
  fs
    .readFileSync('../.env', 'utf8')
    .split(/\n/g)
    .map((line) => {
      const pre = line.substring(0, line.indexOf('='));
      let post = line.substring(line.indexOf('=') + 1);

      post =
        mode === 'encode'
          ? Buffer.from(post).toString('base64')
          : Buffer.from(post, 'base64').toString();

      return `${pre}=${post}`;
    })
    .join('\n'),
  'utf8'
);
