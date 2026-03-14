---
title: "دليل قمع تجسس ويندوز: كيف هجدت النظام ووفرت 2GB رام بضربة وحدة؟"
description: "دليل تفصيلي يجمع بين التحذير الأمني، تعطيل خدمات التتبع يدوياً، وتحليل الأداء باستخدام Wireshark لتوفير 2GB من الرام."
publishDate: 2026-03-12
tags: ["Windows", "Privacy", "Security", "Wireshark", "CyberSecurity", "LTSC"]
image: ""
---

> [!CAUTION]
> **اسئل نفسك..  الجهاز اللي معك ولا تبع مايكروسوفت؟**
> مع قرب نهاية دعم ويندوز 10 في 2025، الجماعة يبون يدفونك لـ ويندوز 11 غصب وبشروط تعجيزية. بس انتبه تتهور وتروح تحمل نسخ معدلة من ناس ما تعرفهم (زي tiny11)، يمكن فيها "بلاوي" تخترق جهازك. اقرأ هالدليل وبتعرف كيف تاخذ نظام رسمي، آمن، وخفيف "زي الريشة".

## مقدمة: فخ النسخ المعدلة (ليه LTSC يا خبير؟)

كثير ناس ينحاشون من ثقل ويندوز 11 ويروحون لنسخ معدلة مجهولة. وأنا كطالب أمن سيبراني، أقولك "انتبه يا صاحبي":

- **خطر الاختراق**: ما تضمن إن هذي النسخ نظيفة؛ يمكن فيها فيروسات تسرق بياناتك. الجهاز الوهمي (VM) عادي نلعب فيه، بس جهازك الأساسي "خط أحمر" وخطير جداً.
- **الاستقرار**: الحركات الملتوية عشان تتجاوز الشروط ممكن تضرب عليك النظام بشاشة زرقاء أو تحرمك من التحديثات.

