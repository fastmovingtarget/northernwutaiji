# Welcome to fastmovingtarget's Tai-Chi website readme!

# The Problem:
- I studied Northern Wu Taiji for a long time but never found a truly useful tutorail/information/booking website.
- So I'm gonna make one.

## MVP
- Routes to forms, applications, foundation, QiGong and background information.
- Videos for forms, applications.

## MS1
- Broken down videos, explanations.
- Visuals and transitions between pages.

## MS2
- Booking form and user authentication.
- Levelling and ranks.

## MS3
- Tutorial aids - foot movement tracker (library?)

# Practices
## Time management and planning:
- Trying to keep track of what I'm doing every hour and logging it into the journal.
- Strict deadline - I want to be finished with development by the end of the week, so 24/01/2025.

## Development and testing
- Not going out of my way to learn any new technology, just want to assess speed and capabilities.
- Prioritise Test Driven Development.

# Journal (starting on 20/01/2025)
## Day 1:
### Hour 1: Initialising, Planning and Writing Readme:
App created using create-react-app, then some of it deleted and most of it changed. Did some wireframing on paper for each of the major landing pages, then moved onto initialising the router. Added test cases for App, Layout, Home and Router.

### Hour 2: Creating Routes for the major landing pages, basic text and "video" blocking:
Managed to get the routes working, putting together tests for the nav links in layout took more time than expected and the page blocking was very, *very* basic.

### Hour 3: Sharpen up the Layout CSS and put in placeholder text and videos:
Spent a while faffing around with colours but layout at least is now looking sharper. Starting to add in placeholder videos and will be adding in placeholder text shortly.

### Hour 4: Finish adding placeholders and get to putting the content in the correct place visually:
Placeholders added and content is in and looking passable for the moment.

## Day 1 end:
Only 4 hours of concentrated dev time, but I'm happy with the progress so far.  There's not a huge amount to do as yet testing-wise, which will likely remain the case throughout the MVP at the very least.

### Tomorrow:
Look towards carousels where there should be carousels

## Day 2:
### Hour 1: Implement carousels on Applications, QiGong, Foundations pages:
As I've not implemented these before I want to get the idea of what's going on first, then look at testing rather than the other way around.
Had some teething issues using a library - react-multi-carousel. Turns out the container needs a defined width or no children get added...which was weird but oh well.

### Hour 2: Carousels to QiGong and Foundations now, then start doing video editing.

### Hour 3: Building an array for Form Applications based on title, description, links to form page

### Hour 4: Building an array for Forms that link to and from Form Applications, setting correct carousel location with query parameters

## Day 2 end:
This is really emphasising how important it is to have data prepared for this kind of chiefly-informative website. And more to the point, how little work is needed outside of that data population.

### Tomorrow:
MVP and MS1 basically implemented at this point, barring information and video breakdowns. Next step is User/token based authentication and algorithm based levelling up.

## Day 3 start:
## Hour 1: Implementing a user data context to track currently active tasks and progress

## Hour 2: In forms video, add in timestamps for each carousel item, then set video time to correspond to where the current carousel element is

## Hour 3: On Forms page, set a button for the user to self-assess that they're comfortable with a step of the form, then link that to form progress. Add a form progress bar to the home page