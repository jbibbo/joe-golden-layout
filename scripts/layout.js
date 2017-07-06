var config = {
    settings:{
        hasHeaders: false,
        constrainDragToContainer: true,
        reorderEnabled: true,
        selectionEnabled: false,
        popoutWholeStack: false,
        blockedPopoutsThrowError: true,
        closePopoutsOnUnload: true,
        showPopoutIcon: false,
        showMaximiseIcon: false,
        showCloseIcon: false
    },
    dimensions: {
        borderWidth: 5,
        minItemHeight: 10,
        minItemWidth: 10,
        headerHeight: 20,
        dragProxyWidth: 300,
        dragProxyHeight: 200
    },
    labels: {
        close: 'close',
        maximise: 'maximise',
        minimise: 'minimise',
        popout: 'open in new window'
    },
    // content: [{
    //     type: 'row',
    //     content:[{
    //         type: 'component',
    //         componentName: 'testComponent',
    //         componentState: { label: 'Explorer' }
    //     },{
    //         type: 'column',
    //         content:[{
    //             type: 'component',
    //             componentName: 'testComponent',
    //             componentState: { label: 'game surface' }
    //         },{
    //             type: 'component',
    //             componentName: 'commandWindow',
    //             componentState: { label: 'command' }
    //         }]
    //     },{
    //         type: 'component',
    //         componentName: 'testComponent',
    //         componentState: { label: 'Inspector' }
    //     }]
    // }]
    content: [{
                type: 'row',
                content:[{
                    type: 'column',
                    content:[{
                        type: 'row',
                        content: [{
                                type: 'component',
                                componentName: 'testComponent',
                                componentState: { label: 'explorer' }
                            },
                            {
                                type: 'component',
                                componentName: 'gameWindow',
                                componentState: { label: 'game surface' }                               
                            }
                        ]
                        },
                        {
                            type: 'component',
                            componentName: 'commandWindow',
                            componentState: { label: 'command' }
                        }
                    ]
                },{
                    type: 'component',
                    componentName: 'testComponent',
                    componentState: { label: 'Inspector' }
                }]
            }]
};

var myLayout,
    savedState = localStorage.getItem( 'savedState' );

if( savedState !== null ) {
    myLayout = new GoldenLayout( config );
    //myLayout = new GoldenLayout( JSON.parse( savedState ) );
} else {
    myLayout = new GoldenLayout( config );
}

myLayout.registerComponent( 'testComponent', function( container, componentState ){
    container.getElement().html( '<h2>' + componentState.label + '</h2>' );
});

myLayout.registerComponent( 'commandWindow', function( container, componentState ){
    commandPanelRegister(container);
});

myLayout.registerComponent( 'gameWindow', function( container, componentState ){
    gamePanelRegister(container);
});

myLayout.on( 'stateChanged', function(){
    var state = JSON.stringify( myLayout.toConfig() );
    localStorage.setItem( 'savedState', state );
});


myLayout.init();