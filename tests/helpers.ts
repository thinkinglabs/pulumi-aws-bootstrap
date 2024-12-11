import * as pulumi from '@pulumi/pulumi';

// promise returns a resource output's value, even if it's undefined.
const get = <T>(output: pulumi.Output<T> | undefined): Promise<T | undefined> | undefined =>
  output ? (output as any).promise() as Promise<T> : undefined;

export {get};
