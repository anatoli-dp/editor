import dom from '../dom'

dom.find('editor-base').append(dom.build([
    'div.eds-taskbar',
    'div.eds-body',
    [
        'div.eds-body-left',
        'div.eds-body-right'
    ]
]))