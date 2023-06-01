import './mylabel.css';

interface MyLabelProps {
  /**
   * Mensaje de la etiqueta
   */
  label: string;
  /**
   * Tamaño de la etiqueta
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Color de la etiqueta
   */
  color: 'primary' | 'secondary' | 'tertiary';
  /**
   * Capitalizacion de la etiqueta
   */
  allCaps: boolean;
  /**
   * Color personalizado
   */
  fontColor?: string;
  /**
   * Color personalizado
   */
  backgroundColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({
  label = 'No Label',
  size = 'normal',
  color = 'primary',
  allCaps = true,
  fontColor,
  backgroundColor = 'transparent'
}: MyLabelProps) => {
  return (
    <span
      className={
        `label ${ size } ${ color ? `text-${color}` : 'text-primary' }`
      }
      style={{ color: fontColor, backgroundColor }}
    >
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
