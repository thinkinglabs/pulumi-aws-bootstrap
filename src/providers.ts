import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';
import tags from './tags';

const config = new pulumi.Config();

export const environment = new aws.Provider('environment', {
  region: aws.config.requireRegion(),
  assumeRole: {
    roleArn: config.require('role_arn'),
    sessionName: 'pulumi',
  },
  defaultTags: {
    tags: tags(),
  },
});
