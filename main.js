    var remote = require('remote');
var Menu = remote.require('menu');

var menu = Menu.buildFromTemplate([
    {
            label : 'Electron',
            submenu : [
                {
                    label : 'Add site ',
                    click: function(){
                          
                    }
                }
            ]

    }
]);
Menu.setApplicationMenu(menu); 