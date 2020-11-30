# Thought-Vomit

## Table of Contents

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Thought Vomit** Is a writing tool for generating ideas without getting tripped up by one's ego or self-consciousness. Thought Vomit offers the opportunity to create free-association, stream of consciousness writings while simulating the technique of blind contour drawing. The user is presented with a text field, but all of the characters typed in this area will be obscured by hash marks. When finished, they can choose to discard what they've written immediately or save for future polishing. They will also have the option to categorize the vomit's mood for better organization. The moods include:

- Humor
- Joy
- Fury
- Musing
- Melancholy

<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

The **Thought Vomit** MVP will have the concept of a user with secure login functionality. The user will be able to create and save Thought Vomits to their account, edit them and delete them.

<br>

### Goals

- _The landing page with text field will be available before sign in, but will prompt sign in/register once the user chooses to save (if not already logged in)_
- User login will require secure password authentication
- _Text will be obscured upon typing_
- _Design will be clean and easy to navigate. A pleasure to use._
- _Vomit edit option will allow for formatting (i.e. bullet points, etc)._
- _Vomits will be categorized by mood_

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|                                   Library                                   | Description                  |
| :-------------------------------------------------------------------------: | :--------------------------- |
|                                    React                                    | _Front end development._     |
|                                React Router                                 | _App navigation._            |
| [React SemanticUI](https://semantic-ui.com/collections/form.html#text-area) | _Customizable forms._        |
|             [TinyMCE](https://github.com/tinymce/tinymce-react)             | _Text editor/WYSIWIG._       |
|                                    Rails                                    | _Backend server development_ |

<br>

### Client (Front End)

#### Wireframes

[Wireframes](https://www.figma.com/file/4pM10gtRvHqdeOrSKZjohi/Thought-Vomit?node-id=0%3A1)

Assets:
[background img](https://images.unsplash.com/photo-1586076100131-32505c71d0d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)

Subtitle font options:
[Changa](https://fonts.google.com/specimen/Changa?preview.text=Let%20it%20out&preview.text_type=custom)
Color: 3C3A8D
[Amatic SC](https://fonts.google.com/specimen/Amatic+SC?sidebar.open=true&selection.family=Amatic+SC)

Title font options:
[Special Elite](https://fonts.google.com/specimen/Special+Elite)
Color: 368C44
[Rajdhani](https://fonts.google.com/specimen/Rajdhani)
[Tajawal](https://fonts.google.com/specimen/Tajawal)

Main font options:
[IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)

#### Component Tree

[Component Tree](https://www.figma.com/file/lAM2LHVhqNTElgsL1Q5f0H/Thought-Vomit-Component-Tree?node-id=0%3A1)

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like.

```structure

src
|__ components/
      |__ Header.jsx
      |__ Thought.jsx
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout.jsx
|__ screens/
      |__ ThoughtCreate.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ Thoughts.jsx
      |__ ThoughtDetail.jsx
      |__ ThoughtEdit.jsx
      |__ About.jsx
|__ services/
      |__ apiConfig.js
      |__ auth.js
      |__ moods.js
      |__ thoughts.js

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                                  | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Ruby models and controllers           |    H     |     4 hrs      |               |     TBD     |
| Ruby migration and seed data          |    H     |     4 hrs      |               |     TBD     |
| Create services, layout               |    H     |     3 hrs      |               |     TBD     |
| Build out ThoughtCreate               |    H     |     2 hrs      |               |     TBD     |
| Login/Auth                            |    H     |     4 hrs      |               |     TBD     |
| Thoughts, ThoughtDetail, Thought Edit |    H     |     8 hrs      |               |     TBD     |
| About Page                            |    H     |     4 hrs      |               |     TBD     |
| CSS                                   |    H     |     8 hrs      |               |     TBD     |
| TOTAL                                 |          |     37 hrs     |               |     TBD     |

<br>

### Server (Back End)

#### ERD Model

[ERD](https://drive.google.com/file/d/1S506bp05vg0SCxrGtLBrwBqVYLWdbqRA/view?usp=sharing)

<br>

---

## Post-MVP

> Post-MVP goals would be a public, anonymous space for users to publish their "thoughts". Another, more achievable option would be to organize the "thoughts" dashboard by mood, chronologically.

---

## Code Showcase

## Code Issues & Resolutions
