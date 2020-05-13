exports.handler = async (event, context) => {
  const { user } = context.clientContext;

  if (!user || !user.app_metadata.roles.includes('sub:premium')) {
    return {
      statusCode: 402,
      body: 'You need a premium subscription for corgi content this good!',
    };
  }

  return {
    statusCode: 200,
    body: 'This is super secret corgi content!',
  };
};
