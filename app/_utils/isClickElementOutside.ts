export const isClickElementOutside = (
  targetElement: React.RefObject<HTMLElement | null>,
  clickedElement: EventTarget | null
): boolean => {
  return (
    !clickedElement || !targetElement.current?.contains(clickedElement as Node)
  )
}
