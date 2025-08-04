#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { UsersManagementApiStack } from "../lib/users-management-api-stack";
import { DynamoDBStackV2 } from "../lib/lib/dynamodbV2-stack";

const app = new cdk.App();
const dynamodbStack = new DynamoDBStackV2(app, "DynamoDBStackV2");
const userManagementApiStack = new UsersManagementApiStack(
  app,
  "UsersManagementApiStack",
  { dynamodbStack }
);
userManagementApiStack.addDependency(dynamodbStack);
