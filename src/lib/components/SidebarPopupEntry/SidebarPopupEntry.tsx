import { useCallback, useState } from "react"

import { Popup } from "../Popup"

export type Props = {
  buttonTitle?: string
  buttonIcon?: React.ReactNode
  popupTitle?: string
  children?: React.ReactNode
}

function SidebarPopupEntry({
  buttonTitle,
  popupTitle,
  buttonIcon: icon,
  children,
  ...rest
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
    <div className={`relative flex w-full items-center justify-center`} onBlur={handleBlur}>
      <button
        className={`m-1 flex h-12 w-14 flex-col items-center justify-center rounded p-2 text-[10px] font-bold text-white hover:bg-white hover:bg-opacity-10 `}
        onClick={toggleOpenMenu}
        data-testid="linked-apps-btn"
        {...rest}
      >
        {icon}
        <span>{buttonTitle}</span>
      </button>
      {isMenuOpen && <Popup title={popupTitle}>{children}</Popup>}
    </div>
  )
}

export default SidebarPopupEntry
