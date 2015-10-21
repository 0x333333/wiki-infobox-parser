var request = require('request');

/**
 * Collection of utils
 * @type {Object}
 */
var utils   = {
  /**
   * Web content scraping
   * @method function
   * @param  {string}   title    keyword
   * @param  {Function} callback callback function
   */
  scraping: function(title, callback) {

    /**
     * Replace illegal character
     * TODO: more exceptions can be added here
     */
    title = utils.replaceAll('–', '-', title);

    /**
     * API URL
     * @type string
     */
    var url = ['https://en.wikipedia.org/w/api.php?',
              'action=query&',
              'prop=revisions&',
              'rvprop=content&',
              'rvsection=0&',
              'format=json',
              '&titles=',
              title,'&redirects'].join('');

    /**
     * Send request to WikiPedia API
     */
    request(url, function(error, response, content) {
      if (error || response.statusCode !== 200) {
        callback(error || new Error(response.statusMessage));
      } else {
        callback(null, content);
      }
    });
  },

  /**
   * Relace all target strings
   * @method function
   * @param  {string} find    target snippet
   * @param  {string} replace new snippet
   * @param  {string} str     original string
   * @return {string}         new string with new snippet
   */
  replaceAll: function(find, replace, str) {
    if(str) {
      return str.replace(new RegExp(find, 'gm'), replace).trim();
    } else {
      return null;
    }
  },

  /**
   * Valid JSON format
   * @method function
   * @param  {string}  text        JSON string
   * @return {boolean} boolean     valid or not
   */
  checkJson: function(text) {
    if (text && /^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = utils;
