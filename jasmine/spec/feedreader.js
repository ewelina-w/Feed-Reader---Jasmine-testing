/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has proper URL', function(){
             for(var feed = 0; feed < allFeeds.length; feed++) {
             let x = allFeeds[feed];
             expect(x.url).toBeDefined();
             expect(x.url).not.toBe('');
           }

         })

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a name defined', function() {
            for(var feed = 0; feed < allFeeds.length; feed++) {
            let x = allFeeds[feed];
            expect(x.name).toBeDefined();
            expect(x.name).not.toBe('');
           }
         })
    });

    describe('The menu', function() {
      /* This is the test to make sure that the the menu element is
       * hidden by default and change visibility when it is clicked
       */

       /* A test that ensures the menu element is
        * hidden by default. You'll have to analyze the HTML and
        * the CSS to determine how we're performing the
        * hiding/showing of the menu element.
        */
        const element = document.querySelector('body');
        it('the menu is hidden by default', function() {
          expect(element.classList.contains('menu-hidden')).toBe(true);

        })

        /* A test that ensures the menu changes
         * visibility when the menu icon is clicked.
         */
         it('menu changes visibility on click', function() {
           var menuIcon = document.querySelector('.menu-icon-link');
           // first click
           menuIcon.click();
           expect(element.classList.contains('menu-hidden')).toBe(false);
           // second click
           menuIcon.click();
           expect(element.classList.contains('menu-hidden')).toBe(true);
         })
      })


      describe('Initial Entries', function() {
        // This is the test to check if loadFeed function works

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(function (done) {
           for (var id = 0; id<allFeeds.length; id++) {
           loadFeed(id, function() {
           done();
           })
         };
         });

        it('there is at least a single .entry element', function(done) {
          const feed = document.querySelector('.feed');
          expect(feed.firstElementChild).toBeDefined();
          done();
        });
      });

//       describe('New Feed Selection', function() {
//         // This is the test to check if the content is changing after loading a new feed by the loadFeed function
//         beforeEach(function (done) {
//           for (var id = 0; id<allFeeds.length; id++) {
//           loadFeed(id, function() {
//           done();
//           })
//         };
//         });
//
//         it('new feeds arrive', function(done) {
// // TODO spr czy przy loadFeed(1).innerhtml jest różny od ladFeed(2);
//         done();
//         })
//       })






        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
