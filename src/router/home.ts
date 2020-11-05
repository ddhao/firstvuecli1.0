import _import from './_import'

export default [
  {
    path: '/',
    name: 'home',
    component: _import('Home')
  },
  {
    path: '/about',
    name: 'about',
    component: _import('About')
  }
]
