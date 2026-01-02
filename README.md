# Shipment Management Form (JsonPowerDB)

## Description
Shipment Management Form is a simple web-based application that allows users to add, update, and fetch shipment records using **JsonPowerDB (JPDB)** as the backend database.

This project demonstrates:

- How to connect a web form to JsonPowerDB
- Performing CRUD operations with REST APIs
- Form validation in JavaScript
- Using Bootstrap for responsive UI

---

## Benefits of using JsonPowerDB

JsonPowerDB provides:

- Minimum development cost
- Minimum time to market
- Low complexity for integrating multiple applications
- Very fast read/write performance
- Modern and future-ready architecture
- Bridges the gap from traditional databases to big data
- Plug-gable APIs and custom algorithms
- Reduced total cost of ownership

---

## Use-cases of JsonPowerDB

JsonPowerDB is suitable for:

- Dynamic web / mobile / desktop applications
- RDBMS-type applications
- Document database use-cases
- Key-value storage
- Geo-spatial and time-series analytics
- Real-time analytics systems
- Improving analytics / reporting in existing applications
- Quick prototypes and working HTML templates

---

## Release History

| Version | Date | Description |
|--------|------|-------------|
| v1.0.0 | 02 Jan 2026 | Basic shipment form with Save, Update, Reset and JsonPowerDB integration |

---

## Table of Contents
1. Description  
2. Benefits of JsonPowerDB  
3. Use-cases  
4. Release History  
5. Illustrations  
6. Scope of Functionalities  
7. Functional Flow  
8. Examples of Use  
9. Project Status  
10. Sources  
11. Other Information  

---

## Illustrations
<img width="1789" height="733" alt="image" src="https://github.com/user-attachments/assets/c453a6a3-223a-4a63-8870-5675f1c70304" />
<img width="1695" height="680" alt="image" src="https://github.com/user-attachments/assets/4bf672af-4e42-4f73-bbb6-b96af5addac5" />
<img width="1663" height="633" alt="image" src="https://github.com/user-attachments/assets/d1e75273-f457-47f9-a4ec-b870d94eac54" />





---

## Scope of Functionalities

✔ Add shipment details  
✔ Fetch shipment record using Shipment No.  
✔ Update existing shipment  
✔ Reset form  
✔ Default date handling  

Planned features:

⬜ Delete record  
⬜ Search by multiple fields  
⬜ Better error handling  
⬜ Reports / dashboard  

---

## Functional Flow (How the Form Works)

The form has three buttons:

- **Save**
- **Update**
- **Reset**

### 1️⃣ On Page Load
- An empty form is displayed.
- Cursor is placed in the **Shipment No.** field (primary key).
- All other fields and buttons are disabled.

---

### 2️⃣ Enter Shipment No.

#### Case A: Primary key does **NOT** exist
- **Save** and **Reset** buttons are enabled.
- Cursor moves to the next field.
- User enters remaining details.

Validation:

> No field should be left empty.

Click **Save** to store data in the database, then the form resets back to the initial state.

---

#### Case B: Primary key **already exists**
- Existing record is fetched and displayed.
- Primary key becomes disabled.
- **Update** and **Reset** buttons are enabled.
- User can modify the remaining fields.

Validation:

> No field should be left empty.

Click **Update** to save the updated record, and the form resets back to the initial state.

---

### 3️⃣ Reset Button
At any time:

- Clears form
- Restores default values
- Enables only Shipment No. field
- Moves cursor back to Shipment No.

---

## Examples of Use

1. Enter Shipment No.  
2. If new → fill form → Save  
3. If existing → update fields → Update  
4. Use Reset anytime to start again  

---

## Project Status
Currently: **Learning / practice project**  
More improvements planned.

---

## Sources
- JsonPowerDB documentation by login2explore.com
- JsonPowerDB training material  
- Bootstrap documentation  

---

## Other Information
This project is mainly created for:

- Learning JsonPowerDB
- Practicing frontend + API database connectivity
- Understanding CRUD operations from UI

Feel free to suggest improvements or open issues 🙂
