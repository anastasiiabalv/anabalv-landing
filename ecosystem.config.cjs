module.exports = {
  apps: [
    {
      name: 'anabalv',
      script: './.output/server/index.mjs',
      exec_mode: 'cluster',
      instances: 'max',
      env: {
        NODE_ENV: 'production',
        PORT: 9000
      }
    }
  ]
};





