
// create array of object with its type for mapping wedget-single
type wedget = {
    line1: {
        p1: string,
        p2: {
            icon: string,
            span: string
        }
    },
    line2: string,
    line3: {
        p1: string,
        p2: {
            class: string,
            icon: string,
        }
    }
}

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
]