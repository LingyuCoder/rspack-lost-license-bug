
/** @type {import("@rspack/core").Configuration} */
module.exports = {
  output: {
  },
  devtool: false,
  module: {
    rules: [{
      test: /\.(?:js|jsx|mjs|cjs|ts|tsx|mts|cts)$/,
      type: 'javascript/auto',
      include: [
        {
          not: /[\\/]node_modules[\\/]/
        },
        /\.(?:ts|tsx|jsx|mts|cts)$/
      ],
      use: [
        /* config.module.rule('js').use('swc') */
        {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              externalHelpers: true,
              parser: {
                tsx: true,
                syntax: 'typescript',
                decorators: true
              },
              preserveAllComments: true,
              transform: {
                legacyDecorator: true,
                decoratorMetadata: true,
                useDefineForClassFields: false
              }
            },
            isModule: 'unknown',
            env: {
              targets: [
                'chrome >= 87',
                'edge >= 88',
                'firefox >= 78',
                'safari >= 14'
              ],
              mode: 'usage',
              coreJs: '3.36',
              shippedProposals: true
            }
          }
        }
      ]
    }]
  },
  mode: "production",
  entry: './src/index.js',
  optimization: {
    minimize: false,
  },
}
