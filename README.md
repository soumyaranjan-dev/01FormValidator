# 📽️ Form Validator using TS 
- A form validator for you

---

## 🏗️ Project Structure 
|- dist/
|  -- app.js
|- src/
|  -- styles/
|     |-- input.css
|     |-- output.css
|  -- app.ts
|- index.html

---


## 🪶 Features 
- Username, Email, and Password validation  
- Real-time feedback with green ✅ or red ❌ outline  
- Error messages for invalid inputs  
- Clears input fields on successful submission  


---

## 🎯 Validations
- **Username** → cannot be empty  
- **Email** → must match regex `^[^\s@]+@[^\s@]+\.[^\s@]+$`  
- **Password** → at least 6 characters  

---

## 🛠️ Setup & Run

1. Clone the repo:
```bash
   git clone https://github.com/soumyaranjan-dev/01FormValidatorTS.git
   cd form-validator
```

2. Install TypeScript (if not installed):
   ```bash
   npm install -g typescript
   ```

3. Run TypeScript:
   ```bash
   tsc --watch
   ```

4. Open `index.html` in your browser 🚀

---

## 📸 Demo

* ✅ Green outline when input is valid
* ❌ Red outline + error message when invalid

---

## 🤝 Contributing

1. Fork it
2. Create a branch
3. Commit your changes
4. Push and create a PR

---

## The End
