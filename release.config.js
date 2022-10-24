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
       * Executes custom shell commands.
       *
       * @see https://github.com/semantic-release/exec#readme
       */
      [
        '@semantic-release/exec',
        {
          // Set a GitHub Actions output to make the release version available in our other steps
          successCmd: 'echo "::set-output name=release_version::${nextRelease.version}"',
        },
      ],
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
  