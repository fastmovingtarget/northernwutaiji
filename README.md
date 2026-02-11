# Welcome to fastmovingtarget's Tai-Chi website readme!

# Disclaimer! The site is deployed in its current state, but is currently lacking illustrative video and image content
- If you want demonstrations, please view WebsiteProgressDay4.mp4 for current progress
- Also a terminology quirk - within this site I'll be using "Form(s)" and "Application(s)" in their Tai-Chi meaning (Tai-Chi was there first by a few hundred years).
    I'll try to use context clues like "booking form" etc for HTML forms for example.

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

## Video, Image and Text Information content (written post-production)
- While I'm in possession of illustrative videos and images for the forms and applications of Northern Wu Taiji, I concluded that I can't justify using them as they involve people who I'm no longer in contact with to ask permission
- Text content is all generated out of my head, but there's a mountain of information to describe all these things (and the descriptions would need to be granular, because no videos!) and I simply can't justify the time to write it all out at present

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
### Hour 1: Implementing a user data context to track currently active tasks and progress
On reflection, I feel like user authentication is pointless to implement in this scope. Storing data with an API is simply impractical for such a small project. The same applies for booking forms, it's not practical unless I'm actually willing to get booked!

### Hour 2: In forms video, add in timestamps for each carousel item, then set video time to correspond to where the current carousel element is

### Hour 3: On Forms page, set a button for the user to self-assess that they're comfortable with a step of the form, then link that to form progress. Add a form learning progress bar to the home page

### Hour 4: Create a level tracker card on the home page, build an algorithm to allow level-ups and improve stats within level using different pages.
Success mostly, using react-chartjs-2 library now have a radar chart showing stats! Which can be altered when the user learns a step of the form! How else should I improve level? I don't know!

## Day 3 end:
Today went pretty well, I felt like I got a lot done. Now to expand the scope of the levelling a little and after that I can work on my pet foot project

## Day 4 Start:
I'm just realising how that last bit sounded...anyway!

### Hour 1: Broadening the scope of how the user can register their practice, storing the last date practiced in Local Storage

### Hour 2: Adding in buttons to the main page to allow the user to say if they've practiced or not

### Hour 3: Added in a level bar, level breakpoints and each time a user says they've practiced adds +100 xp...out of max 2m, so good luck to them getting to lvl99

### Hour 4: Working on styles and reactivity of level bar
Success, thought it may be a little silly on the reactivity, it works and I'm happy with it!

## Day 4 end:
Honestly surprised how well today went, despite me not really having a plan at the start I was able to find improvements to make and I feel like the site is starting to come together.

### Tomorrow: Finishing up the product up to MS2, deployment

## Day 5 start:
### Hour 5: Adding in a dummy booking form, looking at how the email servers common in this kind of sites work.