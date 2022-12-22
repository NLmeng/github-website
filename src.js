import {HomeButton} from './home_buttons.js';
import {CreateDiv} from './create_div.js';

//
const home_button = React.createElement;
const domContainer_home_button = document.querySelector('#home_button');
const root = ReactDOM.createRoot(domContainer_home_button);
root.render(home_button(HomeButton));
//
const cd = React.createElement;
const domContainer_cd = document.querySelector('#create-div');
ReactDOM.createRoot(domContainer_cd).render(cd(CreateDiv));