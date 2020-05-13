exports.handler = async (...args) => {
  console.log(JSON.stringify(args, null, 2));

  return {
    statusCode: 200,
    body: 'ok',
  };
};
