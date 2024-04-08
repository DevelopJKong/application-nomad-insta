import type { CodegenConfig } from '@graphql-codegen/cli';
import { BACKEND_URL } from './src/common/constants/global-constant';

const config: CodegenConfig = {
   overwrite: true,
   schema: `http://${BACKEND_URL}:8000/graphql`,
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
