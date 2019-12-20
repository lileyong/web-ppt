<template>
    <div class="ppt superiority">
        <ppt-title>改造过程-BOSS系统部署调试</ppt-title>
        <ppt-text>本地构建成功，在BOSS系统构建却失败了。ldd后发现是CentOS上chrome依赖的动态链接库（so文件）缺失。</ppt-text>
        <ppt-code>
            <pre><code>ldd /var/boss/git@repo.we.com/build/source/dsp-tc-pay.test/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome</code></pre>
        </ppt-code>
        <ppt-code>
            <pre><code>chrome version: linux-686378
lake:
libX11.so.6 => not found
libX11-xcb.so.1 => not found
libxcb.so.1 => not found
libXcomposite.so.1 => not found
libXcursor.so.1 => not found
libXdamage.so.1 => not found
libXext.so.6 => not found
libXfixes.so.3 => not found
libXi.so.6 => not found
libXrender.so.1 => not found
libXtst.so.6 => not found
libcups.so.2 => not found
libXss.so.1 => not found
libXrandr.so.2 => not found
libatk-1.0.so.0 => not found
libatk-bridge-2.0.so.0 => not found
libpangocairo-1.0.so.0 => not found
libpango-1.0.so.0 => not found
libcairo.so.2 => not found
libatspi.so.0 => not found
libgtk-3.so.0 => not found
libgdk-3.so.0 => not found
libgdk_pixbuf-2.0.so.0 => not found</code></pre>
        </ppt-code>
    </div>
</template>
