import LJDiscover from '@/pages/discover'
import LJFriend from '@/pages/friend'
import LJMine from '@/pages/mine'

const routes = [
    {
        path: '/',
        component: LJDiscover,
        exact: true,
    },
    {
        path: '/mine',
        component: LJMine
    },
    {
        path: '/friend',
        component: LJFriend
    }
]

export default routes