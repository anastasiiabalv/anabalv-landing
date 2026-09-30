module.exports = {
  apps: [
    {
      name: 'anabalvdev',
      script: './.output/server/index.mjs',
      exec_mode: 'cluster',
      instances: 'max',
      env: {
        NODE_ENV: 'production',
        PORT: 7034
      }
    }
  ]
};





