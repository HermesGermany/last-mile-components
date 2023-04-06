import { HTMLAttributes, useCallback, useState } from "react"

import { Popup } from "../Popup"

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
  className,
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
    <div className={`relative flex w-14 items-center justify-center`} onBlur={handleBlur}>
      <button
        className={`m-1 flex w-14 flex-col items-center justify-center rounded p-2 text-[10px] font-bold text-white hover:bg-white hover:bg-opacity-10 ${className}`}
        onClick={toggleOpenMenu}
        data-testid="linked-apps-btn"
        {...htmlProps}
      >
        {icon}
        <span>{buttonTitle}</span>
      </button>
      {isMenuOpen && <Popup title={popupTitle}>{children}</Popup>}
    </div>
  )
}

export default SidebarPopupEntry
