'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import Loading from '@/app/loading'

const MIN_VISIBLE_MS = 2000
const FALLBACK_HIDE_MS = 5000

const RouteChangeLoader = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const startedAtRef = useRef(0)
  const fallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const navigationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hasStartedRef = useRef(false)

  const clearTimers = useCallback(() => {
    if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current)
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    if (navigationTimerRef.current) clearTimeout(navigationTimerRef.current)
  }, [])

  const startLoading = useCallback(
    (href?: string) => {
      clearTimers()
      hasStartedRef.current = true
      startedAtRef.current = Date.now()
      setIsLoading(true)

      if (href) {
        navigationTimerRef.current = setTimeout(() => {
          router.push(href)
        }, MIN_VISIBLE_MS)
      }

      fallbackTimerRef.current = setTimeout(() => {
        setIsLoading(false)
        hasStartedRef.current = false
      }, FALLBACK_HIDE_MS)
    },
    [clearTimers, router],
  )

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return
      }

      const anchor = (event.target as Element | null)?.closest('a[href]')
      if (!anchor) return

      const link = anchor as HTMLAnchorElement
      if (link.target || link.hasAttribute('download')) return

      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin) return

      const currentPath = window.location.pathname + window.location.search
      const nextPath = url.pathname + url.search
      if (currentPath === nextPath && url.hash) return
      if (currentPath === nextPath) return

      event.preventDefault()
      startLoading(`${url.pathname}${url.search}${url.hash}`)
    }

    const handlePopState = () => {
      startLoading()
    }

    document.addEventListener('click', handleClick, true)
    window.addEventListener('popstate', handlePopState)

    return () => {
      document.removeEventListener('click', handleClick, true)
      window.removeEventListener('popstate', handlePopState)
      clearTimers()
    }
  }, [clearTimers, startLoading])

  useEffect(() => {
    if (!hasStartedRef.current) return

    const elapsed = Date.now() - startedAtRef.current
    const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 0)

    if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current)
    hideTimerRef.current = setTimeout(() => {
      setIsLoading(false)
      hasStartedRef.current = false
    }, remaining)
  }, [pathname])

  if (!isLoading) return null

  return (
    <div className='fixed inset-0 z-[9999]'>
      <Loading />
    </div>
  )
}

export default RouteChangeLoader
