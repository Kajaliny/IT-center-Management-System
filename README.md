# ITCRMS (IT Center Resource Management System)

ITCRMS is a web application developed for managing resources at the IT Center of the University of Vavuniya. It optimizes computer availability, reduces wait times, and enhances user satisfaction through intelligent booking and real-time resource tracking.

## Features

- **Intelligent Booking System**: Optimizes computer usage and reduces wait times.
- **Real-Time Tracking**: Monitors and updates computer availability in real-time.
- **Dynamic Resource Allocation**: Allocates resources based on current demand.
- **User Authentication**: Secure access with user registration and authentication.
- **Usage Statistics**: Provides insights into resource utilization and usage patterns.

## Technologies Used

- **Frontend**:
  - Vanilla JavaScript
  - HTML5
  - CSS3

- **Backend**:
  - Node.js
  - Express.js for API endpoints
  - MongoDB for database storage
  - JWT (JSON Web Tokens) for authentication

## Installation

1. **Clone Repository**:
   ```bash
   git clone https://github.com/Kajaliny/IT-center-Management-System.git
   cd itcrms
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Environment Variables**:
   - Create a `.env` file in the root directory (`ITCRMS/`) with the following variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```

4. **Run Development Server**:
   ```bash
   npm start
   ```

5. **Access the Application**:
   Open your web browser and go to `http://localhost:5000` to view the application.

   ## Project Structure

        ITCRMS
        │
        ├── frontend
        │   ├── index.html
        │   ├── login.html
        │   ├── register.html
        │   ├── book.html
        │   └── styles.css
        │
        ├── backend
        │   ├── app.js
        │   ├── routes
        │   │   ├── auth.js
        │   │   └── bookings.js
        │   └── models
        │       └── User.js
        │       └── Booking.js
        │
        ├── ml_model
        │   └── predictive_model.m
        │
        ├── data
        │   └── sample_bookings.csv
        
