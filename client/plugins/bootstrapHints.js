/**
 * ======================== NOTICE =============================
 * This file is meant exclusively as a way to help web-storm to recognize bootstrap-vue components
 */

import Vue from 'vue';


import bContainer from 'bootstrap-vue/es/components/layout/container';
import bRow from 'bootstrap-vue/es/components/layout/row';
import bCol from 'bootstrap-vue/es/components/layout/col';

Vue.component('bContainer', bContainer);
Vue.component('bRow', bRow);
Vue.component('bCol', bCol);


import bButton from 'bootstrap-vue/es/components/button/button';

Vue.component('bButton', bButton);


import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
import bFormSelect from 'bootstrap-vue/es/components/form-select/form-select';

Vue.component('bFormInput ', bFormInput);
Vue.component('bFormSelect ', bFormSelect);


import bNavbar from 'bootstrap-vue/es/components/navbar/navbar';
Vue.component('bNavbar', bNavbar);
