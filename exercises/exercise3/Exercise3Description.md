# Exercise 3:

## Due Date: Tuesday January 19 2021, 11:59 PM

## Objectives: To get familiar with javascript functional prototypes, arrays, template strings, and gain more exposure to interactions with the DOM as well as gain even more practice with our git workflow.

## Specifications/Requirements

1. Description:
   
   For this exercise we all of your work will take place inside of `exercise3.html`. You will be using the same functional prototypes that you did in exercise2, but this time you will have less guidance on which functions to use as well as you will also need to interact with the DOM in order to display the different data generated. There are four different methods you must implement, all of which use the functional prototypes discussed in order to obtain the significant data and form. The four functions are:

   `actionMovies()` - Display a list of action movies that were released in 2018. Output: <movie_title> (<year>)

   `tomHanks()` - Display a list of all comedy movies that Tom Hanks acted in. Output: <movie_title> (<year>)

   `soo2017()` - Display a list of all movies that came out in 2017 sorted alphabetically by movie title. Output: <movie_title> (<year>)

   `movieCount()` - Display the number of movies that were released each year. Output: <number_of_movies>

   It is advised that you acquaint yourself with the way in which we use the `convertToHTML()` method provided for you as well as how you can use the `innerHTML` attribute to set and get data in an HTML element.

2. Formating and output:
   You will be using the innerHTML attribute to set your results to the the unorded list <ul> with classname `list`. You should use template strings in order to display and format your ouput to match the specs (`${}` for those that need a reminder)

3. Additional Notes:
   You should not alter the `fetch()` call,this is a way we obtain the movie data from the internet. This should go without saying, but you should not hardcode your results, we will check your submissions to make sure this does not happen. You should use the functional array prototypes that we have gone over in class and that are mentioned in this exercise (map, sort, filter, reduce), using for loops, for..of loops, while loops, etc will result in a substantial amount of point deduction.
