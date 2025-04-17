# 🤪 MarvelCharList

**MarvelCharList** is a full-stack web application that allows users to view, add, edit, and delete Marvel character profiles. Built with React, Flask, and MySQL, it provides a seamless interface for managing a database of Marvel characters.

---

## 🚀 Features

- **Responsive UI**: Built with React and Bootstrap for a mobile-friendly experience.
- **Character Management**: Create, read, update, and delete character profiles.
- **Image Support**: Upload and display character images.
- **Search Functionality**: Quickly find characters by name or alias.
- **API Integration**: Backend powered by Flask and SQLAlchemy.
- **Persistent Storage**: Data stored in a MySQL database.

---

## 🛠️ Technologies Used

- **Frontend**:
  - React
  - React Router
  - Bootstrap
- **Backend**:
  - Flask
  - SQLAlchemy
  - Marshmallow
- **Database**:
  - MySQL

---

## 📦 Installation

### Prerequisites

- Node.js and npm
- Python 3.x
- MySQL

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/njcross/MarvelCharList.git
   cd MarvelCharList/backend
   ```

2. **Create a virtual environment**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure the database**:
   - Ensure MySQL is running.
   - Create a database named `marvel`.
   - Update the `SQLALCHEMY_DATABASE_URI` in `app.py` with your MySQL credentials.

5. **Initialize the database**:
   ```bash
   python app.py
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd ../react-router-bootstrap-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

---

## 🌐 Deployment

### Build Frontend for Production

```bash
npm run build
```

This creates an optimized `build` directory inside the React app.

### Zip the Build Folder (Optional for Transfer)

```powershell
Compress-Archive -Path build/* -DestinationPath react-build.zip
```

### Set Up Flask App on Server

- Ensure your virtual environment and requirements are installed.
- Update `passenger_wsgi.py` for cPanel with the following:

```python
import sys, os
sys.path.insert(0, '/home/username/MarvelCharList/backend')
from app import app as application
```

### Set Up MySQL on Server

- Create the database manually or let Flask handle it (make sure MySQL credentials are correct).

### Serve React Static Files

- Upload the contents of the `build/` folder to your public HTML directory if not using Flask to serve frontend.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

**Nicholas Cross**

- Email: [njcross1990@gmail.com](mailto:njcross1990@gmail.com)
- GitHub: [@njcross](https://github.com/njcross)

---

Feel free to contribute to this project by submitting issues or pull requests.