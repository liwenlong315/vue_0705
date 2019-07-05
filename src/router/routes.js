import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
export default [{
    path: '/msite',
    components: MSite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    components: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/order',
    components: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    components: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    components: Login,

  },
  {
    path: '/',
    redirect: '/msite'

  },
]
