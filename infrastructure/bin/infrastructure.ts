#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { InfrastructureStack } from '../lib/infrastructure-stack';

const app = new cdk.App();
new InfrastructureStack(app, 'InfrastructureStack');