
export class Environment {
  private name: Environments;
  public constructor(name: Environments) {
    this.name = name;
  }

  public isDevelopment() {
    return this.name === 'development';
  }

  public isNotDevelopment() {
    return this.name !== 'development';
  }

  public isTest() {
    return this.name === 'test';
  }

  public isProduction() {
    return this.name === 'production';
  }

  public toString() {
    return this.name;
  }
}

export type Environments = 'development' | 'test' | 'production';
