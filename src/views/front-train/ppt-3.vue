<template>
    <div class="ppt">
        <h2 class="subtitle">环境搭建</h2>
        <section>
            <h2>1、安装git，配置git环境。（已安装请忽略）</h2>
            <p>参考
                <a href="http://wiki.we.com:8090/pages/viewpage.action?pageId=36536935" target="_blank">http://wiki.we.com:8090/pages/viewpage.action?pageId=36536935</a>
            </p>
        </section>
        <section>
            <h2>2、拉取代码</h2>
            <p>创建项目目录，如：D:/project。在项目目录下打开命令行，输入以下命令：</p>
            <pre><code>git clone git@repo.we.com:web/t8t-scm-ewc.git</code></pre>
            <p>若无权限拉取联系运维开通。</p>
            <p>安装完成后会在project目录下新增t8t-scm-ewc目录。</p>
        </section>
        <section>
            <h2>3、安装Node</h2>
            <p>下载地址：https://nodejs.org/en/</p>
            <img src="../../img/nodejs-download.png">
            <p>下载LTS版即可。</p>
            <p>安装直接下一步即可。</p>
        </section>
        <section>
            <h2>4、全局安装yarn</h2>
            <p>在任意位置打开命令行输入以下命令：</p>
            <pre><code>npm install yarn -g</code></pre>
        </section>
        <section>
            <h2>5、安装项目依赖</h2>
            <p>进入t8t-scm-ewc目录。打开命令行，输入以下命令：</p>
            <code>
                cd t8t-scm-ewc<br>
                npm config set registry http://npm.package.we.com/<br>
                yarn
            </code>
        </section>
        <section>
            <h2>6、启动项目</h2>
            <p>进入t8t-scm-ewc目录。打开命令行，输入以下命令：</p>
            <code>
                npm run dev
            </code>
        </section>
        <section>
            <h2>7、相关参考</h2>
            <p>开发指南：<a href="http://192.168.1.156:3000/">http://192.168.1.156:3000/</a></p>
            <p>vue官方文档：<a href="https://cn.vuejs.org/v2/guide/">https://cn.vuejs.org/v2/guide/</a></p>
            <p>element-ui文档：<a href="http://192.168.1.156:8085/#/zh-CN/component/installation">http://192.168.1.156:8085/#/zh-CN/component/installation</a></p>
        </section>
    </div>
</template>
