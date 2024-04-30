import $ from 'jquery';
import 'jquery.terminal';
import figlet from 'figlet';
import font from 'figlet/importable-fonts/Elite';
import { rainbow, rand } from './utils/helpers';
import commands from './commands';
import './scss/styles.scss';

const term = $('body').terminal(commands, {
    greetings: false,
});

term.pause();

function ready(figletText) {
    const seed = rand(256);
    term.echo(() => rainbow(figletText, seed)).echo('[[;#fff;]Welcome to Sigizmunde Terminal Portfolio]').resume();
}

figlet.parseFont('myFont', font);
figlet.text('Sigizmunde', { font: 'myFont' }, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        ready(data);
    }
});
