import { routerConfig } from './router'
import Index from '../Pages/index'
const routes = [
  ...routerConfig,
  {
    path: '/index',
    key: 'index',
    component: Index,
  },
]
export default routes
