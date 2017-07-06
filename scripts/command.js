
function commandPanelRegister(container){
    container.getElement().html( '<div id=\"term_demo\"></div>');

    jQuery(function($, undefined) {
    term = $('#term_demo').terminal(function(command, term) {
        if (command !== '') {
            try {
                var result = window.eval(command);
                if (result !== undefined) {
                    term.echo(new String(result));
                }
            } catch(e) {
                term.error(new String(e));
            }
        } else {
           term.echo('');
        }
    }, {
            greetings: 'Mercury Interpreter',
            name: 'js_demo',
            height: 200,
            enabled: false,
            prompt: 'merc> '
        });
    });
}