import {HomeButton} from './home_buttons.js';
import {ProjectButton} from './proj_button.js';
import {CreateDiv}  from './create_div.js';
import {Dropdowns}  from './dropdowns.js';

//
const home_button = React.createElement;
const domContainer_home_button = document.querySelector('#home_button');
const root = ReactDOM.createRoot(domContainer_home_button);
root.render(home_button(HomeButton));
//
const proj_button = React.createElement;
const domContainer_proj_button = document.querySelector('#project_button');
ReactDOM.createRoot(domContainer_proj_button).render(proj_button(ProjectButton));
//
const cd = React.createElement;
const domContainer_cd = document.querySelector('#create-div');
ReactDOM.createRoot(domContainer_cd).render(cd(CreateDiv));
//
const dd = React.createElement; 
const domContainer_dd = document.querySelector('#dropdown1');
ReactDOM.createRoot(domContainer_dd).render(dd(Dropdowns));
//
