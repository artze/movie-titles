# movie-titles

## Running Locally
1. Clone this repo.
2. Install dependencies with `npm install`.
3. Run app with `npm start`. 
4. Visit app at `http://localhost:3000/`

## Run test 
1. Run `npm test`.
2. If you get a message with 'No tests found related to files changed since last commit.', press the `a` key to run all tests.

## Notes
* 'Watch Now' on individual movie page is simply a visual dummy.
* For brevity, models of data entities are created only where practically necessary.
* Styling is optimized for screen size of 1920px and above. Styling for smaller screen sizes would have been done had there been more time.
* Ideally, contructor arguments of data entity classes would be validated with the use of factories.
* Unit tests are written for the following functionalities, relating to the scroll-pagination feature. Ideally, tests should be expanded to cover other areas.
  * Ensure API calls are not triggered after last page of movie rows is retrieved
  * Ensure API calls are not triggered when there is a pending request