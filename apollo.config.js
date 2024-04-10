module.exports = {
   client: {
      includes: ['./src/**/*.{tsx,ts}'],
      tagName: 'gql',
      service: {
         name: 'nuber-eats-backend',
         url: 'http://172.30.1.9:8000/graphql',
      },
   },
};
