import { wedget } from "../../Types/wedget";

export const wedgetData: wedget[] = [
    {
        line1: {
            p1: 'users',
            p2: {
                icon: 'up',
                span: '+5 %'
            }
        },
        line2: '720',
        line3: {
            p1: 'see all users',
            p2: {
                class: 'wedjet-users',
                icon: 'person'
            }
        }
    },
    {
        line1: {
            p1: 'orders',
            p2: {
                icon: 'down',
                span: '+2 %'
            }
        },
        line2: '260',
        line3: {
            p1: 'view all orders',
            p2: {
                class: 'wedjet-orders',
                icon: 'cart'
            }
        }
    },
    {
        line1: {
            p1: 'earnings',
            p2: {
                icon: 'up',
                span: '+12 %'
            }
        },
        line2: '$4.6K',
        line3: {
            p1: 'view all earnings',
            p2: {
                class: 'wedjet-earnings',
                icon: 'dollar'
            }
        }
    },
    {
        line1: {
            p1: 'my balance',
            p2: {
                icon: 'up',
                span: '+5 %'
            }
        },
        line2: '$7.8K',
        line3: {
            p1: 'see details',
            p2: {
                class: 'wedjet-details',
                icon: 'details'
            }
        }
    }
]