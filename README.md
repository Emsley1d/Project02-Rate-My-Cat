# PROJECT 02 - RATE MY CAT

##  Description:

This was my second of four projects for the Software Engineering Immersive course run by General Assembly. The project was created over the course of a week and was a team effort with two others; [Sasha Ward](https://github.com/alexwardcodes) and [Ashish Singh](https://github.com/EHCarr).

## Deployment link:

Our project can be viewed here:

[https://ratemycatapp.herokuapp.com/](https://ratemycatapp.herokuapp.com/)
#

## Technologies Used:

We spent the two weeks prior to creating the project learning the below which we implemented into our project:

- Express (including CRUD and Authentication)
- API CRUD
- Middleware
- MongoDB
- Mongoose

We implemented all the above in our project; in addition to the languages we had previously learnt:

- JavaScript
- jQuery
- HTML
- CSS
#

## Brief:

The general requirements for our project stipulated the below:

- Build a web application from scratch; must be your own work
- Use Express framework to build your application
- Deploy on Heroku so application is live on the web
- Create a README.md file that explains your app to the world

There were also a number of Stretch Goals:

- Make the application responsive
- Use a CSS library like Bootstrap
- Add extra resources
- Allow users to upload image files

A full unabridged brief for the project can be read [here](https://github.com/Emsley1d/Project02-Rate-My-Cat/blob/master/Brief.md).
#

## Planning:

Each team member presented an idea; our three ideas consisted of the below:


  - **Rate My Cat App**

    An app where users can upload photographs of their cats and can both comment upon and rate each other's cats.

  - **Photo Sharing App**

    An app where users can upload photographs; comment on each other's photos, share hints, tips and technical camera settings.

  - **Song sharing/playlist creation App**

  An app where users can upload song clips, create, share and comment on playlists.


We spent some time researching each idea; although we were keen on the photo sharing app there were already many iterations of the same idea. Again we liked the idea of a song sharing/playlist creation app; however we wanted something more visual and were unable to find a free API that would allow us to share clips.

Ultimately we decided upon my idea which was Rate My Cat. Unlike the other ideas there is no actual Rate My Cat website or app. There is no cat rating app on either the Apple Store or the Google Play Store and although ratemycat.com is owned; there is no actual web page and the domain (at the time of writing) is for sale. We felt that Rate My Cat would be the easiest platform to grow; you could have different leaderboards based on breed, age, location etc. You could hold monthly competitions and eventually create an online shop.

It also satisfied all requirements listed in the brief and would allow us to easily implement some of the optional 'Stretch Technical Goals'; namely allowing users to upload images and making the application responsive.

As the General Assembly course was entirely remote we communicated exclusively through Zoom and Slack. We spent all working day on Zoom together and on occasion remained on Zoom up until 10pm in the evening. When Zoom wasn’t available or when all 3 of us weren’t present (for example on the weekend) we provided updates and solutions via our group chat on Slack. 
#

## Wireframe:

I found myself with some unexpected free time and knew that the following day we were tasked with creating a Wireframe and ERD for our application. Under my own initiative I created an extensive Wireframe on Figma; the idea to give my team a headstart the following day. My Wireframe incorporated both the desktop site and mobile view. I presented my Wireframe to the team in the morning and after some discussion we settled on the final design.

The below is only a number of Mobile screens but the full Wireframe can be viewed [here](https://github.com/Emsley1d/Project02-Rate-My-Cat/blob/master/Wireframe.png). 

![wireframe](./readme-images/Screenshot%202022-11-15%20at%2012.09.41.png)

#

## ERD:

The brief stipulated we should have three resources; a User and two of our own choosing.

We settled on Cat and Location being our additional resources and as per the brief we created an ERD of our idea:

![ERD](./readme-images/Screenshot%202022-11-15%20at%2012.13.23.png)

The ERD was a team effort and we worked on it simultaneously using Lucid. It prompted discussion of how many cats we would have per user; how many leaderboards we would have etc. For the time being we settled on having one cat per user; one leaderboard for many cats and one location per cat.
#

## Trello Board:

In order to create, assign and manage tasks, we decided a Trello board would be of benefit. Our Team Leader (Sasha) created the board and it allowed us to work more effectively as a team. You can find the link to our Trello board [here](https://trello.com/b/BjeZaJ0E/rate-my-cat) but the below is how it originally appeared:

![trello](./readme-images/Screenshot%202022-11-15%20at%2012.14.36.png)
#

## User Stories:

We then discussed the User Stories and agreed on the below:

- As an unregistered user, I want a function to sign up to the site
- As an unregistered user, I want a quick rundown of the site's purpose
- As a registered user, I want to be able to create a profile
- As a registered user, I want to be able to create a profile of my cat
- As a user of the site, I want to be able to see other users' cats
- As a user, I want to be able to rate other cats
- As a user, I want to be able to edit my cat's profile
- As a user, I want to be able to see which cats are most popular
- As a user, I want to be able to log in/out of my account

We also set ourselves a number of other User Stories that we would strive to answer

should we have the time and know how to do so:

- BONUS: As a user, I want to be able to comment on other cats
- BONUS: As a user, I want to learn about the creators of the site
- BONUS: As a user, I want to see cats in other locations
- BONUS: As a user, I want to see who other users are

We added these to the unassigned tasks tab on our Trello board to effectively use as a checklist towards the end of the project.
#

## Delegation of Work:

After our team leader had created the basic files and folders (server.js, Controllers, Models, Views etc) in VS Code, pushed to gitHub and we had successfully cloned and pulled the repository we discussed how best to divide the work.

We thought it fairest if each person was responsible for a resource; either Cat, User or Leaderboard. That way we would all gain the same experience of linking our individual resources files together as well as be best placed to help each other out if one of us had difficulty doing so.

We also chose to work on one additional feature each so initially I was responsible for the Cat pages (controller, model, routes and cat add, details, edit and index in the Views folder) as well as the user Image Upload functionality.
#

## Build/Code Process:

### Step 1:

Having agreed on the contents of the Cat model (whilst compiling our ERD) I created the Cat schema; I commented out user, image, comment and rating and left these as placeholders until we established how to implement each:

![schema](./readme-images/Screenshot%202022-11-15%20at%2012.16.37.png)

I populated the corresponding Cat controller file with the basic CRUD operations; using previous homeworks and class exercises as templates:

![crud](./readme-images/Screenshot%202022-11-15%20at%2012.17.01.png)

And the routes files with the basic routes:

![routes](./readme-images/Screenshot%202022-11-15%20at%2012.40.50.png)

It was difficult to do anymore than this until other elements had been worked on by the others in our group so I turned my attention to the Cat views (add, delete, edit and index) files.

### Step 2:

I first concentrated on the Cat add functionality and how best to request the information from the user.

Originally our 'Age' field was set to only accept numbers however there would obviously come a point when the age provided was no longer correct. Rather than rely on users to update the field manually I decided to use a date field. The idea being we could then create a function to calculate a cat's age by comparing the birth date entered and the current day's date.

Using the input type of "date" I realised it would allow you to enter a future date as far in advance as I liked or a past date as far back as I wanted. Although not crucial I wanted to limit the date range a user could select from to improve the user experience. After investigating and experimenting I found that I could limit the maximum date to the current day's date and chose to limit the oldest date to 01/01/2000:

![date](./readme-images/Screenshot%202022-11-15%20at%2012.43.00.png)

However, the calendar just wouldn't work without providing a specific maximum date hence having to include a max value.

I decided upon a drop down of the most common breeds as opposed to allowing users to enter any text of their choosing. This would also allow us to sort leaderboards by different breads at a later date if we decided to do so.

I also decided upon a drop down for location; again for the same reasons as I did the breeds.

I settled on using County for the drop down options.

I managed to get the Cat add page working however, neither Edit, Index or View worked - I assumed because there were no users or cats as of yet because Ashish was still working on the User functionality. I was unable to test either page until the User pages had been completed so I focused on the Image Upload functionality.

### Step 3:

After researching the best middleware to allow users to upload images I settled on using Multer; I thought it gave us the most flexibility when it came to storing uploaded images and (should we decide to at a later date) could allow users to upload multiple images at the sametime.

I read a number of Multer walkthroughs online and watched instructional videos on Youtube and eventually got Multer working; so far as the user being able to upload a photo and that image saving into MongoDB. However, only the image filename was stored in MongoDB and a broken image link appeared in the browser:

![](./readme-images/Screenshot%202022-11-15%20at%2012.45.41.png)

I eventually realised I hadn't updated the cats routes folder so following the walkthroughs again I updated it with the below:

![](./readme-images/Screenshot%202022-11-15%20at%2012.46.06.png)

and added another route:

![](./readme-images/Screenshot%202022-11-15%20at%2012.46.16.png)

This resolved the issue and got Multer working correctly.

Personally, as a user whenever I upload a photo online I like to see a small preview appear; even if just to confirm I have selected the correct image. I wanted our users to have an image preview as well so researched how to do so and achieved it by writing the below:

![](./readme-images/Screenshot%202022-11-15%20at%2012.48.19.png)

This created the below image preview after a user selects a photo:

![](./readme-images/Screenshot%202022-11-15%20at%2012.49.01.png)

With the User functionality still not completed and having taken the Cat add functionality as far as I could I turned my attention to creating the Leaderboard.

### Step 4:

I started to research how to create a Leaderboard based on the average rating of each individual cat. I discovered the below on GitHub and thought it may be possible to adapt the code for our use:

[https://github.com/ndaidong/average-rating](https://github.com/ndaidong/average-rating)

![](./readme-images/Screenshot%202022-11-15%20at%2012.50.40.png)

I downloaded the repo from GitHub and started to go over the code

However, it was at this point the User functionality and pages had been completed; allowing me to test the Cat Edit, Index and View pages. I thought it best to test the pages and continue with the Leaderboard and ratings later; I communicated this to the others in my group should they wish to carry on where I left off.

### Step 5:

Now that the User functionality had been implemented and we could successfully add cats I set about working on the Cats Edit, Index and View pages.

The main function of the View page was to allow a User to rate another's cat so I researched the best methods of allowing a user to rate something in HTML.

I settled on the best methods of doing so to be either radio buttons or a range slider.

I consulted with the others in my group; we liked the fact you could assign a value to a radio button so a user would know exactly what they were rating a cat. However, we far preferred the look of the range slider and thought it provided a better user experience. I played around with the range slider; I discovered I could add a value next to the 'Submit' button that appeared and then changed as a user moved the range slider:

![](./readme-images/Screenshot%202022-11-15%20at%2012.51.04.png)

The code that allowed me to do so was:

![](./readme-images/Screenshot%202022-11-15%20at%2012.53.32.png)

### Step 6:

Our original index page listed each key value pair from the cat schema in a table:

![](./readme-images/Screenshot%202022-11-15%20at%2012.54.12.png

Not only was it a poor way to display the information; listing each key value pair effectively made each cat's individual page redundant as there was no real incentive for the user to click on a cat to view anything further.

I had the idea of using CSS cards to display each cat and created the below mock-ups:

![](./readme-images/Screenshot%202022-11-15%20at%2012.55.36.png)

We discussed them as a group and settled on the second example and decided to only show each cat's name; preferring any additional details to be displayed when clicking on each Cat and being taken to their individual page.

To accommodate the new CSS card styling I moved the Edit cat button to the cat Detail screen and then moved the Delete button to the cat Edit screen.

Adding the CSS card styling resulted in a much more presentable index page:

![](./readme-images/Screenshot%202022-11-15%20at%2012.56.21.png)

### Step 7:

We always felt that our application would work best on mobile and a responsive design was one of the bonus objectives set out in our brief. I realised that as of yet we hadn't made any attempt to make it responsive so I set about doing so.

I ran mobile and desktop websites side by side to ensure in making the website responsive I didn't create any issues with our desktop view.

Not knowing any better at the time we had been using 'px' to style the majority of elements as opposed to '%' or 'em'; however I discovered that I could make the majority of our pages responsive by simply setting max width to 100% and justifying content to center:

![](./readme-images/Screenshot%202022-11-15%20at%2012.58.41.png)

### Step 8:

The majority of styling we had added up until this point was just backgrounds and colours added early during the development that effectively just acted as placeholders. These was no overall style or identity to the site:

![](./readme-images/Screenshot%202022-11-15%20at%2012.59.09.png)

It was at this point I also realised Darth Vader played a starring role in our background image:

![](./readme-images/Screenshot%202022-11-15%20at%2013.00.49.png)

Although we were a little pushed for time I tried to improve the overall appearance of our website; ultimately culminating in the below:

![](./readme-images/Screenshot%202022-11-15%20at%2013.01.39.png)

![](./readme-images/Screenshot%202022-11-15%20at%2013.01.52.png)

I settled on a repeating pattern for the background because as more cats were added the 'Cats' page grew in length meaning the background either had to be stretched or repeated. To use anything other than a repeating pattern made the index appear a little amateurish.

Although I still wasn't happy with the appearance, it was an improvement on the original styling and the best that I could achieve in the short time left before the project deadline.
#

## Challenges:

- Making the application responsive took longer than expected and involved a lot of trial and error; playing around with Flexbox etc. In hindsight I could have saved a lot of time and effort by using Media Queries. The trial and error was not helped by the fact the Chrome extension we were using to view the responsive layout didn't actually match the true responsive layout when the live Rate My Cat website was viewed on a mobile phone.

- On the last day of the project we were making small changes and fixing bugs at such a pace that it proved difficult to keep up to date with the most recent changes. In such scenarios we would have worked better by delegating the issues or by sharing our screens and coding collaboratively.

- Being reliant on others to finish their functionality before being able to use or test parts of the code I had written was something I had not experienced or considered before. Although it slowed my progress at times it allowed me the opportunity to focus on researching and implementing additional 'bonus' functionality.

- Having never forked from a repository or submitted pull requests before GitHub proved to be a challenge. Although we eventually overcame all issues; the learning process was painful and we lost a lot of time. For the first couple of days everytime we pushed and then submitted a pull request things didn't go as planned. To begin with; both me and Ashish (for fear of breaking something) pushed to GitHub far fewer times than Sasha - hence our overall number of commits is far less. However; I'm now confident that in a group setting I wouldn't have any problems with GitHub.

- At the time of deploying our application to Heroku we were unaware that it was not suitable for persistent storage of data. We kept discovering that the majority of the uploaded user images were deleted after a couple of hours. I thought this might be due to the image sizes so I set about testing my theory by uploading different sized images from 1.5mb to 10mb. Ultimately all the images were deleted so in future I will look at deploying applications on another host:

![](./readme-images/Screenshot%202022-11-15%20at%2013.03.02.png)
#

## Wins:

- I effectively achieved two of the Stretch Goals single handedly; these being to make the application responsive and to allow a user to upload images.
- Although a very small touch I was really happy with the image preview after a user chooses an image to upload.
- Again a very small touch but I was happy that I managed to work out how to add a number to the range slider so a User could see exactly what rating score they were providing.
- For our first group project we worked incredibly well together and I believe we each complemented each other's knowledge and method of working. We each put in equal time and effort and kept each other focused and motivated even when working long into each evening.
#

## Key Learnings/Takeaways:

- That when working in a team with multiple people communication is key. Although we each annotated our code, communicated over zoom and pushed and pulled from git collectively; as the week went on and the deadline loomed we became less and less strict. Ultimately the drop in communication and our organisation caused us to lose time by having to fix issues of our own creation.
- If I were to do future projects with three or more people I would try to implement a change log; a file in which users could list all changes they've made since the last push or pull. This would make it easier to identify when one user's push or merge might have affected another developer's code or function.
#

## Bugs:

- Multer doesn't currently delete the cat photos from the upload destination. The entries are deleted from MongoDB but the actual image remains in our uploads folder.
- When a cat is being edited and a user changes the cat's image the new image isn't saved and the original image continues to be displayed.
- As detailed earlier; despite a user having to be signed into their profile when adding a cat; the user is asked to select a name from a list of all users before uploading. If a user selects another user's name they can upload from that user's profile.
- The background changes size when flicking between the various screens.
- When clicking on a user's details to view their profile the file name of the cat images they uploaded appears as opposed to the actual image itself.
#

## Future Improvements:

- Allow users to upload multiple photos of the same cat. This should in theory be an easy improvement as Multer already has the capability to do so.
- Allow users to display a photo of their choosing on their profile; be it a picture of themselves, or an avatar etc. This would help us mirror the CSS Card format the cat's profiles display in on the Cat page.
- To be able to filter the cats in multiple ways; newest added; least amount of votes; by breed, by location etc.
- To have multiple leaderboards; again by breed or location and then by an individual day, month, year etc.
- Add the ability for users to be able to comment on cats as opposed to just rate them and for other users to then be able to view any comments left.
- To display the number of times a cat has been voted for on their profile and their position on the overall leaderboard.
- To bring back the edit and delete buttons for each cat.
- Implement flash messages for successful login/logout and for successfully adding or deleting a cat.
- To improve the overall aesthetic of the app; unfortunately the end design (background color, images, fonts etc) was a little rushed. I would like to make the appearance more sophisticated and modern. Perhaps something along the lines of the below: 
![](./readme-images/Screenshot%202022-11-15%20at%2013.03.26.png)