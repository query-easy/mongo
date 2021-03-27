import {QueryStore} from './query-store.model';
import {IFilter} from '../types';
import * as filters from '../filters';

export class Filter implements IFilter {
  private filter: QueryStore;

  constructor(init: QueryStore = new QueryStore({})) {
    this.filter = init;
  }

  eq(path: string, value: any) {
    filters.eq(this.filter, path, value);
    return this;
  }

  neq(path: string, value: any) {
    filters.neq(this.filter, path, value);
    return this;
  }

  gt(path: string, value: any) {
    filters.gt(this.filter, path, value);
    return this;
  }

  gte(path: string, value: any) {
    filters.gte(this.filter, path, value);
    return this;
  }

  lt(path: string, value: any) {
    filters.lt(this.filter, path, value);
    return this;
  }

  lte(path: string, value: any) {
    filters.lte(this.filter, path, value);
    return this;
  }

  in(path: string, value: any[]) {
    filters.inQ(this.filter, path, value);
    return this;
  }

  nin(path: string, value: any[]) {
    filters.nin(this.filter, path, value);
    return this;
  }

  all(path: string, value: any[]) {
    filters.all(this.filter, path, value);
    return this;
  }

  size(path: string, value: number) {
    filters.size(this.filter, path, value);
    return this;
  }

  exists(path: string, value?: boolean) {
    filters.exists(this.filter, path, value);
    return this;
  }

  type(path: string, value: any) {
    filters.type(this.filter, path, value);
    return this;
  }

  regex(path: string, value: RegExp) {
    filters.regex(this.filter, path, value);
    return this;
  }

  and(value: ((filter: IFilter) => void) | any[]) {
    filters.and(this.filter, value);
    return this;
  }

  or(value: ((filter: IFilter) => void) | any[]) {
    filters.or(this.filter, value);
    return this;
  }

  nor(value: ((filter: IFilter) => void) | any[]) {
    filters.nor(this.filter, value);
    return this;
  }

  not(path: string, value: any) {
    filters.not(this.filter, path, value);
    return this;
  }

  raw(...params: any[]) {
    filters.raw(this.filter, ...params);
    return this;
  }

  rawJson(obj: any) {
    filters.rawJson(this.filter, obj);
    return this;
  }

  toQuery() {
    return this.filter.toQuery();
  }

  clear() {
    this.filter.clear();
    return this;
  }
}
