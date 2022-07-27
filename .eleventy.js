const now = String(Date.now())
const htmlmin = require('html-minifier')

module.exports = function (eleventyConfig) {

	// Tailwind stuff
	eleventyConfig.addWatchTarget('./src/styles/tailwind.config.js')
  eleventyConfig.addWatchTarget('./src/styles/tailwind.css')

	// Alpine JS
  eleventyConfig.addPassthroughCopy({ './node_modules/alpinejs/dist/cdn.js': './js/alpine.js', })

	// Assets
  // eleventyConfig.addPassthroughCopy('src/images')
  // eleventyConfig.addPassthroughCopy('src/static')
  // eleventyConfig.addPassthroughCopy('robots.txt')
  
	// SEO and Opengraph stuff
  // eleventyConfig.addPassthroughCopy('src/static/favicon.ico')
  // eleventyConfig.addPassthroughCopy('src/static/favicon-16x16.png')
  // eleventyConfig.addPassthroughCopy('src/static/favicon-32x32.png')
  // eleventyConfig.addPassthroughCopy('src/static/android-chrome-192x192.png')
  // eleventyConfig.addPassthroughCopy('src/static/android-chrome-512x512.png')
  // eleventyConfig.addPassthroughCopy('src/static/site.webmanifest')

  eleventyConfig.addShortcode('version', function () {
    return now
  })

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified
    }

        return content
    })
  
  return {
    htmlTemplateEngine: "njk",
    dir: {
        input: "src",
        data: "data",
        layouts: "layouts",
        includes: "includes"
    }
  };
};