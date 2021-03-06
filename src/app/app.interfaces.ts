export interface NavCategory {
  title: string
  items: NavItem[]
}
export interface NavItem {
  name: string
  icon: string
  routerLink?: string
  href?: string
}
