// Simple in-memory token blacklist
// (In production, use Redis or a database)
const blacklistedTokens = new Set();

module.exports = {
  add: (token) => blacklistedTokens.add(token),
  has: (token) => blacklistedTokens.has(token),
};