**الحل؟** زي ما شفت في مقالات عالمية (زي [PurpleYard](https://purpleyard.xyz/posts/best-windows-edition/))، الحل هو **Windows 11 IoT Enterprise LTSC**. نسخة رسمية من مايكروسوفت، "صافية" ما فيها إعلانات ولا برامج تافهة، والأهم إنها خفيفة جداً ووفرت لي فوق الـ 2GB RAM.. شي "ما شاء الله" يفتح النفس!

---

## الخطوة 1: الاستطلاع وكشف "المخبرين" (Wireshark)

قبل ما ألمس أي شي، شغلت الـ Wireshark وقعدت أتفرج على الفضايح. الويندوز العادي "هذار" (ثرثار) بشكل ما يتصوره عقل! يرسل تحركاتك وعفشك وبيانات جهازك لخوادم زي `browser.events` و `vortex`.

> [!TIP]
> **تحليل الوضع قبل القمع (زحمة بيانات):**
> 
> ![الوضع قبل القمع - ثرثرة التتبع](/assets/tutorials/images/windows-telemetry-guide-before.png)
> 
> شفت في وايرشارك انفجار طلبات صامتة:
> - `settings-win.data.microsoft.com`: يرسل هويتك وإعداداتك للسحابة.
> - `browser.events.data.microsoft.com`: "جاسوس" المتصفح، يرسل كل شي تسويه.
> - وغيرة الكثير اللي تشوفه قدامك

```bash
# فلتر القنص في وايرشارك (عشان نصيدهم)
dns.qry.name contains "microsoft" || dns.qry.name contains "windows"
```

---

## الخطوة 2: الشغل اليدوي (Services.msc)

هنا "قصينا" عروق الاتصال برمجياً. اضغط `Win + R` واكتب `services.msc` وعطل هالثلاثة:

- **Connected User Experiences and Telemetry**:
  - *ليه؟*: هذا "رأس البلاء"، هو المخبر المسؤول عن جمع بياناتك.
  - *الضرر*: ما فيه أي ضرر، بس ترتاح من مراقبة مايكروسوفت لك.

- **dmwappushservice**:
  - *ليه؟*: قناة خلفية للإعلانات والتتبع.
  - *الضرر*: ولا شي.

- **Microsoft Software Shadow Copy Provider**:
  - *ليه؟*: إذا ما تستخدم نظام النسخ الاحتياطي الرسمي، عطلها وبتوفر رام ومعالج.
  - *الضرر*: بس لو كنت تستخدم أداة Windows Backup الرسمية يمكن تستهبل عليك.

---

## الخطوة 3: "تمسيك" سجل النظام (Registry)

افتح (CMD) كمسؤول واجلد هالأوامر عشان تقفل الأبواب اللي يحاولون يرجعون منها:

```cmd
:: 1. قفل جمع البيانات (السياسة الكبرى)
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\DataCollection" /v AllowTelemetry /t REG_DWORD /d 0 /f

:: 2. منع سجل الكتابة (TIPC) - عشان ما يعرفون وش تكتب
reg add "HKLM\SOFTWARE\Microsoft\Input\TIPC" /v Enabled /t REG_DWORD /d 0 /f

:: 3. تعطيل الحساسات (زي الموقع والإضاءة)
reg add "HKLM\USE_SENSORS" /v "Enabled" /t REG_DWORD /d 0 /f

:: 4. إغلاق هوية الإعلانات (Advertising ID)
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\AdvertisingInfo" /v Enabled /t REG_DWORD /d 0 /f

:: 5. منع تقارير الأخطاء (Error Reporting)
reg add "HKLM\SOFTWARE\Microsoft\Windows\Windows Error Reporting" /v Disabled /t REG_DWORD /d 1 /f

:: 6. تعطيل سجل النشاط (Activity Feed) - اللي يسجل وش فتحت ووش سكرت
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\System" /v EnableActivityFeed /t REG_DWORD /d 0 /f
```

**الضرر**: "الاقتراحات التلقائية" للكلمات بتضعف شوي، وما راح تلقى سجل للملفات اللي فتحتها زمان في (Timeline).

---

## الخطوة 4: القمع النهائي بملف الـ Hosts (جدار برلين)

هنا "المربط" يا سعيد. اكتشفنا إن الويندوز أحياناً يلف ويدور، فاستخدمنا ملف الـ Hosts عشان نوجه روابط التجسس لعنوان "خربان" (`0.0.0.0`) وننهي الموضوع.
المسار: `C:\Windows\System32\drivers\etc\hosts` (افتحه كمسؤول).

```text
#  لروابط التجسس اللي قمعناها
0.0.0.0 browser.events.data.microsoft.com
0.0.0.0 mobile.events.data.microsoft.com
0.0.0.0 vortex.data.microsoft.com
0.0.0.0 vortex-win.data.microsoft.com
0.0.0.0 settings-win.data.microsoft.com
0.0.0.0 self.events.data.microsoft.com
0.0.0.0 events.data.microsoft.com
0.0.0.0 telemetry.microsoft.com
0.0.0.0 telemetry.appex.bing.net
0.0.0.0 telemetry.urs.microsoft.com
0.0.0.0 watson.telemetry.microsoft.com
0.0.0.0 watson.ppe.telemetry.microsoft.com
0.0.0.0 oca.telemetry.microsoft.com
0.0.0.0 sqm.telemetry.microsoft.com
0.0.0.0 reports.wes.df.telemetry.microsoft.com
0.0.0.0 services.wes.df.telemetry.microsoft.com
0.0.0.0 browser.pipe.aria.microsoft.com
0.0.0.0 inputsuggestions.msdxcdn.microsoft.com
0.0.0.0 edge.microsoft.com
0.0.0.0 msedge.net
0.0.0.0 geo.prod.do.dsp.mp.microsoft.com
0.0.0.0 fd.api.iris.microsoft.com
0.0.0.0 arc.msn.com
0.0.0.0 assets.msn.com
0.0.0.0 ntp.msn.com 
0.0.0.0 www.msn.com
0.0.0.0 msn.com
0.0.0.0 windows.msn.com
0.0.0.0 ads.msn.com
0.0.0.0 a.ads1.msn.com
0.0.0.0 a.ads2.msn.com
0.0.0.0 rad.msn.com
0.0.0.0 preview.msn.com
0.0.0.0 g.msn.com
```

| الرابط اللي قمعناه | ليه؟ (السبب) | هل فيه ضرر؟ (الصدق) |
| :---: | :---: | :---: |
| `browser.events.data.microsoft.com` | جاسوس المتصفح، يسجل نقراتك وحركاتك. | ما فيه أي ضرر. |
| `mobile.events.data.microsoft.com` | تتبع الأحداث المرتبطة بتطبيقات الجوال. | ما فيه ضرر. |
| `vortex.data.microsoft.com` | خادم جمع بيانات التشخيص الرئيسي. | ما فيه ضرر. |
| `vortex-win.data.microsoft.com` | يجمع بيانات تشخيص الويندوز والتطبيقات. | ما فيه ضرر. |
| `settings-win.data.microsoft.com` | يرسل إعداداتك وبيانات هويتك إلى السحابة. | ما فيه ضرر. |
| `self.events.data.microsoft.com` | يجمع أحداث تشخيص التطبيقات الذاتية. | ما فيه ضرر. |
| `events.data.microsoft.com` | خادم تتبع الأحداث العامة للويندوز. | ما فيه ضرر. |
| `telemetry.microsoft.com` | خادم التجسس (التلمتري) الأساسي. | ما فيه ضرر. |
| `telemetry.appex.bing.net` | تتبع استخدام تطبيقات ومحرك بحث بينج (Bing). | ما فيه ضرر. |
| `telemetry.urs.microsoft.com` | تتبع سمعة الروابط (SmartScreen). | بتوقف ميزة فحص الروابط الخبيثة في متصفح إيدج والويندوز. |
| `watson.telemetry.microsoft.com` | يرسل تقارير الأخطاء والانهيارات صامتاً. | ما فيه ضرر (مايكروسوفت ما بتدري لو جهازك علّق). |
| `watson.ppe.telemetry.microsoft.com` | خوادم إضافية لتقارير الأخطاء (Watson). | ما فيه ضرر. |
| `oca.telemetry.microsoft.com` | يجمع معلومات دقيقة وقت انهيار النظام (Crash). | ما فيه ضرر. |
| `sqm.telemetry.microsoft.com` | يرسل مقاييس جودة برامج مايكروسوفت (CEIP). | ما فيه ضرر. |
| `reports.wes.df.telemetry.microsoft.com` | تقارير تشخيص خدمات الويندوز (WES). | ما فيه ضرر. |
| `services.wes.df.telemetry.microsoft.com` | خدمات خلفية لجمع تقارير الأخطاء. | ما فيه ضرر. |
| `browser.pipe.aria.microsoft.com` | نظام مراقبة قوي (Aria) لمتصفح إيدج. | ما فيه ضرر. |
| `inputsuggestions.msdxcdn.microsoft.com` | يرسل اللي تكتبه عشان يعطيك "اقتراحات". | بيفقد البحث "الاقتراحات التلقائية" فقط. |
| `edge.microsoft.com` | تتبع متصفح "إيدج". | ماراح يزامن مفضلتك بين أجهزتك. |
| `msedge.net` | الخدمات الخلفية والتتبع لمتصفح إيدج. | قد يؤثر على بعض مزايا إيدج المتقدمة. |
| `geo.prod.do.dsp.mp.microsoft.com` | يوزع التحديثات لأجهزة ثانية بـ شبكتك والنت حقك. | يوفر نت ورام، وما يضر تحديثاتك أبداً. |
| `fd.api.iris.microsoft.com` | إعلانات قائمة ابدأ وصور القفل (Windows Spotlight). | صور شاشة القفل ما تتغير لحالها، والإعلانات تختفي. |
| `arc.msn.com` | خوادم شبكة MSN للإعلانات والمحتوى. | ما فيه ضرر. |
| `assets.msn.com` | يحمل أصول وصور صفحة الأخبار. | يوفر إنترنت ورام. |
| `ntp.msn.com` | محتوى "علامة التبويب الجديدة" في إيدج والأخبار. | صفحة الـ New Tab بتصير بيضاء وفاضية (سريعة جداً). |
| `www.msn.com` | موقع MSN العام لأخبار مايكروسوفت. | ما تقدر تفتح موقع MSN (ميزة ترتاح منها). |
| `msn.com` | الجذر الخاص بشبكة الأخبار والإعلانات. | نفس السابق. |
| `windows.msn.com` | أخبار وطقس شريط المهام (Widgets). | بتصير فاضية (وهذا يريح الرام "قوي"). |
| `ads.msn.com` | خوادم الإعلانات الخاصة بمايكروسوفت. | وداعاً للإعلانات المزعجة في النظام المدمجة. |
| `a.ads1.msn.com` | سيرفر إعلانات فرعي. | ما فيه ضرر. |
| `a.ads2.msn.com` | سيرفر إعلانات فرعي آخر. | ما فيه ضرر. |
| `rad.msn.com` | توجيه وتتبع الإعلانات (Routing Ads). | ما فيه ضرر. |
| `preview.msn.com` | صور مصغرة ومعاينة لأخبار MSN المزعجة. | ما فيه ضرر، يوفر بيانات. |
| `g.msn.com` | تتبع نقراتك على الروابط داخل شبكة MSN. | ما فيه ضرر (يقمع التتبع). |

> [!IMPORTANT]
> لا يا خبير. خوادم التحديث الأساسية ما لمسناها، جهازك بيتحمل له التحديثات الأمنية وهو "يضحك".

---

## النتيجة النهائية (الانتصار الساحق)

بعد ما سويت القمع ونظفت الكاش بـ `ipconfig /flushdns` من ال CMD تشغيل كمسؤول:

> [!TIP]
> **تحليل الهدوء الشبكي (السيادة الرقمية):**
> 
> ![الهدوء الشبكي بعد التعديل عبر وايرشارك](/assets/tutorials/images/windows-telemetry-guide-after.png)
> - اختفت كل روابط التتبع القبيحة. ما بقى إلا الروابط (البريئة) زي client.wns.windows.com حقت التنبيهات، وطلبات التحديث الرسمية اللي نحتاجها. 

- **توفير الرام**: نزل الاستهلاك من 7GB لـ 5GB! (يعني 2GB فزت فيها للألعاب والـ VMs).
- **الخصوصية**: هدوء "حالي" في Wireshark، كل المخبرين انقمعوا وما بقى إلا روابط النظام المهمة.
- **الأداء**: الجهاز صار طيارة واستجابته سريعة لأننا ريحناه من "الهذرة" في الخلفية.

> [!TIP]
> **ملاحظة من طالب أمن سيبراني:**
> قبل ما تسوي أي شي، خذ "نقطة استعادة" (Restore Point). خلك محترف عشان لو بغيت ترجع لأي شي يكون طريقك سهل.