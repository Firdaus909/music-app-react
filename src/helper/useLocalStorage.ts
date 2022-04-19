export interface IStorageItem {
  key: string;
  value: any;
}

export class LocalStorageWorker {
  localStorageSupported: boolean;

  constructor() {
    this.localStorageSupported =
      typeof window.localStorage !== 'undefined' &&
      window.localStorage !== null;
  }

  add(key: string, item: string) {
    if (this.localStorageSupported) {
      localStorage.setItem(key, item);
    }
  }

  get(key: string): string | null {
    if (this.localStorageSupported) {
      const item = localStorage.getItem(key);
      return item;
    }
    return null;
  }

  remove(key: string) {
    if (this.localStorageSupported) {
      localStorage.removeItem(key);
    }
  }

  clear() {
    if (this.localStorageSupported) {
      localStorage.clear();
    }
  }
}
