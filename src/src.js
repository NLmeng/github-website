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
// horizontal scroll
const mainScroll  = document.getElementById('main-scroll');
const forward     = document.getElementById('forward-slide');
const backward    = document.getElementById('backward-slide');
forward.onclick = function () {
    mainScroll.scrollLeft += 42;
};
backward.onclick = function () {
    mainScroll.scrollLeft -= 42;
};
// image modal
const modals = document.getElementsByClassName('modal');
const modals_captions = document.getElementsByClassName('modal-caption');
const modals_imgs = document.getElementsByClassName('modal-content');
const imgs = document.getElementsByClassName('h-img');
for (var i=0; i < imgs.length; i++) {
    const curr_modal = modals[i];
    const curr_modal_img = modals_imgs[i];
    const curr_modal_caption = modals_captions[i];
    const curr_caption = document.getElementById("caption"+(i+1));
    imgs[i].onclick = function() {
        curr_modal.style.display = "block";
        curr_modal_img.src = this.src;
        curr_modal_caption.innerHTML = curr_caption.innerHTML;
    }
}
const close_icons = document.getElementsByClassName("close");
for (var i=0; i < close_icons.length; i++) {
    const curr_modal = modals[i];
    close_icons[i].onclick = function() {
        curr_modal.style.display = "none";
     }
}