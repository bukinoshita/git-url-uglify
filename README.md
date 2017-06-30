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


## Related

- [git-synced](https://github.com/bukinoshita/git-synced) — 🎐 Keep a fork up to date
- [del-git-index](https://github.com/bukinoshita/del-git-index) — Safely delete index.lock of the current project
- [repo-exist](https://github.com/bukinoshita/repo-exist) — Checks if GitHub repository exist
- [gopn](https://github.com/bukinoshita/gopn) — Open GitHub repositories
- [is-github-repo](https://github.com/bukinoshita/is-github-repo) — Checks if string is a git repository
- [git-url-prettify](https://github.com/bukinoshita/git-url-prettify) — Prettify git url


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
