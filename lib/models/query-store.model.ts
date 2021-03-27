import {IQueryStore, QueryStoreData} from '../types';

export class QueryStore implements IQueryStore {
  private query: QueryStoreData;

  constructor(init: QueryStoreData = {}) {
    this.query = init;
  }

  add(key: string, value: any) {
    if (Array.isArray(this.query)) {
      this.query.push({[key]: value});
    } else {
      if (this.query[key]) {
        Object.assign(this.query[key], value);
      } else {
        this.query[key] = value;
      }
    }
  }

  toQuery() {
    return this.query;
  }

  clear() {
    if (Array.isArray(this.query)) {
      this.query.splice(0, this.query.length);
    } else {
      this.query = {};
    }
  }
}
