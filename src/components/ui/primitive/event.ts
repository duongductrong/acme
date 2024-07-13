const composeEventHandlers = <TEvent extends any>(
  originEventHandler?: (e: TEvent) => void,
  ourEventHandler?: (e: TEvent) => void,
) => {
  return (event: TEvent) => {
    originEventHandler?.(event)

    return ourEventHandler?.(event)
  }
}

export { composeEventHandlers }
