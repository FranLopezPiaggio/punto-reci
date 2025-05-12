// Utilidad para manejar rutas de assets considerando el entorno
export const getAssetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/punto-reci' : '';
  return `${basePath}${path}`;
};