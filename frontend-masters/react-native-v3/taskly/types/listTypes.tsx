export type TShoppingListProps = {
  item: TShoppingListItem
  onToggleTaskStatus: (id: string) => void
  onDelete: (id: string) => void
}

export type TShoppingListItem = {
  id: string
  name: string
  completedAtTimestamp: number | undefined
  lastUpdatedTimestamp: number
}

export enum EStorage {
  shoppingListItems = 'shoppingListItems',
}
