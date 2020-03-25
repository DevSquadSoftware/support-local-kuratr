import { App } from './app';
import Aurelia from 'aurelia';
import { WavesEffect } from './components/attributes/waves';
import 'scss/mdb.scss';

const aurelia = Aurelia.register(WavesEffect).app(App);
aurelia.start();