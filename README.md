# Project Title
Jitsu Flow

## Overview

Jiu Jitsu translates to gentle art. Unlike boxing and muay thai were reflexes and strength are the priority, Jiu Jitsu is more of a mind game where you need to relax and analyze the situation and your next steps. Like every grappling sports, beginning (takedown) to finish (submission) is a whole process and can be visualized with a high level flow chart.

### Problem

As a beginner in the martial arts, you want to absorb as much information from every lesson you take, which of course will overwhelm you. As a person who remembers and organize thoughts by taking down notes, doing jiu jitsu is hard as you cannot really bring your pen and paper in the mats (that's weird). But even once you get home, writing down today's lesson on a notepad does not do your memory justice.

I know there's a lot of apps, videos and blogs online already that explains the positions in jiu jitsu, but there really is none that allows you to take down the extra tips and details your coach told you. So we really want a note taking app that is dedicated for combat sports especially the grappling ones.

#### User Profile

- Grappling Combat Artists
    - that are considered beginners to the arts and want to take down notes

### Features

**Note Taking Features**
- As a user, I want to go home after training and be able to write down the lesson efficiently
- As a user, I want the ability to distiniguish what type of position (takedown, escape, positional dominance, submission) my notes are.
- As a user, I want to be able to note the varieties of a certain position and their corresponding positional prerequisites and exits going to another position.
- As a user, I want to be able to note down what are the counter/escapes.
- As a user, I want to be able to see the list of notes/positions in an organized way
- As a user, I want to be able to save the links of youtube videos/instagram reels as part of my notes.
- As a user, I want to be able to upload my own photo, or video as part of my notes
- As a user, I want to be able to edit the notes

- idea - to add a comment feature for each position - for extra notes
    - main page - all the major positions

**Flow Making**
- As a user, using the notes that I have taken, I want the ability to easily build a flowchart starting from a takedown or escape and finishing with a submisission.
- As a user, I want to be able to have some type of dropdown list to select for each takedown or escape, positional dominance, submission.
- As a user, I want to see a repository of all the flowcharts that I previously created and be able to edit or delete them.
- As a user, I want the ability to click the flowchart items and be redirected to the corresponding notes. 

**External Links**
- As a user, instead of seeing the long links, I want to replace them with shorter and more semantic clickable titles
- As a user, I want to see previews of the video links or have the videos embedded


## Implementation

### Tech Stack

- React
- Express
- MySQL
- Client Libraries
    - react
    - react-router-dom
    - react-modal
    - axios
- Server libraries:
    - express
    - knex
    - mysql2

### APIs
    - No external APIs will be used for the first sprint

### Sitemap
    - Home (Position)
    - Notes Page
    - Flows

### Mockups

### Data

### Endpoints

**Get /notes**

**Get /notes/:noteid**

**Post /notes/:noteid**

**Get /flows/**

**Get /flows/:flowid**

## Roadmap
- Create client
- Create server
- Create migrations
- Create seeds with sample notes

## Nice-to-haves
- 