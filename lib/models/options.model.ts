import {QueryStore} from './query-store.model';
import {IOption, SortOrder} from '../types';
import * as options from '../options';

export class Option implements IOption {
  private option: QueryStore;

  constructor(init: QueryStore = new QueryStore({})) {
    this.option = init;
  }

  limit(value: number) {
    options.limit(this.option, value);
    return this;
  }

  offset(value: number) {
    options.offset(this.option, value);
    return this;
  }

  select(value: string[], toSelect?: boolean) {
    options.select(this.option, value, toSelect);
    return this;
  }

  sort(value: string[], order: SortOrder) {
    options.sort(this.option, value, order);
    return this;
  }

  raw(...params: any[]) {
    options.raw(this.option, ...params);
    return this;
  }

  rawJson(obj: any) {
    options.rawJson(this.option, obj);
    return this;
  }

  toQuery() {
    return this.option.toQuery();
  }

  clear() {
    this.option.clear();
    return this;
  }
}
