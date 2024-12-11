import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';

pulumi.runtime.setMocks({
  newResource: function(args: pulumi.runtime.MockResourceArgs): {id: string, state: any} {
    const defaultState = {
      arn: mockArn(args.type, args.inputs.name, args.inputs),
      name: args.inputs.name,
      ...args.inputs,
    };

    switch (args.type) {
      default:
        break;
    }

    // Use id unless it's blank or missing.
    const resourceId = args.name?.trim() ? args.name : `${args.inputs.name}-id`;

    return {id: resourceId, state: defaultState};
  },
  call: function(args: pulumi.runtime.MockCallArgs) {
    switch (args.token) {
      case 'aws:iam/getRole:getRole':
        const getRoleArgs = args.inputs as aws.iam.GetRoleArgs;
        const name = getRoleArgs.name;
        return {
          name: name,
          arn: `${name}-arn`,
          uniqueId: `${name}-unique-id`,
          assumeRolePolicy: `${name}-assume-role-policy`,
        };
      case 'aws:iam/getPolicy:getPolicy':
        return {name: args.inputs.arn.match(/arn:aws:iam::.*:policy\/(.*)/)[1], arn: args.inputs.arn};
    }
    return args;
  },
});

function mockArn(resourceType: string, name: string, inputs: any) {
  switch (resourceType) {
    case 'aws:s3/bucket:Bucket':
      return `${(inputs as aws.s3.BucketArgs).bucket}-arn`;
    default:
      return `${name}-arn`;
  }
}
