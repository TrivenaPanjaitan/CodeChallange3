const setFavicon = (path: string) => {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = `${process.env.PUBLIC_URL || ''}/${path}`;
  document.head.appendChild(link);
};

export default setFavicon;
