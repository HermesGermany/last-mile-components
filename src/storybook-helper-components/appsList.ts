import { LinkedApp } from "../lib/types"
import ghost from "./assets/ghost.svg"
import kiwi from "./assets/kiwi.svg"
import pizza from "./assets/pizza.svg"
import wholeApple from "./assets/wholeApple.svg"

export const appsList: LinkedApp[] = [
  {
    icon: wholeApple,
    label: "My Fruit Application",
    href: "https://google.de",
  },
  {
    icon: ghost,
    label: "Ghost App",
    href: "https://google.de",
  },
  {
    icon: pizza,
    label: "Delivery Helper",
    href: "https://google.de",
  },
  {
    icon: kiwi,
    label: "Kiwi Bird Paradise",
    href: "https://google.de",
  },
]
