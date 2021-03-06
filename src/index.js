import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import App from 'App'

class AppRouter extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path='/' component={App} />
				</div>
			</Router>
		)
	}
}
export default AppRouter

render(
	<AppRouter />,
	document.getElementById('root')
)

if (module.hot) {
	module.hot.accept('./index'.default, () => {
		const NextApp = require('./index').default
		render(
			<NextApp />,
			document.getElementById('root')
		)
	})
}

registerServiceWorker()
