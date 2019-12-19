<template>
    <div class="ppt superiority">
        <ppt-title>安装遇到的问题</ppt-title>
        <ppt-text>如果你直接采用我上面提供的方式安装，那么你可能会遇到下面的报错：</ppt-text>
        <ppt-code>
            <pre><code>ERROR: Failed to download Chromium r686378! Set "PUPPETEER_SKIP_CHROMIUM_DOWNLOAD" env variable to skip download.
Error: end of central directory record signature not found
    at D:\project\web-ppt\node_modules\yauzl\index.js:167:14
    at D:\project\web-ppt\node_modules\yauzl\index.js:473:5
    at D:\project\web-ppt\node_modules\fd-slicer\index.js:32:7
    at FSReqWrap.wrapper [as oncomplete] (fs.js:467:17)</code></pre>
        </ppt-code>
        <ppt-text>这是因为prerender-spa-plugin依赖puppeteer，而安装puppeteer需要翻墙下载Chromium（大概100-200Mb）。</ppt-text>
    </div>
</template>
