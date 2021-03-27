import {Filter} from '../../models';
import {expect} from 'chai';

describe('filter unit tests', () => {
  it('builds filter object', () => {
    expect(new Filter()).to.not.be.null;
  });
});
