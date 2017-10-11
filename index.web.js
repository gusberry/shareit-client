import React from 'react';
import ReactNative from 'react-native';
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

import App from './src/components/App';

// use .hydrate if hydrating a SSR app
ReactNative.render(<App />, document.getElementById('root'));

const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);
