import {Query} from './models';

function query(collection: string) {
  return new Query(collection);
}

export = query;
