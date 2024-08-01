// src/utils/indexedDBUtils.ts

export const openDB = async (dbName: string, version: number) => {
    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open(dbName, version);
  
      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('movies')) {
          db.createObjectStore('movies', { keyPath: 'id' });
        }
      };
  
      request.onsuccess = (event: Event) => {
        resolve((event.target as IDBOpenDBRequest).result);
      };
  
      request.onerror = (event: Event) => {
        reject((event.target as IDBOpenDBRequest).error);
      };
    });
  };
  
  export const saveToDB = async (dbName: string, data: any[]) => {
    const db = await openDB(dbName, 1);
    const transaction = db.transaction('movies', 'readwrite');
    const store = transaction.objectStore('movies');
  
    data.forEach(item => {
      store.put(item);
    });
  
    return new Promise<void>((resolve, reject) => {
      transaction.oncomplete = () => {
        resolve();
      };
      transaction.onerror = () => {
        reject(transaction.error);
      };
    });
  };
  