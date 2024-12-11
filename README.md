# pulumi-aws-bootstrap

A bootstrap project to kickstart a Pulumi AWS component.

This setup follows the Micro Stack pattern from [Infrastructure as Code, 2nd Edition, p62](https://www.oreilly.com/library/view/infrastructure-as-code/9781098114664/). Every single infrastructure component of an application/service maps to a single stack.

## Public Cloud

AWS.

## Setup

Volta is used as Node.js version manager.

Install [Volta](https://docs.volta.sh/guide/getting-started).

## Environments

Assumes three environments:

- `development`
- `test`
- `production`

Each environment has its own set of configurations `./environments/<env>.tfvar`.

Environments map to Terraform workspaces.

## Apply

To apply a configuration:

```bash
make plan env=<env>
```

where `<env>` is one of `development`, `test` or `production`.
