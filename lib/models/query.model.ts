import {Filter, Option, QueryStore} from '.';
import {IFilter, IQuery, SortOrder} from '../types';
import * as queries from '../queries';

export class Query implements IQuery {
  private filter: Filter;
  private option: Option;
  private collection: string;

  constructor(collection: string) {
    this.collection = collection;
    this.filter = new Filter(new QueryStore());
    this.option = new Option(new QueryStore());
  }

  eq(path: string, value: any) {
    this.filter.eq(path, value);
    return this;
  }

  neq(path: string, value: any) {
    this.filter.neq(path, value);
    return this;
  }

  gt(path: string, value: any) {
    this.filter.gt(path, value);
    return this;
  }

  gte(path: string, value: any) {
    this.filter.gte(path, value);
    return this;
  }

  lt(path: string, value: any) {
    this.filter.lt(path, value);
    return this;
  }

  lte(path: string, value: any) {
    this.filter.lte(path, value);
    return this;
  }

  in(path: string, value: any[]) {
    this.filter.in(path, value);
    return this;
  }

  nin(path: string, value: any[]) {
    this.filter.nin(path, value);
    return this;
  }

  all(path: string, value: any[]) {
    this.filter.all(path, value);
    return this;
  }

  size(path: string, value: number) {
    this.filter.size(path, value);
    return this;
  }

  exists(path: string, value?: boolean) {
    this.filter.exists(path, value);
    return this;
  }

  type(path: string, value: any) {
    this.filter.type(path, value);
    return this;
  }

  regex(path: string, value: RegExp) {
    this.filter.regex(path, value);
    return this;
  }

  and(value: ((filter: IFilter) => void) | any[]) {
    this.filter.and(value);
    return this;
  }

  or(value: ((filter: IFilter) => void) | any[]) {
    this.filter.or(value);
    return this;
  }

  nor(value: ((filter: IFilter) => void) | any[]) {
    this.filter.nor(value);
    return this;
  }

  not(path: string, value: any) {
    this.filter.not(path, value);
    return this;
  }

  limit(value: number) {
    this.option.limit(value);
    return this;
  }

  offset(value: number) {
    this.option.offset(value);
    return this;
  }

  select(value: string[], toSelect?: boolean) {
    this.option.select(value, toSelect);
    return this;
  }

  sort(value: string[], order: SortOrder) {
    this.option.sort(value, order);
    return this;
  }

  raw(...params: any[]) {
    queries.raw(this.filter, this.option, ...params);
    return this;
  }

  rawJson(obj: any) {
    queries.rawJson(this.filter, this.option, obj);
    return this;
  }

  toQuery() {
    return {
      filter: this.filter.toQuery(),
      options: this.option.toQuery(),
    };
  }

  clear() {
    this.filter.clear();
    this.option.clear();
    return this;
  }
}
