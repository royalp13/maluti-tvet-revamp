# User Experience (UX) Documentation: Maluti TVET Revamp

This document outlines the user-centric design approach taken for the Maluti TVET College website revamp. It focuses on identifying target audiences, mapping their interactions, and validating the interface through systematic testing and logic.

---

## 1. User Personas
Design decisions were grounded in two primary personas representing the most frequent visitors to the platform.

### **Persona A: The Prospective Student (Thabo)**
* **Background:** 18-year-old high school graduate from Bethlehem, Free State.
* **Goal:** Wants to find a NATED engineering course and apply online using his smartphone.
* **Pain Points:** Limited mobile data, complex navigation, needs clear NSFAS information.

### **Persona B: The Current Student (Lerato)**
* **Background:** 2nd-year Business Management student at the Phuthaditjhaba Campus.
* **Goal:** Needs to access the Student Portal to check her academic record or announcements.
* **Pain Points:** Finds the current site slow on campus Wi-Fi; struggles to find the login button.

---

## 2. User Journey Map: Applying for a Programme
**Scenario:** A prospective student (Thabo) applying for a Civil Engineering course at the Bethlehem Campus.

| Phase | User Action | Emotional State | System Interaction |
| :--- | :--- | :--- | :--- |
| **Discovery** | Lands on the Home page via mobile search. | Hopeful | Fast load times; clear "Apply Now" button. |
| **Research** | Navigates to "Programmes" to find NATED info. | Focused | Filterable list of courses with entry requirements. |
| **Validation** | Uses the **Chatbot** to ask about NSFAS. | Reassured | Instant redirect to official NSFAS information. |
| **Action** | Clicks "Apply" and fills out the form. | Determined | Mobile-optimized fields with progress tracking. |
| **Completion** | Receives a success message and reference. | Relieved | Clear confirmation screen with next steps. |

---

## 3. User Flow (Information Architecture)
The site structure minimizes clicks to reach "Conversion Points" (Registration or Information).

1.  **Entry Point:** Home Page
2.  **Primary Decision:** [Explore Courses] OR [Student Portal]
3.  **Path A (Applicant):** Home → Programmes → Course Details → Admissions Info → Application Form.
4.  **Path B (Student):** Home → Portal → Authentication → Dashboard.
5.  **Support Path:** Any Page → Chatbot → Instant FAQ / Contact Details.

---

## 4. Design Decisions & Accessibility
* **Mobile-First Approach:** Built using "Bottom-Up" responsive design to accommodate the high percentage of South African students accessing the internet via mobile devices.
* **Visual Hierarchy:** Large, high-contrast buttons are used for the Portal and Admissions to ensure they are the primary focal points.
* **Data Efficiency:** Imagery is optimized in **WebP format** to ensure the site is usable even on 3G or throttled data connections.
* **Azure Hosting:** Utilization of **Azure Static Web Apps** ensures that the site remains fast and reliable across different regions of the Free State.

---

## 5. Wireframe Logic & Layout Strategy
Wireframes were developed using a "content-first" approach, ensuring critical info is accessible within the first two scrolls.

* **Fitts’s Law Implementation:** Large, high-contrast buttons for "Apply Now" and "Student Portal" are placed in the top-right and center-hero sections to reduce the "travel time" for a user's cursor or thumb.
* **The "Z-Pattern" Layout:** The landing page follows a Z-pattern. The eye starts at the logo (top-left), moves to the Portal login (top-right), scans through the Hero image, and finishes at the "Programmes" call-to-action.
* **Chatbot Placement:** The `Chatbot.jsx` component is anchored to the bottom-right, following standard web conventions for instant accessibility without obstructing primary content.
* **Grid System:** A 12-column grid system ensures campus imagery and course descriptions remain balanced to prevent information overload.

---


## 6. Accessibility (A11y) Compliance
* **Color Contrast:** All text-to-background ratios meet **WCAG 2.1 AA** standards to ensure readability for visually impaired users.
* **Keyboard Navigation:** All interactive elements, including the Chatbot and Portal links, are fully accessible via tab-key navigation.
* **Screen Readers:** Used semantic HTML5 tags (`<nav>`, `<main>`, `<footer>`) to ensure screen readers can accurately parse the site structure.
