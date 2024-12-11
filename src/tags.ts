import {Environments} from './environment';
import * as constants from './constants';

const tags = function(): {
  readonly Application: string,
  readonly Stack: string,
  readonly Environment: Environments,
  } {
  return {
    Application: constants.APP_NAME,
    Stack: constants.STACK_NAME,
    Environment: constants.ENV.toString(),
  };
};

export default tags;
