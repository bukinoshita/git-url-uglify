'use strict'

const formatted = (type, repo) => {
  const splitted = repo.split(type)[1].replace('.git', '')
  const git = splitted.split('/')
  const owner = git[0]
  const repository = git[1]

  return { owner, repository }
}

module.exports = repo => {
  const https = 'https://github.com/'
  const ssh = 'git@github.com:'

  if (typeof repo !== 'string') {
    throw new TypeError('`repo` should be a string.')
  }

  if (repo.includes(https)) {
    return formatted(https, repo)
  } if (repo.includes(ssh)) {
    return formatted(ssh, repo)
  }

  throw new TypeError('`repo` is not a git url.')
}
