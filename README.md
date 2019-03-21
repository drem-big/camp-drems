# camp-drems

1. Hardcode the UI
   - Form for search bar
   - **pagination buttons
   -movie list

1.5. TDD movie template function, create function forEach movie to append to movieContainer


2. hash-query.test.js
   -write test for adding search to empty hash (local url)
       -blank existing query string
       -variable for search term
       -query variable set by function writeSearchToQuery
   -create writeSearchToQuery function --> takes search term and puts it in the URL. Sets page to 1.
       -const searchParams = new URLSearchParams(existingQuery);
       - set the searchTerm and page number of searchParams
       -return searchParams.toString();

   -function: writePageToQuery (similar but doesn't set search term - used for pagination)

   -test: adds search to existing query changes search + resets page
   -function: readFromQuery(query)--> returns a results object from the URL
       -const searchParams = new URLSearchParams(query);
       -const results = {
           searchTerm: searchParams.get('searchTerm');
           page
       }
       return result;
   -test: read options from query
   -test: if query has no page, then return page 1
   -the three functions get moved into hash-query src file

3. search-component.js
   -get search form by ID
   -const searchTermInput = searchForm.querySelector('input');
   -searchForm event listener:
       - make a variable searchTerm that is equal to to the search bar input
       - make a variable existingQuery = window.location.hash.slice(1);
       - make a variable newQuery that calls writeSearchToQuery
       - change the window location to the newQuery
4. index.js
   - create an event listener for hash change
   - create a variable query that gets the url (hash slice)
   - const queryOptions = readFromQuery(query);
   - use function updateSearchTerm to change the search term in queryOptions (create this function in search component)
       - takes in searchTerm, sets it as the value of searchTermInput

5. Make function for formatting URL for API
   - make-search-movie-url.test.js
       - test includes query and page
           - create sample queryOptions object
           - expected is the URL you'll use to access the info from the API
           - make variable url (results) = makeSearchMovieUrl(queryOptions);
   - function makeSearchMovieUrl(queryOptions) -- this one is pretty complicated, reference the js file
   -move function to its own module

6. fetch and load movies - index.js -- inside even listener
   - make variable url = makeSearchMovieUrl(queryOptions);
   - fetch(url)
       .then(response => response.json())
       .then(body => {
           loadMovies(body.results);
       });

//increment offset for paging 
7. paging component
   - get all of the elements by ID
   - set currentPageNumber to 1
   -function updateQuery()
       -existing query = slice hash
       -newQuery = writePageToQuery(existing, page)
       -window.location.hash = newQuery;
   -event listeners for both buttons
       - incriment, function
Message Input

8. Detail View
    - render images
    - make sure we have enough images for detailview to be diginified enough to be worth showing
    - descriptions
    - location copy (informortion)
    - more links to external site 2 b late

9. Firebase
    - auth
    - configure database (have data flowing freely through thing)
    - login (email+google)
    - favorites

10. Favorites
    - favorite functionality :re cards
    - share favorites? (stertch)
    - user commentds on favorite (_DREM)

11. DREMM1NG
    - proximity to t@[0_b311
    - googgle maps directions (allow this location block/search)
    - weather
    - hiking projects for nearby hikes
    - userstory: as a user I want to know when Dog mountain is in bloom
    - userstory: as a user I want to avoid everyone all the time in all of the public places
    - (INTROVERSION FILTER)
    - EXTROVERSION FILTER (closest McMinnimans + Taco Bell to me)

Anna's To Do 
    - logic of city/rec area on card (search list and favorites page)
    - else/ifs for variables on list component
    - auth redirect stuff
    - if no result for search, display message

    ------------------------------