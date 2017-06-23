'use strict'

import test from 'ava'
import m from './'

test(t => {
  const error = t.throws(() => { m(2) }, TypeError)
  const error2 = t.throws(() => { m('a') }, TypeError)
  const expected = { owner: 'bukinoshita', repository: 'git-url-prettify' }
  const https = m('https://github.com/bukinoshita/git-url-prettify.git')
  const ssh = m('git@github.com:bukinoshita/git-url-prettify.git')

  t.is(https.owner, expected.owner)
  t.is(https.repository, expected.repository)
  t.is(ssh.owner, expected.owner)
  t.is(ssh.repository, expected.repository)
  t.is(error.message, '`repo` should be a string.')
  t.is(error2.message, '`repo` is not a git url.')
})
