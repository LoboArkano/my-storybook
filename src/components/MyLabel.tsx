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
}

/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({
  label = 'No Label',
  size = 'normal',
  color = 'primary',
  allCaps = true,
  fontColor
}: MyLabelProps) => {
  return (
    <span
      className={
        `label ${ size } ${ color ? `text-${color}` : 'text-primary' }`
      }
      style={{ color: fontColor }}
    >
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
