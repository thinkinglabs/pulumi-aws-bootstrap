import * as pulumi from '@pulumi/pulumi';
import {Environment, Environments} from './environment';

export const ENV = new Environment(pulumi.getStack() as Environments);
export const APP_NAME = 'an-app';
export const STACK_NAME = 'a-stack';
