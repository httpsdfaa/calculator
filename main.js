const { app, BrowserWindow } = require('electron')
// App controla o ciclo de vida da aplicação
// BrowserWindow cria e gerencia as janelas da aplicação

const createWindow = () => {
    const win = new BrowserWindow({ // cria a janela com width e height definido
        width: 352,
        height: 520
    })

    win.loadFile('index.html') // a página a ser carregada
}

app.whenReady().then(() => { //quando aplicação estiver pronta
    createWindow()
})