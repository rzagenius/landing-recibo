// ecosystem.config.js
module.exports = {
    apps: [
        {
            name: 'landing-recibos',
            script: 'npm',
            args: 'run start:prod',
            watch: ['src', 'public', 'index.html'],
            ignore_watch: ['node_modules', 'dist'],
            watch_delay: 500,
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};
