# Last Mile Components

This is a library of reusable React components for building web apps for the last-mile.

## Installation

To install the library in your app, simply run:

```bash
npm install last-mile-components
```

## Usage

To use a component in your app, import it from the library:

```typescript
import { BurgerMenu, Popover } from "last-mile-components"

function MyComponent() {
  return (
    <BurgerMenu>
      <Popover.MenuGroup groupLabel="Settings">
        <Popover.MenuItem
          label="User Settings"
          action={() => console.log("dev settings")}
        />
        <Popover.MenuItem
          label="Dev Settings"
          action={() => console.log("user settings")}
        />
      </Popover.MenuGroup>
    </BurgerMenu>
  )
}
```

## Storybook documentation

To view the components, you can launch Storybook:

```bash
npm install
npm run dev
```

## License

This library is licensed under the XYZ licence. See 'LICENSE' for more information.
