import {QueryStore} from '../models';

export function exists(
  queryStore: QueryStore,
  path: string,
  value: any = true,
) {
  queryStore.add(path, {$exists: value});
}

export function type(queryStore: QueryStore, path: string, value: any) {
  queryStore.add(path, {$type: value});
}
