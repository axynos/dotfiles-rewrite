module.exports = {
  async rewrites() {
    return [
      {
	source: '/:requestPath*',
        destination: 'https://raw.githubusercontent.com/axynos/dotfiles/main/:requestPath*',
      },
    ]
  },
}
