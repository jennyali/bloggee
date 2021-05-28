module.exports = {
  getCurrentUser({ user }) {
    return user;
  },
  logout(req) {
    req.logout();
  },
};
