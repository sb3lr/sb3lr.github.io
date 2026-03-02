---
title: "Hydra"
description: "أداة قوية جداً لتنفيذ هجمات القوة العمياء (Brute Force)."
category: "offensive"
subcategory: "general"
tags: ["bruteforce", "authentication", "passwords"]
---

# Hydra

تعتبر Hydra من أسرع الأدوات لتخمين كلمات المرور على مختلف البروتوكولات مثل SSH و FTP و HTTP.

### مثال لهجوم SSH:
```bash
hydra -l user -P passlist.txt ssh://192.168.1.50
```
