module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('assets/fonts')
  eleventyConfig.addPassthroughCopy('assets/img')
  eleventyConfig.addPassthroughCopy({'src/js': 'assets/js'})
  // eleventyConfig.addPassthroughCopy('src/_data')

  const fg = require('fast-glob')
  const logos = fg.sync(['**/partners/*', '!**/_site'])
  
  eleventyConfig.addCollection('partnerLogos', (collection) => {
    return logos
  })

  return {
    dir: {
      input: 'src',
      data: '_data',
      includes: '_includes',
      output: '_site'
    },
    templateFormats: ['html', 'njk'],
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true
  }
}
