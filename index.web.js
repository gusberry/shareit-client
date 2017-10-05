import React from 'react';
import ReactNative from 'react-native';

import App from './src/components/App'

// use .hydrate if hydrating a SSR app
ReactNative.render(<App />, document.getElementById('root'))