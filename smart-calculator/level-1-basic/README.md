# 🧮 Level 1 – Smart Calculator

Level 1 – Smart Calculator

یک ماشین‌حساب هوشمند با JavaScript که به‌صورت زنده محاسبه می‌کند و به‌جای واکنش‌های خام، رفتار منطقی و انسانی دارد.

این پروژه فقط درباره‌ی جمع و تفریق نیست؛
تمرینی است برای نحوه‌ی تصمیم‌گیری سیستم در مواجهه با ورودی ناقص، اشتباه یا کامل.

✨ ویژگی‌ها

محاسبه همزمان با تایپ (بدون دکمه)

جلوگیری از خطاهای رایج (NaN، تقسیم بر صفر)

اپراتور پیش‌فرض در صورت انتخاب نشدن

پیام‌های خطای کوتاه و هدفمند

بدون نمایش عدد جعلی یا رفتار غیرمنتظره

🧠 مفاهیم تمرینی

DOM Manipulation

Event Listeners (input)

Validation

Conditional Logic

UX-aware Error Handling

🧩 مفاهیم کلیدی این درس
1️⃣ Fail Quietly (شکست بی‌سروصدا)

وقتی داده هنوز کامل نیست، سیستم:

خطا نمی‌دهد

پیام هشدار نشان نمی‌دهد

فقط منتظر می‌ماند

if (!num1Element.value || !num2Element.value) {
resElement.textContent = ""
return
}

📌 داده ناتمام ≠ داده غلط

2️⃣ Graceful Degradation (تنزل با وقار)

وقتی خطای واقعی رخ می‌دهد (مثلاً تقسیم بر صفر)، سیستم:

کرش نمی‌کند

عدد اشتباه تولید نمی‌کند

دلیل را واضح و محترمانه می‌گوید

if (op === "/" && num2 === 0) {
resElement.textContent = "Cannot divide by zero"
return
}

📌 خطا هست، اما فروپاشی نه.

3️⃣ Progressive Response (واکنش تدریجی)

سیستم همراه با بلوغ ورودی کاربر واکنش نشان می‌دهد:

ورودی خالی → سکوت

ورودی غیرعددی → هشدار ساده

خطای منطقی → پیام مشخص

ورودی کامل → محاسبه

📌 UX حرفه‌ای یعنی قضاوت در زمان درست.

🤖 تصمیم هوشمند سیستم

اگر کاربر اپراتور انتخاب نکند، سیستم به‌طور پیش‌فرض جمع را در نظر می‌گیرد:

const op = opElement.value || "+"

این یک تصمیم طراحی‌شده است، نه حدس تصادفی.

🎯 هدف این Level

تمرین این سؤال کلیدی:

سیستم چه زمانی باید ساکت باشد
چه زمانی توضیح بدهد
و چه زمانی اقدام کند؟

📌 وضعیت پروژه

✔ تکمیل شده
🎓 مناسب برای شروع JavaScript با ذهنیت مهندسی و UX
#####################################################################

---

# 🧮 Level 1 – Smart Calculator

A smart JavaScript calculator that performs **live calculations** and handles user input errors **gracefully**, not aggressively.

This project is not just about math.
It is an exercise in **how a system should think, wait, respond, and protect itself** when dealing with imperfect user input.

---

## ✨ Features

- Live calculation while typing (no submit button)
- Prevents common errors (NaN, division by zero)
- Default operator when none is selected
- Clear and minimal error messages
- No fake numbers, no unexpected behavior

---

## 🧠 Concepts Practiced

- DOM Manipulation
- Event Listeners (`input`)
- Validation
- Conditional Logic
- UX-aware Error Handling

---

## 🧩 Core Lessons of This Level

### 1️⃣ Fail Quietly

When the input is **incomplete**, the system:

- Does not throw errors
- Does not show warnings
- Simply waits

```js
if (!num1Element.value || !num2Element.value) {
  resElement.textContent = ""
  return
}
```

📌 Incomplete data ≠ wrong data.

---

### 2️⃣ Graceful Degradation

When a **real logical error** occurs (like division by zero), the system:

- Does not crash
- Does not output nonsense
- Explains the problem clearly

```js
if (op === "/" && num2 === 0) {
  resElement.textContent = "Cannot divide by zero"
  return
}
```

📌 Errors are handled, not hidden or punished.

---

### 3️⃣ Progressive Response

The system responds **gradually**, based on the maturity of user input:

1. Empty input → silence
2. Non-numeric input → simple warning
3. Logical error → clear message
4. Valid input → calculation

📌 Professional UX means reacting at the right moment.

---

## 🤖 Smart System Decision

If the user does not select an operator, the system **defaults to addition**:

```js
const op = opElement.value || "+"
```

This is a **design decision**, not a guess.

---

## 🎯 Goal of This Level

To practice answering this question:

> When should a system stay silent?
> When should it explain?
> And when should it act?

---

## 📌 Project Status

✔ Completed
🎓 Ideal for beginners learning JavaScript with an engineering + UX mindset

---

If you want, **Level 2** can evolve these same ideas into:

- Real-world forms
- React components
- Server-side validation

This README is **commit-ready** for GitHub.
