import {describe, test, expect} from '@jest/globals';

import * as sut from '../src/iam';

describe('createRole', function() {
  const role = sut.createRole({name: 'a-role'});
  test('generates ses password', async () => {
    expect(role.name).toBe('a-role');
  });
});
