const { app, BrowserWindow, Tray, Menu,ipcMain} = require('electron')
const path = require('path')
const ipcm = require('electron').ipcMain;


const iconPath = path.join(__dirname, './asset/img/Atodo.png');   // 应用运行时的标题栏图标
let tray = null;

function createWindow () {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      backgroundThrottling: false,   //设置应用在后台正常运行
      nodeIntegration:true,     //设置能在页面使用nodejs的API
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: iconPath, // 边框上的图标
    // transparent: true, // 透明
    frame: false // 无边框
  })
  // win.removeMenu()  // 无边框

  win.loadFile('index.html');
  // Tray - 系统托盘
  tray = new Tray('./icon.ico');
  tray.setToolTip('Atodo');
  tray.on('click', () => {   //点击图标的响应事件，这里是切换主窗口的显示和隐藏
    if(win.isVisible()){
      win.hide()
    }else{
      win.show()
    }
  })

  tray.on('right-click', () => {
    //右键点击图标时，出现的菜单，通过Menu.buildFromTemplate定制，这里只包含退出程序的选项。
    const menuConfig = Menu.buildFromTemplate([
      {
        label: 'Quit',
        click: () => app.quit()
      }
    ])
    tray.popUpContextMenu(menuConfig)
  })
  // 通讯 - 关闭按钮
  ipcm.on('win-hide',function(){
    win.hide();
  })
}



app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
