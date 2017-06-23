# git-url-uglify [![Build Status](https://travis-ci.org/bukinoshita/git-url-uglify.svg?branch=master)](https://travis-ci.org/bukinoshita/git-url-uglify)

> Uglify git url

## Install

```
$ npm install --save git-url-uglify
```

## Usage
```js
const gitUrlUglify = require('git-url-uglify')

gitUrlUglify('https://github.com/bukinoshita/git-url-uglify.git')
// => { owner: 'bukinoshita', repository: 'git-url-uglify' }
```

## API

### gitUrlUglify(repo)

returns an `object`.

#### repo

Type: `string`<br/>
Required

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
