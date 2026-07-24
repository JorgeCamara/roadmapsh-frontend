import chevronDown from '@icons/chevron-down-svgrepo-com.svg'
import chevronUp from '@icons/chevron-up-svgrepo-com.svg'

export const ICONS = {
  chevronDown: 'chevronDown',
  chevronUp: 'chevronUp',
} as const;

const ICON_SOURCES: Record<IconName, string> = {
  [ICONS.chevronDown]: chevronDown,
  [ICONS.chevronUp]: chevronUp,
}

export function getIconSource(iconName: IconName): string {
  const iconSource = ICON_SOURCES[iconName]

  if (!iconSource) {
    throw new Error(`Icono no encontrado: "${iconName}"`)
  }

  return iconSource
}

export type IconName = keyof typeof ICONS;
export type ICON_DICT = (typeof ICONS)[keyof typeof ICONS];