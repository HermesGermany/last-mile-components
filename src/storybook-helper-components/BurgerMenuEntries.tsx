import { Popover } from "../lib"

export function BurgerMenuEntries() {
  return (
    <>
      <Popover.MenuGroup groupLabel="Group 1">
        <Popover.MenuItem
          label="Menu item short 1"
          action={() => alert("Clicked")}
        />
        <Popover.MenuItem
          label="Menu item short 2"
          action={() => alert("Clicked")}
        />
        <Popover.MenuItem
          label="Menu item with long text"
          action={() => alert("Clicked")}
        />
        <Popover.MenuItem
          label="Menu item with very very long text"
          action={() => alert("Clicked")}
        />
      </Popover.MenuGroup>
      <Popover.MenuGroup groupLabel="Group 2">
        <Popover.MenuItem
          label="Menu item short 3"
          action={() => alert("Clicked")}
        />
      </Popover.MenuGroup>
      <Popover.MenuGroup groupLabel="Group 3">
        <Popover.MenuItem
          label="Menu item short 4"
          action={() => alert("Clicked")}
        />
      </Popover.MenuGroup>
    </>
  )
}
