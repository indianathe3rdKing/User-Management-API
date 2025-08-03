#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { UsersManagementApiStack } from "../lib/users-management-api-stack";

const app = new cdk.App();
new UsersManagementApiStack(app, "UsersManagementApiStack");
