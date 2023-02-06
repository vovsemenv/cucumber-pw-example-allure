import { ICustomWorld } from '../support/custom-world';
import { expect } from '@playwright/test';
import { Given } from '@cucumber/cucumber';

Given('A cat fact is recieved', async function (this: ICustomWorld) {
  //@ts-ignore
  this.tag('44444');
  const response = await this.server?.get('facts');
  expect(response).toBeDefined();
  //@ts-ignore
  await this.step('ff', async (step) => {});
});
