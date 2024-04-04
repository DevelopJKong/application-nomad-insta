import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
   overwrite: true,
   schema: 'http://172.30.1.54:8000/graphql',
   documents: 'src/**/*.{ts,tsx}',
   generates: {
      'src/gql/': {
         preset: 'client',
         plugins: [],
      },
      './graphql.schema.json': {
         plugins: ['introspection'],
      },
   },
};

export default config;
