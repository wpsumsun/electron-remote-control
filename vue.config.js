// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // configureWebpack: {
  //   // Naming bundle 'bundleName'
  //   entry: './src/renderer/main.ts',
  //   optimization: {
  //     splitChunks: false
  //   }
  // },
  pages: {
    index: {
      entry: 'src/renderer/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'vue-cli-electron',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
    // loader: 'src/loader/main.js' // 多页loader页
  },
  chainWebpack: (config) => { // 由于我们修改了渲染进程目录，修改'@'的alias
    config.resolve.alias.set('@', resolve('src/renderer'))
  },
  // 如果添加了pages，请把electronBuilder里的rendererProcessFile删除，两个都是web页面的入口，是互斥的。
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: './src/main/index.ts',
      // rendererProcessFile: './src/renderer/main.ts',
      mainProcessWatch: ['src/main'],
      builderOptions: {
        appId: process.env.VUE_APP_APPID,
        productName: process.env.VUE_APP_PRODUCTNAME,
        extraMetadata: {
          name: process.env.VUE_APP_APPID.split('.').pop(),
          version: process.env.VUE_APP_VERSION
        },
        asar: true,
        directories: {
          output: 'dist_electron',
          buildResources: 'build',
          app: 'dist_electron/bundled'
        },
        files: [
          {
            filter: [
              '**'
            ]
          }
        ],
        extends: null,
        electronVersion: '11.3.0',
        extraResources: [],
        electronDownload: {
          mirror: 'https://npm.taobao.org/mirrors/electron/'
        },
        dmg: {
          contents: [
            {
              type: 'link',
              path: '/Applications',
              x: 410,
              y: 150
            },
            {
              type: 'file',
              x: 130,
              y: 150
            }
          ]
        },
        mac: {
          icon: 'public/icons/icon.icns'
        },
        nsis: {
          oneClick: false,
          perMachine: true,
          allowToChangeInstallationDirectory: true,
          warningsAsErrors: false,
          allowElevation: false,
          createDesktopShortcut: true,
          createStartMenuShortcut: true
        },
        win: {
          target: 'nsis',
          icon: 'public/icons/icon.ico',
          requestedExecutionLevel: 'highestAvailable'
        },
        linux: {
          icon: 'public/icons'
        },
        publish: {
          provider: 'generic',
          url: 'http://127.0.0.1'
        }
      }
    }
  }
}
