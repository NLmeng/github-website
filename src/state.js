// DOM Containers
const domContainer_content = document.querySelector('#main-par2');
const domContainer_header = document.querySelector('#h2');
// HTMLs
const main_content_html = domContainer_content.innerHTML;
const cpsc110_html = document.querySelector('#par2-cpsc110').innerHTML;
const cpsc121_html = document.querySelector('#par2-cpsc121').innerHTML;
const cpsc210_html = document.querySelector('#par2-cpsc210').innerHTML;
const cpsc213_html = document.querySelector('#par2-cpsc213').innerHTML;
const cpsc310_html = document.querySelector('#par2-cpsc310').innerHTML;
const cpsc320_html = document.querySelector('#par2-cpsc320').innerHTML;
const cpsc330_html = document.querySelector('#par2-cpsc330').innerHTML;


export default class Context {
    curr; // @event.target.value / String

    Context(base) {
        this.setState(base);
    }
    
    setState(next) { // @event.target.value / String
        this.curr = next;
    }
   
    display() {
        switch(this.curr) {
            case 'MAIN':
                domContainer_content.innerHTML = main_content_html;
                domContainer_header.innerHTML  = 'Courses';
                break;
            case '110':
                domContainer_content.innerHTML = cpsc110_html;
                domContainer_header.innerHTML  = 'Computation, Programs, and Programming';
                break;
            case '121':
                domContainer_content.innerHTML = cpsc121_html;
                domContainer_header.innerHTML  = 'Models of Computation';
                break;
            case '210':
                domContainer_content.innerHTML = cpsc210_html;
                domContainer_header.innerHTML  = 'Software Construction';
                break;
            case '213':
                domContainer_content.innerHTML = cpsc213_html;
                domContainer_header.innerHTML  = 'Introduction to Computer Systems';
                break;
            case '310':
                domContainer_content.innerHTML = cpsc310_html;
                domContainer_header.innerHTML  = '';
                break;
            case '320':
                domContainer_content.innerHTML = cpsc320_html;
                domContainer_header.innerHTML  = '';
                break;
            case '330':
                domContainer_content.innerHTML = cpsc330_html;
                domContainer_header.innerHTML  = 'Applied Machine Learning';
                break;
            default:
                throw new Error();
        }
    }
}

