const now = String(Date.now())
const htmlmin = require('html-minifier')

module.exports = function (eleventyConfig) {

  // English
  eleventyConfig.addCollection("posts_en", require("./src/_11ty/collections/posts_en.js"));

  // German
  eleventyConfig.addCollection("posts_de", require("./src/_11ty/collections/posts_de.js"));

  // FILTERS
  eleventyConfig.addFilter("dateFeed", require("./src/_11ty/filters/date.js").dateFeed);
  eleventyConfig.addFilter("dateFormat", require("./src/_11ty/filters/date.js").dateFormat);
  eleventyConfig.addFilter("dateFull", require("./src/_11ty/filters/date.js").dateFull);
  eleventyConfig.addFilter("dateIso", require("./src/_11ty/filters/date.js").dateIso);
  eleventyConfig.addFilter("dateYear", require("./src/_11ty/filters/date.js").dateYear);

	// Tailwind stuff
	eleventyConfig.addWatchTarget('./src/styles/tailwind.config.js')
  eleventyConfig.addWatchTarget('./src/styles/tailwind.css')

	// Alpine JS
  eleventyConfig.addPassthroughCopy({ './node_modules/alpinejs/dist/cdn.js': './js/alpine.js', })

	// Assets
  eleventyConfig.addPassthroughCopy('src/assets')
  // eleventyConfig.addPassthroughCopy('src/static')
  eleventyConfig.addPassthroughCopy('src/robots.txt')
  
	// SEO and Opengraph stuff
  eleventyConfig.addPassthroughCopy('src/assets/images/favicon.ico')
  eleventyConfig.addPassthroughCopy('src/assets/images/favicon-16x16.png')
  eleventyConfig.addPassthroughCopy('src/assets/images/favicon-32x32.png')
  eleventyConfig.addPassthroughCopy('src/assets/images/android-chrome-192x192.png')
  eleventyConfig.addPassthroughCopy('src/assets/images/android-chrome-512x512.png')
  eleventyConfig.addPassthroughCopy('src/assets/images/site.webmanifest')

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
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
        input: "src",
    }
  };
};