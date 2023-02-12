const getError = (err) => err.response.data && err.response.data.message
? err.response.data.message
: err.message;

export {getError};