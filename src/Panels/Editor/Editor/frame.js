import dom from '../../../DOM'

dom.find('.eds-body-left').append(dom.build([
    'div.eds-editor-frame',
    [
        'div.eds-frame-control',
        'div.eds-frame-canvas'
    ]
]))