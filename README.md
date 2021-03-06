# Week 3 Assignment: Life Tracker

Submitted by: **Rodrigo Martinez**

Deployed Application: [Lifetracker Deployed Site](ADD_LINK_HERE)

## Application Features

### Core Features

- [ ] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [ ] If the user is logged in, it should display a **Sign Out** button.
  - [x] If no user is logged in, it should display **Login** and **Register** buttons
  - [ ] Display a logo on the far left side, and contain links to the individual detailed activity page.
- [X]**The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [x] **Login Page:** A form that allows users to login with email and password.
- [x] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [x] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [ ] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [x] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves.
- [x] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [ ] Deployed website with Heroku & Surge.

**Detailed Activity Page:**

- [ ] The detailed activity page should display a feed of all previous tracked activities.
- [ ] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.)
- [ ] The activity tracked should be given a unique id for easy lookup.
      `TODO://` Add link to table schema in the link code below. Your file should end in `.sql` and show your schema for the detailed activities table. (???? Remove this paragraph after adding schema link)
  - [Table Schema](????ADD LINK TO TABLE SCHEMA.sql HERE!)

### Stretch Features

Implement any of the following features to improve the application:

- [ ] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [ ] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. (???? Remove this paragraph after adding walkthrough video)

**PART 1:**
`https://www.loom.com/share/be9eb06b4cf643e58d2e60074ccd939d`

**PART 2:**
`https://www.loom.com/share/264bd1ee8fa44ac4b4fdba1f24f4b489`

### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes! I feel like I relied on the labs a lot to accomplish a lot on this weekly assignment even though I was not able to get all the core features. I was a bit overwhelmed by how much we had to complete, and felt that with more time, I could have made more progress towards the core features.

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

If I had more time I would have definitely done my best to get the Activities page to work. I feel like I kept encountering a lot of bugs and that took me time to figure out and of course, I will keep working on this weekly assignment to complete the core features to the best of my abaility. I would also complete the exercise, nutrition, and sleep page knowing that I am already close to completing the exercise page and that the other pages should essentially be very similar to what I have already done.

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

During my project demo, I was able to demonstate what I had been able to accomplish (login, registration, security, and creating and listing exercises). Even though I was not able to have the values I passed for my exercise working, I was able to get a lot of feedback from other in my group and that really made me feel a lot better of what I accomplished. I also noticed some of my peers in the same situation I was in so it made me feel better that I was not alone in my struggles.

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

I want to give a shout out to my group members Brian, Stella and all the instructors who have helped all of us out. Whether that be through helping us degug our code or taking the time to play a game to make sure we don't get too overwhelmed by our code at times! I feel so much better of my abilities than when I first started thanks to the amazing community we have at the SITE program.
