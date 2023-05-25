import './mylabel.css';

interface MyLabelProps {
  /**
   * Mensaje de la etiqueta
   */
  label: string
  /**
   * Tamaño de la etiqueta
   */
  size: 'normal' | 'h1' | 'h2' | 'h3'
  /**
   * Color de la etiqueta
   */
  color: 'primary' | 'secondary' | 'tertiary'
  /**
   * Capitalizacion de la etiqueta
   */
  allCaps: boolean
}

/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({
  label = 'No Label',
  size = 'normal',
  color = 'primary',
  allCaps = true
}: MyLabelProps) => {
  return (
    <span
      className={
        `${ size } ${ color ? `text-${color}` : 'text-primary' }`
      }
    >
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
