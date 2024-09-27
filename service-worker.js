const CACHE_NAME = "webook-v1";
const ASSETS_TO_CACHE = [
    "./",
    "./12PT.html",
    "./404.html",
    "./AboutUs.html",
    "./ADSL.html",
    "./Ahlawya.html",
    "./AllForms.html",
    "./CreateADSL.html",
    "./CreateFixed.html",
    "./CreateWeMix.html",
    "./DailyBundle.html",
    "./Devices.html",
    "./DressCode.html",
    "./FixedLine.html",
    "./FMCCancelation.html",
    "./Foreigners.html",
    "./Icon.png",
    "./icon512_maskable.png",
    "./icon512_rounded.png",
    "./ImportanatLinks.html",
    "./index.html",
    "./Indigo.html",
    "./Info.html",
    "./JavaScript.js",
    "./Kix.html",
    "./manifest.json",
    "./MissionAndVision.html",
    "./MobileInternet.html",
    "./Nitro.html",
    "./Notifications.html",
    "./NTRA.html",
    "./OurManagement.html",
    "./Postpaid.html",
    "./Prepaid.html",
    "./Promotions.html",
    "./RetailStandards.html",
    "./SalesSkills.html",
    "./service-worker.js",
    "./SoftSkills.html",
    "./Style.css",
    "./SuperKix.html",
    "./System.html",
    "./Tazbeet.html",
    "./TNPS.html",
    "./TransparentIcon.png",
    "./USSD.html",
    "./VideoBundle.html",
    "./Videos.html",
    "./webook.apk",
    "./WeClub.html",
    "./WeGold.html",
    "./WeMix.html",
    "./WePay.html",
    "./WERules.html",
    "./XandXPlus.html",
    "./Files/12 PT-1.jpg",
    "./Files/ADSL-02.jpg",
    "./Files/ADSL-03.jpg",
    "./Files/ADSL-04.jpg",
    "./Files/ADSL-1.jpg",
    "./Files/ADSL-2.jpg",
    "./Files/ADSL-3.jpg",
    "./Files/ADSL-4.jpg",
    "./Files/ADSL-5.jpg",
    "./Files/ADSL-6.jpg",
    "./Files/ADSL-7.jpg",
    "./Files/Ahlawaya-1.jpg",
    "./Files/Ahlawaya-2.jpg",
    "./Files/Ahlawaya-3.jpg",
    "./Files/Ahlawaya-4.jpg",
    "./Files/ahlawy-update.jpg",
    "./Files/CreateADSL-1.jpg",
    "./Files/CreateADSL-10.jpg",
    "./Files/CreateADSL-11.jpg",
    "./Files/CreateADSL-2.jpg",
    "./Files/CreateADSL-3.jpg",
    "./Files/CreateADSL-4.jpg",
    "./Files/CreateADSL-5.jpg",
    "./Files/CreateADSL-6.jpg",
    "./Files/CreateADSL-7.jpg",
    "./Files/CreateADSL-8.jpg",
    "./Files/CreateADSL-9.jpg",
    "./Files/CreateWeMix-1.jpg",
    "./Files/CreateWeMix-2.jpg",
    "./Files/CreateWeMix-3.jpg",
    "./Files/Daily-1.jpg",
    "./Files/Daily-2.jpg",
    "./Files/Devices-1.jpg",
    "./Files/Devices-10.jpg",
    "./Files/Devices-11.jpg",
    "./Files/Devices-12.jpg",
    "./Files/Devices-13.jpg",
    "./Files/Devices-14.jpg",
    "./Files/Devices-15.jpg",
    "./Files/Devices-16.jpg",
    "./Files/Devices-17.jpg",
    "./Files/Devices-18.jpg",
    "./Files/Devices-19.jpg",
    "./Files/Devices-2.jpg",
    "./Files/Devices-3.jpg",
    "./Files/Devices-4.jpg",
    "./Files/Devices-5.jpg",
    "./Files/Devices-6.jpg",
    "./Files/Devices-7.jpg",
    "./Files/Devices-8.jpg",
    "./Files/Devices-9.jpg",
    "./Files/Fixed Voice - Training Material_0005.jpg",
    "./Files/Fixed Voice - Training Material_0006.jpg",
    "./Files/Fixed Voice - Training Material_0007.jpg",
    "./Files/Fixed Voice - Training Material_0008.jpg",
    "./Files/Fixed Voice - Training Material_0009.jpg",
    "./Files/Fixed Voice - Training Material_0010.jpg",
    "./Files/Fixed Voice - Training Material_0011.jpg",
    "./Files/Fixed Voice - Training Material_0012.jpg",
    "./Files/Fixed Voice - Training Material_0013.jpg",
    "./Files/Fixed Voice - Training Material_0014.jpg",
    "./Files/Fixed Voice - Training Material_0015.jpg",
    "./Files/Fixed Voice - Training Material_0016.jpg",
    "./Files/Fixed Voice - Training Material_0017.jpg",
    "./Files/Fixed Voice - Training Material_0018.jpg",
    "./Files/Fixed Voice - Training Material_0019.jpg",
    "./Files/Fixed Voice - Training Material_0020.jpg",
    "./Files/Fixed Voice - Training Material_0021.jpg",
    "./Files/Fixed Voice - Training Material_0022.jpg",
    "./Files/Fixed Voice - Training Material_0023.jpg",
    "./Files/Fixed Voice - Training Material_0024.jpg",
    "./Files/Fixed Voice - Training Material_0025.jpg",
    "./Files/Fixed Voice - Training Material_0026.jpg",
    "./Files/Fixed Voice - Training Material_0027.jpg",
    "./Files/Fixed Voice - Training Material_0028.jpg",
    "./Files/Fixed Voice - Training Material_0029.jpg",
    "./Files/Fixed Voice - Training Material_0030.jpg",
    "./Files/Fixed Voice - Training Material_0031.jpg",
    "./Files/Fixed Voice - Training Material_0032.jpg",
    "./Files/Fixed Voice - Training Material_0033.jpg",
    "./Files/Fixed Voice - Training Material_0034.jpg",
    "./Files/Fixed Voice - Training Material_0035.jpg",
    "./Files/Fixed Voice - Training Material_0036.jpg",
    "./Files/Fixed Voice - Training Material_0037.jpg",
    "./Files/Fixed Voice - Training Material_0038.jpg",
    "./Files/Fixed Voice - Training Material_0039.jpg",
    "./Files/Fixed Voice - Training Material_0040.jpg",
    "./Files/Fixed Voice - Training Material_0041.jpg",
    "./Files/Fixed Voice - Training Material_0042.jpg",
    "./Files/Fixed Voice - Training Material_0043.jpg",
    "./Files/Fixed Voice - Training Material_0044.jpg",
    "./Files/Fixed Voice - Training Material_0045.jpg",
    "./Files/Fixed Voice - Training Material_0046.jpg",
    "./Files/Fixed Voice - Training Material_0047.jpg",
    "./Files/Fixed Voice - Training Material_0048.jpg",
    "./Files/Fixed Voice - Training Material_0049.jpg",
    "./Files/Fixed Voice - Training Material_0050.jpg",
    "./Files/Fixed Voice - Training Material_0051.jpg",
    "./Files/Fixed Voice - Training Material_0052.jpg",
    "./Files/Fixed Voice - Training Material_0053.jpg",
    "./Files/Fixed Voice - Training Material_0054.jpg",
    "./Files/Fixed Voice - Training Material_0055.jpg",
    "./Files/Fixed Voice - Training Material_0056.jpg",
    "./Files/Fixed Voice - Training Material_0057.jpg",
    "./Files/Fixed Voice - Training Material_0058.jpg",
    "./Files/Fixed Voice - Training Material_0059.jpg",
    "./Files/Fixed Voice - Training Material_0060.jpg",
    "./Files/Fixed Voice - Training Material_0061.jpg",
    "./Files/Fixed Voice - Training Material_0062.jpg",
    "./Files/Fixed Voice - Training Material_0063.jpg",
    "./Files/Fixed Voice - Training Material_0064.jpg",
    "./Files/Fixed Voice - Training Material_0065.jpg",
    "./Files/Fixed Voice - Training Material_0066.jpg",
    "./Files/Fixed Voice - Training Material_0067.jpg",
    "./Files/Fixed Voice - Training Material_0068.jpg",
    "./Files/Fixed Voice - Training Material_0069.jpg",
    "./Files/Fixed Voice - Training Material_0070.jpg",
    "./Files/Fixed Voice - Training Material_0071.jpg",
    "./Files/Fixed Voice - Training Material_0072.jpg",
    "./Files/Fixed Voice - Training Material_0073.jpg",
    "./Files/Fixed Voice - Training Material_0074.jpg",
    "./Files/Fixed Voice - Training Material_0075.jpg",
    "./Files/Fixed Voice - Training Material_0076.jpg",
    "./Files/Fixed Voice - Training Material_0077.jpg",
    "./Files/Fixed Voice - Training Material_0078.jpg",
    "./Files/Fixed Voice - Training Material_0079.jpg",
    "./Files/Fixed Voice - Training Material_0080.jpg",
    "./Files/Fixed Voice - Training Material_0081.jpg",
    "./Files/Fixed Voice - Training Material_0082.jpg",
    "./Files/Fixed Voice - Training Material_0083.jpg",
    "./Files/Fixed Voice - Training Material_0084.jpg",
    "./Files/Fixed Voice - Training Material_0085.jpg",
    "./Files/Fixed Voice - Training Material_0086.jpg",
    "./Files/Fixed Voice - Training Material_0087.jpg",
    "./Files/Fixed Voice - Training Material_0088.jpg",
    "./Files/Fixed Voice - Training Material_0089.jpg",
    "./Files/Fixed Voice - Training Material_0090.jpg",
    "./Files/Fixed Voice - Training Material_0091.jpg",
    "./Files/Fixed Voice - Training Material_0092.jpg",
    "./Files/Fixed Voice - Training Material_0093.jpg",
    "./Files/Fixed Voice - Training Material_0094.jpg",
    "./Files/Fixed Voice - Training Material_0095.jpg",
    "./Files/Fixed Voice - Training Material_0096.jpg",
    "./Files/Fixed Voice - Training Material_0097.jpg",
    "./Files/FixedLine-0.jpg",
    "./Files/FixedLine-1.jpg",
    "./Files/FixedLine-10.jpg",
    "./Files/FixedLine-2.jpg",
    "./Files/FixedLine-3.jpg",
    "./Files/FixedLine-4.jpg",
    "./Files/FixedLine-5.jpg",
    "./Files/FixedLine-6.jpg",
    "./Files/FixedLine-7.jpg",
    "./Files/FixedLine-8.jpg",
    "./Files/FixedLine-9.jpg",
    "./Files/FMC Cancelation-1.jpg",
    "./Files/Foreigners-1.jpg",
    "./Files/Foreigners-2.jpg",
    "./Files/Foreigners-3.jpg",
    "./Files/Indigo-0.jpg",
    "./Files/Indigo-1.jpg",
    "./Files/Indigo-10.jpg",
    "./Files/Indigo-11.jpg",
    "./Files/Indigo-12.jpg",
    "./Files/Indigo-13.jpg",
    "./Files/Indigo-14.jpg",
    "./Files/Indigo-15.jpg",
    "./Files/Indigo-16.jpg",
    "./Files/Indigo-17.jpg",
    "./Files/Indigo-2.jpg",
    "./Files/Indigo-3.jpg",
    "./Files/Indigo-4.jpg",
    "./Files/Indigo-5.jpg",
    "./Files/Indigo-6.jpg",
    "./Files/Indigo-7.jpg",
    "./Files/Indigo-8.jpg",
    "./Files/Indigo-9.jpg",
    "./Files/Kix Revamp FAQss_page-00001.jpg",
    "./Files/Kix Revamp FAQss_page-00002.jpg",
    "./Files/Kix Revamp FAQss_page-0001.jpg",
    "./Files/Kix Revamp FAQss_page-0002.jpg",
    "./Files/Kix Revamp FAQss_page-0003.jpg",
    "./Files/Kix Revamp FAQss_page-0004.jpg",
    "./Files/Kix Revamp FAQss_page-0005.jpg",
    "./Files/Kix Revamp FAQss_page-0006.jpg",
    "./Files/Kix-1.jpg",
    "./Files/Kix-2.jpg",
    "./Files/Kix-3.jpg",
    "./Files/Kix-4.jpg",
    "./Files/Kix-5.jpg",
    "./Files/kix-update.jpg",
    "./Files/MissionAndVision-1.png",
    "./Files/Nitro-01.jpg",
    "./Files/Nitro-1.jpg",
    "./Files/Nitro-2.jpg",
    "./Files/Nitro-3.jpg",
    "./Files/NTRA-1.jpg",
    "./Files/OurManagement-1.png",
    "./Files/Promotions-2.jpg",
    "./Files/Promotions-3.jpg",
    "./Files/Promotions-4.jpg",
    "./Files/Promotions-5.jpg",
    "./Files/Promotions-6.jpg",
    "./Files/Promotions-7.jpg",
    "./Files/RetailStandards-1.jpg",
    "./Files/RetailStandards-2.jpg",
    "./Files/Sales Uniform 2023 - final-1.jpg",
    "./Files/Sales Uniform 2023 - final-2.jpg",
    "./Files/Sales Uniform 2023 - final-3.jpg",
    "./Files/Sales Uniform 2023 - final-4.jpg",
    "./Files/Sales Uniform 2023 - final-5.jpg",
    "./Files/SalesSkills-1.jpg",
    "./Files/SalesSkills-2.jpg",
    "./Files/SalesSkills-3.jpg",
    "./Files/SalesSkills-4.jpg",
    "./Files/SalesSkills-5.jpg",
    "./Files/SalesSkills-6.jpg",
    "./Files/SalesSkills-7.jpg",
    "./Files/SalesSkills-8.jpg",
    "./Files/SuperKix.jpg",
    "./Files/Tazbeet-1.jpg",
    "./Files/Tazbeet-2.jpg",
    "./Files/Tazbeet-3.jpg",
    "./Files/Tazbeet-4.jpg",
    "./Files/tazbeet-update.jpg",
    "./Files/TNPS-1.jpg",
    "./Files/TNPS-2.jpg",
    "./Files/TNPS-3.jpg",
    "./Files/TNPS-4.jpg",
    "./Files/TNPS-5.jpg",
    "./Files/TNPS-6.jpg",
    "./Files/TNPS-7.jpg",
    "./Files/USSD-1.jpg",
    "./Files/USSD-2.jpg",
    "./Files/USSD-3.jpg",
    "./Files/Video-1.jpg",
    "./Files/We Air-1.jpg",
    "./Files/We Club-1.jpg",
    "./Files/We Club-2.jpg",
    "./Files/We Club-3.jpg",
    "./Files/WE Dress Code-1.jpg",
    "./Files/WE Dress Code-2.jpg",
    "./Files/WE Dress Code-3.jpg",
    "./Files/WE Dress Code-4.jpg",
    "./Files/WE Dress Code-5.jpg",
    "./Files/WE Dress Code-6.jpg",
    "./Files/WE Dress Code-7.jpg",
    "./Files/WE Gold (1).jpg",
    "./Files/WE Gold (10).jpg",
    "./Files/WE Gold (11).jpg",
    "./Files/WE Gold (12).jpg",
    "./Files/WE Gold (13).jpg",
    "./Files/WE Gold (14).jpg",
    "./Files/WE Gold (15).jpg",
    "./Files/WE Gold (16).jpg",
    "./Files/WE Gold (17).jpg",
    "./Files/WE Gold (18).jpg",
    "./Files/WE Gold (19).jpg",
    "./Files/WE Gold (2).jpg",
    "./Files/WE Gold (20).jpg",
    "./Files/WE Gold (21).jpg",
    "./Files/WE Gold (22).jpg",
    "./Files/WE Gold (23).jpg",
    "./Files/WE Gold (24).jpg",
    "./Files/WE Gold (25).jpg",
    "./Files/WE Gold (26).jpg",
    "./Files/WE Gold (27).jpg",
    "./Files/WE Gold (3).jpg",
    "./Files/WE Gold (4).jpg",
    "./Files/WE Gold (5).jpg",
    "./Files/WE Gold (6).jpg",
    "./Files/WE Gold (7).jpg",
    "./Files/WE Gold (8).jpg",
    "./Files/WE Gold (9).jpg",
    "./Files/We Mix-1.jpg",
    "./Files/We Mix-2.jpg",
    "./Files/We Mix-3.jpg",
    "./Files/We Mix-4.jpg",
    "./Files/We Mix-5.jpg",
    "./Files/We Mix-6.jpg",
    "./Files/We Mix-7.jpg",
    "./Files/We Mix-8.jpg",
    "./Files/We Pay (1).jpg",
    "./Files/We Pay (10).jpg",
    "./Files/We Pay (11).jpg",
    "./Files/We Pay (12).jpg",
    "./Files/We Pay (13).jpg",
    "./Files/We Pay (14).jpg",
    "./Files/We Pay (15).jpg",
    "./Files/We Pay (16).jpg",
    "./Files/We Pay (17).jpg",
    "./Files/We Pay (18).jpg",
    "./Files/We Pay (19).jpg",
    "./Files/We Pay (2).jpg",
    "./Files/We Pay (20).jpg",
    "./Files/We Pay (21).jpg",
    "./Files/We Pay (22).jpg",
    "./Files/We Pay (23).jpg",
    "./Files/We Pay (24).jpg",
    "./Files/We Pay (25).jpg",
    "./Files/We Pay (26).jpg",
    "./Files/We Pay (27).jpg",
    "./Files/We Pay (28).jpg",
    "./Files/We Pay (29).jpg",
    "./Files/We Pay (3).jpg",
    "./Files/We Pay (30).jpg",
    "./Files/We Pay (31).jpg",
    "./Files/We Pay (32).jpg",
    "./Files/We Pay (33).jpg",
    "./Files/We Pay (34).jpg",
    "./Files/We Pay (35).jpg",
    "./Files/We Pay (36).jpg",
    "./Files/We Pay (37).jpg",
    "./Files/We Pay (38).jpg",
    "./Files/We Pay (39).jpg",
    "./Files/We Pay (4).jpg",
    "./Files/We Pay (40).jpg",
    "./Files/We Pay (41).jpg",
    "./Files/We Pay (42).jpg",
    "./Files/We Pay (43).jpg",
    "./Files/We Pay (44).jpg",
    "./Files/We Pay (45).jpg",
    "./Files/We Pay (46).jpg",
    "./Files/We Pay (47).jpg",
    "./Files/We Pay (48).jpg",
    "./Files/We Pay (49).jpg",
    "./Files/We Pay (5).jpg",
    "./Files/We Pay (50).jpg",
    "./Files/We Pay (51).jpg",
    "./Files/We Pay (52).jpg",
    "./Files/We Pay (53).jpg",
    "./Files/We Pay (54).jpg",
    "./Files/We Pay (55).jpg",
    "./Files/We Pay (56).jpg",
    "./Files/We Pay (57).jpg",
    "./Files/We Pay (58).jpg",
    "./Files/We Pay (59).jpg",
    "./Files/We Pay (6).jpg",
    "./Files/We Pay (60).jpg",
    "./Files/We Pay (61).jpg",
    "./Files/We Pay (62).jpg",
    "./Files/We Pay (63).jpg",
    "./Files/We Pay (64).jpg",
    "./Files/We Pay (65).jpg",
    "./Files/We Pay (7).jpg",
    "./Files/We Pay (8).jpg",
    "./Files/We Pay (9).jpg",
    "./Files/weclub-update.jpg",
    "./Files/wemix-update.jpg",
    "./Files/X and X Plus-1.jpg",
    "./Files/X and X Plus-2.jpg",
    "./Files/تحديثات الأسعار 2024_page-0001.jpg",
    "./Files/تحديثات الأسعار 2024_page-0002.jpg",
    "./Files/تحديثات الأسعار 2024_page-0003.jpg",
    "./Files/تحديثات الأسعار 2024_page-0004.jpg",
    "./Files/تحديثات الأسعار 2024_page-0005.jpg",
    "./Files/تحديثات الأسعار 2024_page-0006.jpg",
    "./Files/تحديثات الأسعار 2024_page-0007.jpg",
    "./Files/تحديثات الأسعار 2024_page-0008.jpg",
    "./Files/تحديثات الأسعار 2024_page-0009.jpg",
    "./Files/تحديثات الأسعار 2024_page-0010.jpg",
    "./Files/تحديثات الأسعار 2024_page-0011.jpg",
    "./Files/تحديثات الأسعار 2024_page-0012.jpg",
    "./Fonts/fontawesome-webfont.ttf",
    "./Fonts/fontawesome-webfont.woff",
    "./Fonts/fontawesome-webfont.woff2",
    "./Forms/E-mail Accounts Application Form.pdf",
    "./Forms/Service Subscription Contract English.pdf",
    "./Forms/استمارة حجز الخط الارضي.pdf",
    "./Forms/استمارة عدم حيازة خط محمول.pdf",
    "./Forms/استمارة نقل ملكية خط محمول.pdf",
    "./Forms/اقرار - 12 شهر.pdf",
    "./Forms/اقرار إستلام جهاز.pdf",
    "./Forms/اقرار الرقم المميز لخط انديجو.pdf",
    "./Forms/ايصال استلام نقديه.pdf",
    "./Forms/شهادة إلى من يهمه الامر.pdf",
    "./Forms/طلب استبدال الشريحة.pdf",
    "./Forms/طلب اعاده تشغيل او تركيب.pdf",
    "./Forms/طلب الاستغناء عن خط ارضي.pdf",
    "./Forms/طلب التقديم علي خط ارضي.pdf",
    "./Forms/طلب التنازل عن خط ارضي.pdf",
    "./Forms/طلب الخواص والخدمات.pdf",
    "./Forms/طلب الغاء الانترنت الارضي.pdf",
    "./Forms/طلب الغاء المحفظه.pdf",
    "./Forms/طلب الغاء خط انديجو.pdf",
    "./Forms/طلب الغاء خط كارت.pdf",
    "./Forms/طلب الغاء نقل خط المحمول من مشغل خدمة اخر.pdf",
    "./Forms/طلب ايقاف مؤقت لخط فاتوره.pdf",
    "./Forms/طلب تحويل خدمة الانترنت الارضي من شركة اورانج.pdf",
    "./Forms/طلب تعديل رقم التواصل للانترنت الارضي.pdf",
    "./Forms/طلب تقسيط الفواتير واعاده جدوله الاقساط.pdf",
    "./Forms/طلب حضور العميل.pdf",
    "./Forms/طلب نقل الخط الارضي.pdf",
    "./Forms/طلب نقل خط المحمول من مشغل خدمة اخر.pdf",
    "./Forms/طلبات دمج انديجو بلس.pdf",
    "./Forms/عقد تقديم خدمة المكالمات التسويقية.pdf",
];
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Opened cache");
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(cacheNames.filter((cacheName) => cacheName !== CACHE_NAME).map((cacheName) => caches.delete(cacheName)));
        })
    );
    self.clients.claim();
});
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches
            .match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match("./404.html");
            })
    );
});
