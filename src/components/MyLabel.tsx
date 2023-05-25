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
}

/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({
  label = 'No Label',
  size = 'normal'
}: MyLabelProps) => {
  return (
    <span className={`${ size }`}>
      { label }
    </span>
  )
}
