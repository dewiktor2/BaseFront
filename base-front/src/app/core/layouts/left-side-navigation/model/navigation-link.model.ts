export class NavigationLink {

    constructor(public link?: string, public icon?:string, public text?:string ) {
    }

    public static leftSideNavigationLinks(): NavigationLink[] {
        return [
            {
                link: '/candidate-panel',
                icon: 'fa fa-user',
                text: 'nav.candidate'
            },
            {
                link: '/configuration-panel',
                icon: 'fa fa-cog',
                text: 'nav.configuration'
            },
            {
                link: '/recruiter',
                icon: 'fa fa-book',
                text: 'nav.recruiter'
            },
            {
                link: '/offers',
                icon: 'fa fa-briefcase',
                text: 'nav.offers'
            }
        ]
    }
}