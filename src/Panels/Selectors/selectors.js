import dom from '../../DOM'
import layers from './Tabs/layers'
import styles from './Tabs/styles'

function empty () {
    //
}

let tabs = {
    layers: {
        icon: 'fas fa-stream',
        run: layers,
    },
    styles: {
        icon: 'fas fa-paint-brush',
        run: styles,
    },
    tab3: {
        icon: 'fas fa-dice-d6',
        run: empty,
    },
    tab4: {
        icon: 'fas fa-dice-d6',
        run: empty,
    },
    tab5: {
        icon: 'fas fa-dice-d6',
        run: empty,
    },
}
let activeTab = ''

dom.find('.eds-body-right').append(dom.build([
    'div.eds-selectors-title',
    'div.eds-selectors-body',
    [
        'div#eds-layerManager.eds-selTab',
        'div#eds-styleManager.eds-selTab',
        'div#eds-selectors-body.eds-selTab'
    ],
    'div.eds-selectors-tabs'
]))

export default function (editor) {
    const cmd = editor.Commands

    Object.keys(tabs).forEach(function (tab) {
        let active = ''
        if (tab === activeTab) {
            active = '.active'
            dom.find('.eds-selectors-title').content(tab)
        }
    
        dom.find('div.eds-selectors-tabs').append(dom.build([
            'div#eds-selTab-' + tab + '.tab' + active,
            ['i.' + tabs[tab].icon.replace(' ', '.')]
        ]))
    
        dom.find('div#eds-selTab-' + tab + '.tab')[0].addEventListener('click', function (e) {
            let tab = e.target.id.replace('eds-selTab-', '')
            cmd.run('selectors:set', tab)
        })
    })

    cmd.add('selectors:set', function (e, s, tab) {
        if (tab != activeTab) {
            let container = dom.find('#eds-selectors-body')

            if (activeTab != '') dom.find('#eds-selTab-' + activeTab)[0].classList.toggle('active')
            dom.find('#eds-selTab-' + tab)[0].classList.toggle('active')

            dom.find('#eds-layerManager').hide()
            dom.find('#eds-styleManager').hide()

            container.show()
            container.content('')

            tabs[tab].run(dom, editor, container)
    
            dom.find('.eds-selectors-title').content(tab)
            activeTab = tab
        }
    })

    cmd.run('selectors:set', 'tab3')
}