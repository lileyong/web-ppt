<template>
    <div class="ppt superiority">
        <ppt-title>基础用法</ppt-title>
        <ppt-code>
            <pre><code>const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  plugins: [
    ...
    new PrerenderSPAPlugin({
      // Required - The path to the webpack-outputted app to prerender.
      staticDir: path.join(__dirname, 'dist'),
      // Required - Routes to render.
      routes: [ '/', '/about', '/some/deep/nested/route' ],
    })
  ]
}</code></pre>
        </ppt-code>
    </div>
</template>
