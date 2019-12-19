<template>
    <div class="ppt superiority">
        <ppt-title>手动下载链接</ppt-title>
        <ppt-code>
            <pre><code>const downloadURLs = {
    linux: '%s/chromium-browser-snapshots/Linux_x64/%d/%s.zip',
    mac: '%s/chromium-browser-snapshots/Mac/%d/%s.zip',
    win32: '%s/chromium-browser-snapshots/Win/%d/%s.zip',
    win64: '%s/chromium-browser-snapshots/Win_x64/%d/%s.zip'
}</code></pre>
        </ppt-code>
        <ppt-list :list="list" style="margin-top: 20px;"></ppt-list>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [
                {
                    title: '%s',
                    text: 'platform，取值mac、linux、win64、win32、darwin等'
                },
                {
                    title: '%d',
                    text: 'revision，版本号，可在puppeteer安装目录下的packages文件的puppeteer.chromium_revision字段查看'
                }
            ]
        }
    }
}
</script>
