const electron = require('electron')

require('electron-reload')(__dirname, {
   electron: require(`${__dirname}/node_modules/electron`)
})

const {app, BrowserWindow } = require('electron')

function createWindow () {
    let win = new BrowserWindow ({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('src/pages/login/index.html')

}

app.whenReady().then(createWindow)