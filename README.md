# 🥋 Jitsu Flow  

## 📌 Overview  

Jiu-Jitsu, often called the "gentle art," is a **strategic grappling martial art** that requires problem-solving and adaptability rather than brute strength. Unlike striking sports such as **boxing or Muay Thai**, where reflexes and power dominate, Jiu-Jitsu is about **flow, control, and technique**—a process that can be visualized from the beginning (**takedown**) to the finish (**submission**).  

### 🎯 The Problem  

For beginners, Jiu-Jitsu can be **overwhelming**. Each session is packed with techniques, transitions, and key details that are difficult to remember. **Traditional note-taking doesn’t fit the mats**—you can’t exactly pull out a notebook mid-roll. Even when writing down lessons afterward, notes often lack the structure to fully capture the depth of each technique.  

While there are many **instructional videos, blogs, and apps** explaining techniques, none provide a **personalized way for students to document their progress, key insights from their coaches, and connect techniques into structured flows.**  

### 🥋 The Solution  

**Jitsu Flow** is a **gym management and student learning platform** that enhances the training experience for both gym owners and students.  

- For **gyms**, it provides **membership management, scheduling, and announcements**.  
- For **students**, it offers an **intelligent note-taking system** designed for combat sports, allowing them to **document techniques, track progress, and visualize transitions** in an intuitive way.  

### 👥 Target Users  

- **Beginners in Jiu-Jitsu or other grappling martial arts** who need a structured way to track their learning.  
- **Students** who want to **document personal notes, counters, and transitions** beyond general online resources.  
- **Instructors and gym owners** looking to improve communication and engagement with their students.  

---

## 🛠️ Features & Pages  

### ✅ **Core Gym Management Features**  
- **🏠 Home** – Announcements (e.g., events, promotions), educational content.  
- **📇 Profile** – Attendance tracking, membership details, belt rank progression.  
- **💰 Billing** – Payment and membership management.  
- **📅 Schedule** – Class schedules and instructor availability.  
- **🚪 Log out**  

### 📝 **Student-Centric Features (Sprint 1 MVP)**  
- **✍️ Note-Taking App** – Organized notes for techniques and positional flows.  
- **🔗 External Links** – Save and embed reference videos, blog links, or instructional content.  
- **📌 Categorization** – Tag techniques by type (takedown, defense, positional control, submission).  
- **📜 Version History** – Track how understanding evolves over time.  
- **💬 Rolling Notes** – Add **sparring reflections** to track performance over multiple sessions.  

### 🔄 **Flow App (Future Feature)**  
- **📈 Flowchart Creation** – Build **customized technique flowcharts** from takedowns to submissions.  
- **📂 Repository** – Store and manage past flows for review and adjustments.  
- **🔄 Interactive Navigation** – Click on flowchart items to access related notes.  

---

## 📖 MVP User Stories

### 📝 **Note-Taking Features**  
- 🥋 _"As a student, I want to document my lessons effectively so I don’t forget key details."_  
- 🥋 _"As a student, I want to categorize my notes by position type for easier reference."_  
- 🥋 _"As a student, I want to track variations of positions, including prerequisites and transitions."_  
- 🥋 _"As a student, I want to save links to videos or upload my own for better visualization."_  

### 💬 **Rolling Notes & Comments**  
- 🥋 _"As a student, I want to track what worked and what didn’t in my sparring sessions."_  
- 🥋 _"As a student, I want to categorize rolling notes by success, struggles, and adjustments."_  

### 📌 **Organizational & Navigation**  
- 🥋 _"As a student, I want a structured homepage to quickly navigate my notes."_  
- 🥋 _"As a student, I want to link related positions together for a seamless learning experience."_  

### 📈 **Flow Making (Future Feature)**  
- 🥋 _"As a student, I want to create technique flowcharts to visualize sequences."_  
- 🥋 _"As a student, I want to select techniques from a dropdown list when building a flowchart."_  
- 🥋 _"As a student, I want to edit or delete my previously created flowcharts."_  

---

## 🎯 Sprint 1: MVP Focus  

The **MVP** (Minimum Viable Product) focuses on the **note-taking feature** to provide immediate value to students while laying the foundation for gym management features.  

✅ **Sprint 1 Deliverables:**  
- 📝 Note-taking with categorized technique storage.  
- 🔗 External link support for video references.  
- 📌 Tagging & filtering by technique type.  
- 💬 Rolling notes for sparring reflections.  

---

## 📢 Final Thoughts  

Jitsu Flow is more than just a **gym management app**—it's a **training companion** that helps students **retain, structure, and apply** their lessons in Jiu-Jitsu. By focusing on **interactive note-taking and flow visualization**, this project aims to **enhance the way students learn and track their progression.**  

🚀 **Sprint 1 is just the beginning**—future versions will expand into **flowcharting, auto-generated technique maps, and deeper gym management functionalities**.  

## 🚀 Implementation  

### 🏗️ **Tech Stack**  

#### Frontend:  
- **React** – User interface.  
- **React Router** – Navigation.  
- **Axios** – API requests.  
- **React Modal** – Enhanced user interactions.  

#### Backend:  
- **Express.js** – API and server logic.  
- **MySQL** – Database for storing notes, memberships, and user data.  
- **Knex.js** – Query builder for database interactions.  
- **MySQL2** – Efficient MySQL driver.  

---

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