# 💊 MAid App – Medical Assistant Identifier App

A full-stack medical reference tool built for nurses, healthcare providers, and students. The MAid App helps users quickly look up **medications**, **illicit drugs**, and perform **BMI calculations** — all within a responsive and exportable web interface.

![MAid Logo](assets/images/maid-logo.png)

---

## ✅ Features

- 📋 **Medication Directory**
  - Dynamically fetched and displayed from a MySQL database
  - Alphabetically grouped A–Z
  - Export to PDF functionality

- 🚫 **Illicit Drug Directory**
  - List of common illicit drugs with descriptions
  - Grouped alphabetically for easy reference

- 📏 **BMI Calculator**
  - Based on US imperial units (feet, inches, pounds)
  - Displays BMI value and health category

- 🔐 **User Authentication**
  - Register/Login with hashed passwords (bcrypt)
  - Session-based login using `express-session`

- 📤 **PDF Export**
  - Download drug/medication directories as printable PDFs (via `html2pdf.js`)

---

## 🛠 Tech Stack

**Frontend:**
- HTML5, CSS3, Bootstrap 5
- JavaScript (ES6)
- Font Awesome icons

**Backend:**
- Node.js
- Express.js
- MySQL (via `mysql2`)
- `bcrypt`, `dotenv`, `body-parser`, `cors`, `express-session`

---

## 📁 Project Structure

```plaintext
maid-app/
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── app.js
│   │   ├── bmi.js
│   │   ├── medicationApi.js
│   │   └── drugApi.js
│   └── images/
│       └── maid-logo.png
│
├── index.html             # Login/Register page
├── medications.html       # Medication Directory
├── drugs.html             # Illicit Drug Directory
├── bmi.html               # BMI Calculator
├── README.md              # Project documentation

maid-api/
│
├── db/
│   └── index.js           # MySQL connection config
│
├── routes/
│   ├── users.js
│   ├── medications.js
│   └── drugs.js
│
├── .env                   # Environment variables
├── server.js              # Node.js entry point
├── package.json
└── package-lock.json
```

## ⚙️ Setup & Usage

### 🔌 Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd maid-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=maid
   ```

4. Start the backend server:
   ```bash
   node server.js
   ```

### 🌐 Frontend Setup

1. Open `index.html` in your browser (or use a local server / Live Server)
2. Register or login with a test user
3. Navigate through the sidebar:
   - Medications
   - Illicit Drugs
   - BMI Calculator
4. Click **Export as PDF** to save a printable version

---

## 🧪 MySQL Schema

### `users` Table
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password_hash VARCHAR(255) NOT NULL
);
```

### `medications` Table
```sql
CREATE TABLE medications (
  med_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  generic_name VARCHAR(100),
  dosage VARCHAR(50),
  UNIQUE(name, generic_name, dosage)
);
```

### `illicit_drugs` Table
```sql
CREATE TABLE illicit_drugs (
  drug_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  description TEXT,
  UNIQUE(name, description)
);
```

---

## 📦 Key Dependencies

```bash
npm install express mysql2 body-parser cors dotenv bcrypt express-session
```

### Frontend Libraries

```html
<!-- Bootstrap & Font Awesome -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet" />

<!-- PDF Export -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
```

---

## 🙌 Author

Built with ❤️ by Marques McGaughy  
Custom logo and branding by Marques McGaughy c/o Studio Super 🎨 (via Illustrator — thank god my graphic design degree has gone to something!)

---

## 🔐 License

MIT License — use freely, improve boldly.