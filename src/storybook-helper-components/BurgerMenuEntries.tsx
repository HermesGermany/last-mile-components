import { Popover } from "../lib"

export function BurgerMenuEntries() {
  return (
    <>
      <Popover.MenuGroup groupLabel="Group 1">
        <Popover.MenuItem
          label="Menu item short 1"
          onClick={() => alert("Clicked")}
        />
        <Popover.MenuItem
          label="Menu item short 2"
          onClick={() => alert("Clicked")}
        />
        <Popover.MenuItem
          label="Menu item with long text"
          onClick={() => alert("Clicked")}
        />
        <Popover.MenuItem
          label="Menu item with very very long text"
          onClick={() => alert("Clicked")}
        />
      </Popover.MenuGroup>
      <Popover.MenuGroup groupLabel="Group 2">
        <Popover.MenuItem
          label="Menu item short 3"
          onClick={() => alert("Clicked")}
        />
      </Popover.MenuGroup>
      <Popover.MenuGroup groupLabel="Group 3">
        <Popover.MenuItem
          label="Menu item short 4"
          onClick={() => alert("Clicked")}
        />
      </Popover.MenuGroup>
    </>
  )
}
