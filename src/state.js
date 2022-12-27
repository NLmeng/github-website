// DOM Containers
const domContainer_content = document.querySelector('#main-par2');
const domContainer_header  = document.querySelector('#h2');
// HTMLs
const main_content_html = domContainer_content.innerHTML;
const cpsc110_html      = document.querySelector('#par2-cpsc110').innerHTML;
const cpsc121_html      = document.querySelector('#par2-cpsc121').innerHTML;
const cpsc210_html      = document.querySelector('#par2-cpsc210').innerHTML;
const cpsc213_html      = document.querySelector('#par2-cpsc213').innerHTML;
const cpsc310_html      = document.querySelector('#par2-cpsc310').innerHTML;
const cpsc320_html      = document.querySelector('#par2-cpsc320').innerHTML;
const cpsc330_html      = document.querySelector('#par2-cpsc330').innerHTML;


class State { // @abstract
    // context;  // @Context
    display() {};
}

class baseState extends State {
    display() {
        domContainer_content.innerHTML = main_content_html;
        domContainer_header.innerHTML  = 'Courses';
    }
}

class state110 extends State {
    display() {
        domContainer_content.innerHTML = cpsc110_html;
        domContainer_header.innerHTML  = 'Computation, Programs, and Programming';
    }
}

class state121 extends State {
    display() {
        domContainer_content.innerHTML = cpsc121_html;
        domContainer_header.innerHTML  = 'Models of Computation';
    }
}

class state210 extends State {
    display() {
        domContainer_content.innerHTML = cpsc210_html;
        domContainer_header.innerHTML  = 'Software Construction';
    }
}

class state213 extends State {
    display() {
        domContainer_content.innerHTML = cpsc213_html;
        domContainer_header.innerHTML  = 'Introduction to Computer Systems';
    }
}

class state310 extends State {
    display() {
        domContainer_content.innerHTML = cpsc310_html;
        domContainer_header.innerHTML  = '';
    }
}

class state320 extends State {
    display() {
        domContainer_content.innerHTML = cpsc320_html;
        domContainer_header.innerHTML  = '';
    }
}

class state330 extends State {
    display() {
        domContainer_content.innerHTML = cpsc330_html;
        domContainer_header.innerHTML  = 'Applied Machine Learning';
    }
}

export default class Context {
    curr; // @State

    Context(base) {
        this.setState(base);
    }
    
    setState(next) { // @event.target.value / String
        switch(next) {
            case 'MAIN':
                this.curr = new baseState();
                break;
            case '110':
                this.curr = new state110();
                break;
            case '121':
                this.curr = new state121();
                break;
            case '210':
                this.curr = new state210();
                break;
            case '213':
                this.curr = new state213();
                break;
            case '310':
                this.curr = new state310();
                break;
            case '320':
                this.curr = new state320();
                break;
            case '330':
                this.curr = new state330();
                break;
            default:
                throw new Error();
        }
    }
   
    display() {
        this.curr.display();
    }
}