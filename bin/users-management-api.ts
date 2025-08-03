#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { UsersManagementApiStack } from "../lib/users-management-api-stack";
import { DynamoDBStack } from "../lib/lib/dynamodb-stack";

const app = new cdk.App();
const dynamodbStack = new DynamoDBStack(app, "DynamoDBStack");
const userManagementApiStack = new UsersManagementApiStack(
  app,
  "UsersManagementApiStack",
  { dynamodbStack }
);
userManagementApiStack.addDependency(dynamodbStack);
