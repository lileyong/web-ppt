<template>
    <div class="ppt">
        <h2 class="subtitle">使用</h2>
        <div v-highlight>
            <pre>
                <code>const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
    plugins: [
        new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, 'dist'),
            routes: ['/', '/about', '/contact']
        })
    ]
}</code>
            </pre>
        </div>
    </div>
</template>
