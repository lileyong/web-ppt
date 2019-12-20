<template>
    <div class="ppt superiority">
        <ppt-title>妥协：本地构建好再部署</ppt-title>
        <ppt-text>由于运维不同意升级BOSS系统机器，因此只能本地构建好再部署到BOSS系统。</ppt-text>
        <ppt-code>
            <pre><code>"scripts": {
        "dev": "vue-cli-service serve",
        "build": "echo 'build success'",
        "build:local": "vue-cli-service build",
        "lint": "vue-cli-service lint",
        "lint:fix": "vue-cli-service lint --fix"
    },</code></pre>
        </ppt-code>
    </div>
</template>
