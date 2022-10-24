module.exports = {
    branches: ['main'],
    plugins: [
      /**
       * Analyzes commits to determine what type of release to generate.
       *
       * @see https://github.com/semantic-release/commit-analyzer#readme
       */
      ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits' }],
      /**
       * Generates release changelog content.
       *
       * @see https://github.com/semantic-release/release-notes-generator#readme
       */
      '@semantic-release/release-notes-generator',
      /**
       * Publishes to NPM and updates the version number in package*.json files.
       * The actual publish step gets skipped due to `"private": true` in package.json.
       *
       * @see https://github.com/semantic-release/npm
       */
      '@semantic-release/npm',
      /**
       * Commits version number increments back to `main`.
       *
       * @see https://github.com/semantic-release/git#readme
       */
      ['@semantic-release/git', { assets: ['package.json', 'package-lock.json'] }],
      /**
       * Publishes a GitHub release.
       *
       * @see https://github.com/semantic-release/github#readme
       */
      [
        '@semantic-release/github',
        {
          failComment: false,
          failTitle: false,
          labels: false,
          releasedLabels: false,
          successComment: false,
        },
      ],
    ],
  }
  