export class Router {
    routes = {}

    add(routename, page) {
        this.routes[routename] = page
    }

    route(e) {
        e = e || window.event
        e.preventDefault()

        window.history.pushState({}, "", e.target.href)
        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname]
        this.clickToggle(pathname)
        fetch(route)
            .then(data => data.text())
            .then(html => {
                document.querySelector('#app').innerHTML = html
            })
    }

    clickToggle(page) {
        const home = document.querySelector('#home')
        const universo = document.querySelector('#universo')
        const exploracao = document.querySelector('#exploracao')

        home.classList.remove('select')
        universo.classList.remove('select')
        exploracao.classList.remove('select')

        if ("/" === page) {
            home.classList.add('select')
        }
        if ("/universo" === page) {
            universo.classList.add('select')
        }
        if ("/exploracao" === page) {
            exploracao.classList.add('select')
        }
    }
}