import { useCallback, useSyncExternalStore } from "react"

export const createScope = <TState>(initialState: TState) => {
  let _state: TState = initialState

  const _listeners = new Set<any>([])

  const getState = () => _state

  const setState = () => {
    _listeners.forEach((listener) => listener?.())
  }

  const subscribe = (listener: any) => {
    _listeners.add(listener)
    return () => {
      _listeners.delete(listener)
    }
  }

  return {
    getState,
    setState,
    subscribe,
  }
}

export const useScope = <TState, TResult>(
  store: ReturnType<typeof createScope<TState>>,
  selector: (state: TState) => TResult,
) => {
  const _selector = useCallback(() => selector(store.getState()), [])
  return useSyncExternalStore(store.subscribe, _selector, _selector)
}
