import './grapesjs/css/grapes.min.css'
import './index.css'
import panels from './Panels'
import grapesjs from './grapesjs/grapes'

const editor = grapesjs.init({
    container: '.eds-frame-canvas',
    fromElement: false,
    height: '100%',
    width: 'auto',
    storageManager: false,
    panels: {defaults: []},

    layerManager: {
        appendTo: '#eds-layerManager'
    },

    styleManager: {
        appendTo: '#eds-styleManager',
        sectors: [{
            name: 'General',
            open: false,
            buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
        },{
            name: 'Dimension',
            open: false,
            buildProps: [ 'width', 'height', 'max-width', 'min-height', 'margin', 'padding']
        },{
            name: 'Typography',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow']
        },{
            name: 'Decorations',
            open: false,
            buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
        },{
            name: 'Extra',
            open: false,
            buildProps: ['opacity', 'transition', 'perspective', 'transform'],
            properties: [{
                type: 'slider',
                property: 'opacity',
                defaults: 1,
                step: 0.01,
                max: 1,
                min:0,
            }]
        }]
    }
})
document.querySelector('.gjs-editor-cont').style.height = ''

panels(editor)