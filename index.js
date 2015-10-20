var utils = require('./lib/utils');
var parser = require('./lib/parser');

/**
 * Wiki Infobox parser main function
 * @method main
 * @param  {string}   keyword  keyword to search
 * @param  {function} callback callback function
 */
function main(title, callback) {

  /**
   * Scrap data from Wikipedia
   */
  utils.scraping(title, function(error, content) {
    if (error) {
      callback(error);
    } else {
      /**
       * Parse data
       */
      parser(content, function(error, result) {
        if (error) {
          callback(error);
        } else {
          callback(null, result);
        }
      });
    }
  });

}

module.exports = main;
