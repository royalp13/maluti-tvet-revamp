# Technical Documentation: Maluti TVET Website Revamp

**Developer:** Itumeleng Prince Morudu  
**Project Date:**22-24 April 2026  
**Primary Goal:** Digital Transformation of Maluti TVET College's online presence.

---

### 1. Problem Statement
The legacy Maluti TVET website faced several critical issues that hindered student engagement:
* **Information Overload:** It was difficult for students to find specific course or campus information.
* **Technical Issues:** Legacy code led to slow performance and high bounce rates.
* **Mobile Accessibility:** Poor rendering on mobile devices, which are the primary tools for the student demographic.

### 2. Solutions Implemented
* **Component-Based Architecture:** Developed using React to ensure modularity and code reusability.
* **Optimized Assets:** Transitioned to high-quality, lightweight imagery (WebP) to ensure fast loading even on limited data plans.
* **Navigation Overhaul:** Simplified the user journey from the landing page to the admissions and programme sections.
* **Hosting Strategy:** Deployed on **Azure Static Web Apps** for enterprise-grade performance, security, and global scaling.

### 3. Core Pages & Functionality
| Page | Purpose |
| :--- | :--- |
| **Home** | Hero section with clear Call-to-Actions (CTAs) for registration and news. |
| **Programmes** | Categorized view of NATED and NC(V) courses for easy browsing. |
| **Portal** | Dedicated interface for registered students and staff. |
| **Admissions** | Streamlined information hub for prospective students. |
| **Wireframes** | Documentation of the design thinking and layout planning phase. |

### 4. Technical Specifications
* **Frontend Framework:** React.js (Vite)
* **Styling Strategy:** Custom CSS modules to maintain a unique brand identity.
* **Hosting & CI/CD:** Azure Static Web Apps with GitHub Actions integration.