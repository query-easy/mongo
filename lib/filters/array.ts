import {QueryStore} from '../models';

export function all(querySt: QueryStore, path: string, value: any) {
  querySt.add(path, {$all: value});
}

export function size(querySt: QueryStore, path: string, value: any) {
  querySt.add(path, {$size: value});
}
