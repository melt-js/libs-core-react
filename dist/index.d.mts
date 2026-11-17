import type { ComponentType, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import type { HelComponentOptions } from '@melt-js/libs-core'
export * from '@melt-js/libs-core'

export type HelErrorProps = { error: unknown; retry: () => void }
export type DefineHelComponentOptions = HelComponentOptions & {
  loadingComponent?: ComponentType
  errorComponent?: ComponentType<HelErrorProps>
}
export function HelLoading(): import('react').ReactElement
export function HelError(props: HelErrorProps): import('react').ReactElement
export function defineHelComponent<P extends object = Record<string, unknown>>(options: DefineHelComponentOptions): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<unknown>>
