import * as pulumi from '@pulumi/pulumi';

interface RoleArgs {
  name: string,
}

export function createRole(
    args: RoleArgs,
    opts?: pulumi.ResourceOptions,
) {
  // do something
  return {name: args.name};
}
