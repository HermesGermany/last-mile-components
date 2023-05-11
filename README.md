# Last Mile Components

This is a library of reusable React components for building web apps for the last-mile.

## Installation

To install the library in your app, simply run:

```bash
npm install @hermesgermany/last-mile-components
```

## Usage

To use a component in your app, import it from the library:

```tsx
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

You can see the latest version of our documentation here: [LMC Docs](https://lmc-storybook.hermesgermany.digital/)

To view the components locally, you can launch Storybook by following these steps:

```bash
npm install
npm run dev
```

## License

This library is licensed under the MIT licence. See 'LICENSE' for more information.
