export class NavigationLink {

    constructor(public link?: string, public icon?:string, public text?:string ) {
    }

    public static leftSideNavigationLinks(): NavigationLink[] {
        return [
            {
                link: '/dashboard',
                icon: 'fa fa-briefcase',
                text: 'nav.dashboard'
            }
        ]
    }
}