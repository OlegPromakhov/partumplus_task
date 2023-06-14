import { defineConfig } from "cypress";
const fs = require('fs');

export default defineConfig({
  env: {
    indexUrl: 'https://dev.omni-dispatch.com',
  },
  e2e: {
    "baseUrl": 'https://dev.omni-dispatch.com',
  },
});
