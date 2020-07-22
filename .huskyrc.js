const tasks = (arr) => arr.join(' && ');

module.exports = {
  hooks: {
    'commit-msg': '[[ -n $HUSKY_BYPASS ]] || commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': tasks(['lint-staged', 'pretty-quick --staged']),
  },
};
