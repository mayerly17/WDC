myApp.config(function($stateProvider, $urlRouterProvider) {
	// Redireccionar a pagina principal en caso de error en la url
	$urlRouterProvider.otherwise('/root/home')
	// Configuraciones del estado
	$stateProvider
		// estados para la aplicacion
		.state('root', {
			// 
			url: '/root',
			abstract: true,
			templateUrl: 'templates/navbar.html'
		})
		.state('root.home', {
			url: '/home',
			views: {
				// NO TOCAR
				'contenido': {
					controller: 'homeCtrl',
					templateUrl: 'templates/home.html',
				}
			}
		})
		.state('root.contactos', {
			url: '/contactos',
			views: {
				// NO TOCAR
				'contenido': {
					controller: 'contactosCtrl',
					templateUrl: 'templates/contactos.html',
				}
			}
		})
		.state('root.trabajo', {
			url: '/trabajo',
			views: {
				// NO TOCAR
				'contenido': {
					controller: 'trabajoCtrl',
					templateUrl: 'templates/trabajo.html',
				}
			}
		})
		.state('root.portafolio', {
			url: '/portafolio',
			views: {
				// NO TOCAR
				'contenido': {
					controller: 'portafolioCtrl',
					templateUrl: 'templates/portafolio.html',
				}
			}
		})
		.state('root.empresa', {
			url: '/empresa',
			views: {
				// NO TOCAR
				'contenido': {
					controller: 'empresaCtrl',
					templateUrl: 'templates/empresa.html',
				}
			}
		})
})
