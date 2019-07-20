import React from 'react'
import ReactDOM from 'react-dom'
import AppLayout from './AppLayout'
import registerServiceWorker from './registerServiceWorker'

import './index.scss'

ReactDOM.render(<AppLayout />, document.getElementById('root'));
registerServiceWorker();
