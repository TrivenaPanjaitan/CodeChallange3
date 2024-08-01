// src/setFavicon.ts
const setFavicon = (path: string) => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = path;
    document.head.appendChild(link);
  };
  
  export default setFavicon;
  