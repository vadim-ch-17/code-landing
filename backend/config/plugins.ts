export default () => ({
  navigation: {},
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      defaultLimit: 100,
      maxLimit: 100,
      depthLimit: 7,
      amountLimit: 1000,
      apolloServer: {
        tracing: false,
      },
    },
  },
});
