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
  