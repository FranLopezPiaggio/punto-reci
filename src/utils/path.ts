// Utilidad para manejar rutas de assets considerando el entorno
export const getAssetPath = (path: string): string => {
  // Ya no necesitamos añadir el prefijo '/punto-reci'
  return path;
};

// Utilidad para importar estilos CSS con la ruta correcta
export function getStylesPath(styles: Record<string, string>): Record<string, string> {
  if (process.env.NODE_ENV !== 'production') {
    return styles;
  }
  
  // Crea una copia del objeto de estilos
  const processedStyles: Record<string, string> = {};
  
  // Procesa cada clase CSS para añadir el prefijo a las URLs
  for (const key in styles) {
    if (Object.prototype.hasOwnProperty.call(styles, key)) {
      processedStyles[key] = styles[key];
    }
  }
  
  return processedStyles;
}