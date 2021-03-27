// declare function kindof(value: any) :
//   | 'null'
//   | 'undefined'
//   | 'regexp'
//   | 'date'
//   | 'array'
//   | 'object'
//   | 'string'
//   | 'number'
//   | 'symbol'
//   | 'boolean';

// export = kindof;

declare module 'kindof' {
  function kindof(
    val: any,
  ):
    | 'null'
    | 'undefined'
    | 'regexp'
    | 'date'
    | 'array'
    | 'object'
    | 'string'
    | 'number'
    | 'symbol'
    | 'boolean';
  export = kindof;
}
