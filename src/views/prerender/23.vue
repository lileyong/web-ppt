<template>
    <div class="ppt superiority">
        <ppt-title>滑铁卢：UAT环境BOSS系统构建失败</ppt-title>
        <ppt-text>测试环境部署成功，UAT环境依旧部署失败。原因还是部分chrome依赖的动态链接库（so文件）缺失。查找资料发现libatk-bridge-2.0.so.0 CentOS 6.5不支持，需要7以上版本。而我们公司的BOSS系统构建机器测试环境是7版本，UAT/生产环境均是6.5版本。与运维商量升级BOSS系统机器，运维认为存在风险，作罢。</ppt-text>
        <ppt-code>
            <pre><code>[root@bj-ops3 linux-686378]# ldd /var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome| grep "not found"
/var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome: /usr/lib64/libnss3.so: version `NSS_3.22' not found (required by /var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_moduleva.s/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome)
/var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome: /lib64/libc.so.6: version `GLIBC_2.14' not found (required by /var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome)
/var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome: /lib64/libc.so.6: version `GLIBC_2.15' not found (required by /var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome)
/var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome: /lib64/libc.so.6: version `GLIBC_2.16' not found (required by /var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome)
    libatk-bridge-2.0.so.0 => not found
    libatspi.so.0 => not found
    libgtk-3.so.0 => not found
    libgdk-3.so.0 => not found
[root@bj-ops3 linux-686378]# yum install libatk-bridge-2.0.so.0
Loaded plugins: fastestmirror, security
Loading mirror speeds from cached hostfile
Setting up Install Process
No package libatk-bridge-2.0.so.0 available.
Error: Nothing to do
</code></pre>
        </ppt-code>
    </div>
</template>
