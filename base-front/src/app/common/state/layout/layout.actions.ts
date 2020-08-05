export namespace LayoutActions {
    export class CollapseMenu {
        static readonly type = '[Layout] CollapseMenu'
        constructor(public collapsed: boolean) {}
    }
    export class ChangeTheme {
        static readonly type = '[Layout] ChangeTheme'
    }
}