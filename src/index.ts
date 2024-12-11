import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';
import {environment} from './environment';
import {createRole} from './iam';

console.log(`Environment: ${constants.ENV}`);

async function main() {
  const opts: pulumi.ResourceOptions = {provider: environment};
  /* eslint no-unused-vars: "off" */
  const config = new pulumi.Config();
  const callerIdentity = await aws.getCallerIdentity({}, opts);
  const accountId = callerIdentity.accountId;

  createRole({name: 'aRole'});
}

main();
