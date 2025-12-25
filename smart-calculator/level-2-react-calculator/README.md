# 🧮 Level 2 – React Smart Calculator

A smart calculator built with React, focused on **understanding**, not just coding.

---

## 📌 Project Overview

This project represents **Level 2** of a learning path that starts with Vanilla JavaScript and gradually moves toward **React, Node.js, and system-level thinking**.

The goal is **not** to build a fancy calculator —  
but to understand what really happens behind:

- user input  
- logic  
- UI reaction  

---

## 🎯 Learning Goals

- Understand how **state replaces DOM manipulation**
- Learn how **React reacts automatically** to changes
- Practice **validation, edge cases, and user-friendly behavior**
- Apply core system-design ideas such as:
  - **Fail quietly**
  - **Graceful degradation**

---

## 🧠 Core Concepts Practiced

- React State (`useState`)
- Controlled Inputs
- Conditional Logic
- Derived Values (no button, live calculation)
- Error handling **without user stress**

---

## 🔁 Level Mapping (Mental Model)

| Level 1 – Vanilla JS | Level 2 – React |
|---------------------|----------------|
| `input.value` | `state` |
| `addEventListener` | `onChange` |
| `calculator()` | render logic |
| Manual DOM update | React re-render |

> React does not add magic —  
> it **formalizes reaction**.

---

## 🧪 Smart Behavior Rules

- No calculation if inputs are empty
- No alerts, no crashes
- Clear feedback for invalid input
- Safe handling of division by zero

---

## 📘 Deep Lesson 1  
### Fail Quietly vs Graceful Degradation

### 🇮🇷 فارسی

**Fail quietly** یعنی:

- وقتی داده ناقص است  
- سیستم سروصدا نکند  
- نه خطا بدهد  
- نه عدد جعلی بسازد  

مثال:  
اگر کاربر هنوز در حال تایپ است → نتیجه خالی بماند.

**Graceful degradation** یعنی:

- وقتی خطا واقعی است  
- سیستم بشکند؟ ❌  
- یا محترمانه سطحش را پایین بیاورد؟ ✅  

مثال:  
تقسیم بر صفر → پیام انسانی، نه crash.

---

### 🇬🇧 English

**Fail quietly** means:

- When input is incomplete  
- The system stays silent  
- No fake numbers  
- No unnecessary errors  

**Graceful degradation** means:

- When something is wrong  
- The system doesn’t break  
- It responds in a softer, safer way  

> Good systems know **when to speak**  
> and **when to stay quiet**.

---

## 📘 Deep Lesson 2  
### React Is a Thinking System, Not a Command System

### 🇮🇷 فارسی

در JavaScript معمولی:

- تو به سیستم دستور می‌دهی  
- «الان محاسبه کن»  
- «الان DOM را عوض کن»

در React:

- تو فقط **حقیقت** را می‌گویی (`state`)
- React خودش تصمیم می‌گیرد چه زمانی UI تغییر کند

> UI = بازتاب وضعیت  
> نه هدف مستقیم

---

### 🇬🇧 English

In Vanilla JavaScript:

- You tell the system what to do

In React:

- You describe the truth
- React decides how and when to reflect it

> UI is a **consequence**, not a command.

---

## 🛠 Tech Stack

- React
- Vite
- JavaScript  
  _(no TypeScript at this level)_

---

## ▶ How to Run

```bash
npm install
npm run dev
