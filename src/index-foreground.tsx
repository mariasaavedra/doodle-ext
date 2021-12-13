import React from 'react';
import { render } from 'react-dom';

import Foreground from './components/Foreground';

console.log("foreground");
render(<Foreground />, document.querySelector('#foreground'));