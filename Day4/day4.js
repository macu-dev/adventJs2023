function decode(message) {
  const reverse = s => s.split('').reverse().join('');

  while (/\(([^()]*)\)/.test(message)) {
    message = message.replace(/\(([^()]*)\)/g, (match, p1) => reverse(p1));
  }

  return message;
}

module.exports = decode;
