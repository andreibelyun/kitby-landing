const { useEffect } = require('react')

export function useKeyboardEvent(key, callback, deps) {
  useEffect(() => {
    const handler = function (event) {
      if (event.key === key) {
        callback()
      }
    }
    window.addEventListener('keydown', handler)

    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, [deps])
}
