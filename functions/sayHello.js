export const hola = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Im Saying Hello`,
    }),
  };
};
