module.exports = (pageSize, count) => {
  return Math.ceil(count / pageSize) || 1;
};
