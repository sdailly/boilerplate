module.exports = {
  server: {
    port: 8080,
    host: 'localhost'
  },
  scripts: {
    entry: './src/views/index.js',
    watch: './src/**/**/index.js',
    dist: './dist/scripts/'
  },
  styles : {
    entry: './src/views/index.scss',
    watch: './src/views/*.scss',
    dist: './dist/styles'
  },
  img : {
    entry: './src/',
    watch: '',
    dist: './dist/assets/images'
  },
  assets: {
    entry: './src/assets/',
    dist: './dist/assets',
  }
};
