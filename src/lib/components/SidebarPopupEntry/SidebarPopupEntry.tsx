import { HTMLAttributes, useCallback, useState } from "react"

import { Popup } from "../Popup"
import { SidebarEntry } from "../SidebarEntry"

export type Props = HTMLAttributes<HTMLButtonElement> & {
  buttonTitle?: string
  buttonIcon?: React.ReactNode
  popupTitle?: string
  children?: React.ReactNode
  className?: string
}

function SidebarPopupEntry({
  buttonTitle,
  popupTitle,
  buttonIcon: icon,
  children,
  ...htmlProps
}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleOpenMenu() {
    setIsMenuOpen((openMenu) => !openMenu)
  }

  const handleBlur = useCallback((e: React.FocusEvent<HTMLDivElement>) => {
    const currentTarget = e.currentTarget

    // Give browser time to focus the next element
    requestAnimationFrame(() => {
      // Check if the new focused element is a child of the original container
      if (!currentTarget || !currentTarget.contains(document.activeElement)) {
        setIsMenuOpen(false)
      }
    })
  }, [])

  return (
    <div
      className={`relative flex w-full items-center justify-center`}
      onBlur={handleBlur}
    >
      <SidebarEntry
        onClick={toggleOpenMenu}
        icon={icon}
        label={buttonTitle}
        data-testid="linked-apps-btn"
        title={buttonTitle}
        {...htmlProps}
      >
        {isMenuOpen && <Popup title={popupTitle}>{children}</Popup>}
      </SidebarEntry>
    </div>
  )
}

export default SidebarPopupEntry
