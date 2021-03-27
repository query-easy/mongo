import {QueryStore} from '../models';
import {KeyValue} from '../types';

export function limit(querySt: QueryStore, value: any) {
  querySt.add('limit', value);
}

export function offset(querySt: QueryStore, value: any) {
  querySt.add('skip', value);
}

export function select(
  querySt: QueryStore,
  value: any[],
  toSelect: any = true,
) {
  const projection: KeyValue = {};
  toSelect = toSelect ? 1 : 0;
  for (const val of value) {
    if (typeof val === 'string') {
      projection[val] = toSelect;
    }
  }
  querySt.add('projection', projection);
}

export function sort(querySt: QueryStore, value: any[], order: any) {
  const sortKV: KeyValue = {};
  const toSort = order === 'asc' || order === 'desc' ? order : 'asc';
  order = toSort === 'asc' ? 1 : -1;
  for (const val of value) {
    if (typeof val === 'string') {
      sortKV[val] = order;
    }
  }
  querySt.add('sort', sortKV);
}
