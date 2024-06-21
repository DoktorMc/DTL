!function(){"use strict";let e="ua";const t=document.querySelectorAll("[data-btn]"),n=Object.assign({header_title:{ua:'ТОВ "Дунай Транс Лайн',en:'"Dunay Trans Line" LLC',ru:'ООО "Дунай Транс Лайн"'},header_text:{ua:"Ми прагнемо сприяти безперебійному переміщенню ключових товарів, необхідних для глобальної торгівлі та регіонального розвитку. Розташована в стратегічно важливому порту Рені, Україна, наша компанія спеціалізується на ефективній перевалці зерна, а також можливостях завантаження суден добривами, металами та олією.",en:"We strive to facilitate the seamless movement of key goods essential for global trade and regional development. Located in the strategically important port of Reni, Ukraine, our company specializes in the efficient transshipment of grain, as well as the capability to load vessels with fertilizers, metals, and oil.",ru:"Мы стремимся содействовать бесперебойному перемещению ключевых товаров, необходимых для глобальной торговли и регионального развития. Расположенная в стратегически важном порту Рени, Украина наша компания специализируется на эффективной перевалке зерна, а также возможностях загрузки судов удобрениями, металлами и маслом."}},{services_title:{ua:"Наші послуги",en:"Our Services",ru:"Наши услуги"},transshipment_title:{ua:"Портова перевалка",en:"Port Transshipment",ru:"Портовая перевалка"},transshipment_text:{ua:"Швидке та безпечне розвантаження і завантаження різноманітних типів вантажів.",en:"Fast and safe unloading and loading of various types of cargo.",ru:"Быстрая и безопасная разгрузка и погрузка различных типов грузов."},parking_title:{ua:"Паркувальний майданчик",en:"Parking Area",ru:"Парковочная площадка"},parking_text:{ua:"Паркувальний майданчик для вантажних машин в межах міста Рені.",en:"Parking area for trucks within the city of Reni.",ru:"Парковочная площадка для грузовиков в пределах города Рени."},agency_title:{ua:"Судове агентування",en:"Ship Agency",ru:"Судовое агентирование"},agency_text:{ua:"Швартування, обробка суден, митні та адміністративні формальності.",en:"Mooring, handling of ships, customs and administrative formalities.",ru:"Швартовка, обработка судов, таможенные и административные формальности."},chartering_title:{ua:"Фрахтування суден",en:"Ship Chartering",ru:"Фрахтование судов"},chartering_text:{ua:"Пошук та фрактування барж та морських суден, укладення фрактових договорів.",en:"Searching and chartering of barges and sea vessels, signing of charter contracts.",ru:"Поиск и фрахтование барж и морских судов, заключение фрахтовых договоров."},services_detail1:{ua:"Докладно ->",en:"Details ->",ru:"Подробно ->"},services_detail2:{ua:"Докладно ->",en:"Details ->",ru:"Подробно ->"},services_detail3:{ua:"Докладно ->",en:"Details ->",ru:"Подробно ->"},services_detail4:{ua:"Докладно ->",en:"Details ->",ru:"Подробно ->"}},{about_header:{ua:"Про компанію",en:"About the Company",ru:"О компании"},about_text_1:{ua:"Ласкаво просимо на сайт нашої компанії, яка спеціалізується на перевалці зерна в порту Рені, Україна. Ми – молода та амбітна команда професіоналів, яка прагне зробити свій внесок у розвиток аграрного сектора країни, забезпечуючи високу якість обслуговування та надійність наших послуг.",en:"Welcome to the website of our company, which specializes in grain transshipment in the port of Reni, Ukraine. We are a young and ambitious team of professionals who strive to contribute to the development of the country's agricultural sector by ensuring high quality service and reliability of our services.",ru:"Добро пожаловать на сайт нашей компании, которая специализируется на перевалке зерна в порту Рени, Украина. Мы – молодая и амбициозная команда профессионалов, которая стремится внести свой вклад в развитие аграрного сектора страны, обеспечивая высокое качество обслуживания и надежность наших услуг."},mission_title:{ua:"Наша місія",en:"Our Mission",ru:"Наша миссия"},mission_text:{ua:"Ми працюємо, щоб створити ефективний та безпечний логістичний ланцюг для аграрного бізнесу.",en:"We work to create an efficient and safe logistics chain for the agricultural business.",ru:"Мы работаем, чтобы создать эффективную и безопасную логистическую цепочку для аграрного бизнеса."},goal_title:{ua:"Наша мета",en:"Our Goal",ru:"Наша цель"},goal_text:{ua:"Забезпечити стабільний і безперебійний процес перевалки зерна, що дозволить нашим клієнтам зосередитися на основних бізнес-процесах, довіривши нам всю логістику.",en:"To ensure a stable and uninterrupted grain transshipment process, allowing our clients to focus on their core business processes by entrusting all logistics to us.",ru:"Обеспечить стабильный и бесперебойный процесс перевалки зерна, что позволит нашим клиентам сосредоточиться на основных бизнес-процессах, доверив нам всю логистику."}},{details_title:{ua:"Докладно",en:"Details",ru:"Подробно"},transshipment_ttl:{ua:"Портова перевалка",en:"Port Transshipment",ru:"Портовая перевалка"},transshipment_main:{ua:"Обробка та переміщення зернових вантажів через портову інфраструктуру порту Рені з метою їх подальшого транспортування.",en:"Processing and movement of grain cargoes through the port infrastructure of the port of Reni for further transportation.",ru:"Обработка и перемещение зерновых грузов через портовую инфраструктуру порта Рени с целью их последующей транспортировки."},transshipment_text1:{ua:"Прийом зерна: Зерно надходить до порту залізничним, автомобільним транспортом або баржами.",en:"Grain reception: Grain arrives at the port by rail, road transport, or barges.",ru:"Прием зерна: Зерно поступает в порт железнодорожным, автомобильным транспортом или баржами."},transshipment_text2:{ua:"Вивантаження: Зерно вивантажують з транспортних засобів за допомогою спеціальних механізмів, таких як стрічкові транспортери або перевантажувальні машини.",en:"Unloading: Grain is unloaded from transport vehicles using special mechanisms such as conveyor belts or loading machines.",ru:"Выгрузка: Зерно выгружают с транспортных средств с помощью специальных механизмов, таких как конвейеры или погрузочные машины."},transshipment_text3:{ua:"Зберігання: Зерно тимчасово зберігається в силосах або спеціальних складах. Це важливий етап, оскільки зерно повинне зберігатися в належних умовах, щоб запобігти його псуванню.",en:"Storage: Grain is temporarily stored in silos or special warehouses. This is an important stage, as grain must be stored under proper conditions to prevent spoilage.",ru:"Хранение: Зерно временно хранится в силосах или специальных складах. Это важный этап, поскольку зерно должно храниться в должных условиях, чтобы предотвратить его порчу."},transshipment_text4:{ua:"Перевірка якості: Зерно перевіряють на якість і відповідність стандартам. Це включає аналіз вологості, наявність домішок, і визначення інших параметрів якості.",en:"Quality inspection: Grain is checked for quality and compliance with standards. This includes moisture analysis, impurity presence, and determination of other quality parameters.",ru:"Проверка качества: Зерно проверяется на качество и соответствие стандартам. Это включает анализ влажности, наличие примесей и определение других параметров качества."},transshipment_text5:{ua:"Завантаження на судна: Зерно завантажують на судна для подальшого транспортування. Для цього використовують спеціальні навантажувальні механізми, такі як крани, стрічкові транспортери або вакуумні завантажувачі.",en:"Loading onto vessels: Grain is loaded onto vessels for further transportation. Special loading mechanisms such as cranes, conveyor belts, or vacuum loaders are used for this purpose.",ru:"Загрузка на суда: Зерно загружают на суда для последующей транспортировки. Для этого используются специальные погрузочные механизмы, такие как краны, конвейеры или вакуумные погрузчики."},transshipment_text6:{ua:"Документальне оформлення: Під час перевалки здійснюється відповідне документальне оформлення вантажу, включаючи митні процедури та інші необхідні папери.",en:"Documentation: Proper documentation of the cargo is carried out during transshipment, including customs procedures and other necessary paperwork.",ru:"Документальное оформление: Во время перевалки осуществляется соответствующее документальное оформление груза, включая таможенные процедуры и другие необходимые бумаги."},transshipment_footer:{ua:"Перевалка зерна у порту є важливою складовою логістичного ланцюга, яка забезпечує ефективне переміщення зернових культур з місць виробництва до кінцевих споживачів, включаючи міжнародні ринки.",en:"Grain transshipment at the port is an important component of the logistics chain, which ensures the efficient movement of grain crops from production sites to end consumers, including international markets.",ru:"Перевалка зерна в порту является важным компонентом логистической цепи, обеспечивающей эффективное перемещение зерновых культур с мест производства до конечных потребителей, включая международные рынки."},parking_ttl:{ua:"Паркувальний майданчик",en:"Parking Lot",ru:"Парковочная площадка"},parking_main:{ua:"Пропонуємо високоякісні послуги стоянки-накопичувача для вантажних автомобілів в межах міста Рені. Наша стоянка ідеально розташована, що забезпечує зручний доступ до центру міста та основних транспортних маршрутів. Нижче наведено детальний опис послуг, які ми надаємо.",en:"We offer high-quality parking lot services for trucks within the city of Reni. Our parking lot is ideally located, providing convenient access to the city center and main transport routes. Below is a detailed description of the services we provide.",ru:"Мы предлагаем высококачественные услуги стоянки-накопителя для грузовых автомобилей в пределах города Рени. Наша стоянка идеально расположена, что обеспечивает удобный доступ к центру города и основным транспортным маршрутам. Ниже приведено детальное описание предоставляемых нами услуг."},parking_text1:{ua:"Розташування: наша стоянка-накопичувач знаходиться всього за 15 хвилин їзди від центру міста Рені. Це дозволяє швидко та зручно дістатися до всіх необхідних міських інфраструктур та сервісів. Зручне розташування також спрощує логістику та забезпечує оперативну подачу авто до порту.",en:"Location: Our parking lot is only 15 minutes away from the city center of Reni. This allows for quick and convenient access to all necessary urban infrastructure and services. The convenient location also simplifies logistics and ensures prompt vehicle delivery to the port.",ru:"Расположение: наша стоянка-накопитель находится всего в 15 минутах езды от центра города Рени. Это позволяет быстро и удобно добраться до всей необходимой городской инфраструктуры и сервисов. Удобное расположение также упрощает логистику и обеспечивает оперативную подачу авто к порту."},parking_text2:{ua:"Безпека та захист: ми розуміємо, наскільки важлива безпека вашого вантажу. Тому наша стоянка знаходиться на закритій території, обладнаній сучасною системою відеоспостереження. Вся територія перебуває під постійною охороною, що гарантує максимальний рівень захисту ваших транспортних засобів.",en:"Safety and security: We understand how important the safety of your cargo is. Therefore, our parking lot is located in a closed area equipped with a modern video surveillance system. The entire area is under constant security, ensuring maximum protection for your vehicles.",ru:"Безопасность и защита: мы понимаем, насколько важна безопасность вашего груза. Поэтому наша стоянка находится на закрытой территории, оснащенной современной системой видеонаблюдения. Вся территория находится под постоянной охраной, что гарантирует максимальный уровень защиты ваших транспортных средств."},parking_text3:{ua:"Зручності для водіїв: Ми дбаємо про комфорт та добробут водіїв, тому на території стоянки доступні різноманітні зручності:",en:"Driver conveniences: We care about the comfort and well-being of drivers, so the parking area offers various amenities:",ru:"Удобства для водителей: Мы заботимся о комфорте и благополучии водителей, поэтому на территории стоянки доступны различные удобства:"},parking_text3_subtext1:{ua:"Душ: Сучасні душові кабіни, де водії можуть освіжитися після тривалої дороги.",en:"Shower: Modern shower cabins where drivers can refresh themselves after a long journey.",ru:"Душ: Современные душевые кабины, где водители могут освежиться после долгой дороги."},parking_text3_subtext2:{ua:"Магазин: Невеликий магазин, де можна придбати необхідні товари.",en:"Store: A small shop where you can buy necessary items.",ru:"Магазин: Небольшой магазин, где можно приобрести необходимые товары."},parking_text3_subtext3:{ua:"Харчування: Кафе та їдальня, де завжди доступна свіжа та смачна їжа.",en:"Dining: A cafe and canteen where fresh and delicious food is always available.",ru:"Питание: Кафе и столовая, где всегда доступна свежая и вкусная еда."},parking_text3_subtext4:{ua:"Готель: Комфортні номери для відпочинку водіїв.",en:"Hotel: Comfortable rooms for driver rest.",ru:"Отель: Комфортные номера для отдыха водителей."},parking_text3_subtext5:{ua:"АЗС: Заправка знаходиться поруч, що дозволяє швидко заправити автомобіль перед подальшим маршрутом.",en:"Gas station: Located nearby, allowing you to quickly refuel your vehicle before continuing your journey.",ru:"АЗС: Заправка находится рядом, что позволяет быстро заправить автомобиль перед дальнейшим маршрутом."},parking_text4:{ua:"Додаткові послуги: Для забезпечення максимального комфорту та ефективності роботи, ми також надаємо наступні послуги:",en:"Additional services: To ensure maximum comfort and efficiency, we also provide the following services:",ru:"Дополнительные услуги: Для обеспечения максимального комфорта и эффективности работы мы также предоставляем следующие услуги:"},parking_text4_subtext1:{ua:"Реєстрація: Оформлення всіх необхідних документів для вашого вантажу та транспортного засобу.",en:"Registration: Handling all necessary documents for your cargo and vehicle.",ru:"Регистрация: Оформление всех необходимых документов для вашего груза и транспортного средства."},parking_text4_subtext2:{ua:"Зважування: Послуги зважування вантажних авто, що допомагає дотримуватися норм вагових обмежень.",en:"Weighing: Truck weighing services that help comply with weight restrictions.",ru:"Взвешивание: Услуги взвешивания грузовых автомобилей, что помогает соблюдать нормы весовых ограничений."},parking_text4_subtext3:{ua:"Диспетчеризація: Кваліфіковані диспетчери, які допоможуть з організацією та координацією перевезень.",en:"Dispatch: Qualified dispatchers to assist with the organization and coordination of transport.",ru:"Диспетчеризация: Квалифицированные диспетчеры, которые помогут с организацией и координацией перевозок."},agency_ttl:{ua:"Судове агентування",en:"Ship Agency Services",ru:"Судовое агентирование"},agency_main:{ua:"Наші послуги з судового агентування забезпечують комплексне та професійне обслуговування суден у портах. Ми пропонуємо широкий спектр послуг, щоб забезпечити ефективність і безпеку ваших морських операцій.",en:"Our ship agency services provide comprehensive and professional vessel support in ports. We offer a wide range of services to ensure the efficiency and safety of your maritime operations.",ru:"Наши услуги по судовому агентированию обеспечивают комплексное и профессиональное обслуживание судов в портах. Мы предлагаем широкий спектр услуг, чтобы обеспечить эффективность и безопасность ваших морских операций."},agency_text1:{ua:"Організація Забезпечення Судна в Порту: Ми координуємо постачання всіх необхідних матеріалів та ресурсів, включаючи паливо, провіант, запчастини та інші товари, необхідні для безперервної роботи судна.",en:"Vessel Provisioning: We coordinate the supply of all necessary materials and resources, including fuel, provisions, spare parts, and other goods required for the continuous operation of the vessel.",ru:"Организация Обеспечения Судна в Порту: Мы координируем поставку всех необходимых материалов и ресурсов, включая топливо, провиант, запчасти и другие товары, необходимые для бесперебойной работы судна."},agency_text2:{ua:"Організація Стоянки, Прибуття та Відходу Судна: Забезпечуємо всі аспекти організації стоянки судна в порту, його прибуття та відходу, включаючи взаємодію з портовою адміністрацією та іншими зацікавленими сторонами.",en:"Berthing, Arrival, and Departure Organization: We ensure all aspects of vessel berthing, arrival, and departure organization, including interaction with port administration and other stakeholders.",ru:"Организация Стоянки, Прибытия и Отхода Судна: Обеспечиваем все аспекты организации стоянки судна в порту, его прибытия и отхода, включая взаимодействие с портовой администрацией и другими заинтересованными сторонами."},agency_text3:{ua:"Допомога в Проходженні Формальностей для Екіпажу: Надаємо підтримку екіпажу в проходженні всіх необхідних формальностей, включаючи імміграційні та митні процедури, медичні огляди та інші вимоги.",en:"Crew Formalities Assistance: We support the crew in completing all necessary formalities, including immigration and customs procedures, medical examinations, and other requirements.",ru:"Помощь в Прохождении Формальностей для Экипажа: Обеспечиваем поддержку экипажа в прохождении всех необходимых формальностей, включая иммиграционные и таможенные процедуры, медицинские осмотры и другие требования."},agency_text4:{ua:"Виконання Інших Послуг по Обслуговуванню Судна: Забезпечуємо широкий спектр додаткових послуг, таких як організація ремонтів, технічного обслуговування, зміни екіпажу, медична допомога та інші послуги.",en:"Additional Vessel Servicing: We provide a wide range of additional services, such as repair organization, technical maintenance, crew changes, medical assistance, and other services.",ru:"Выполнение Других Услуг по Обслуживанию Судна: Обеспечиваем широкий спектр дополнительных услуг, таких как организация ремонтов, техническое обслуживание, смена экипажа, медицинская помощь и другие услуги."},agency_exp_title:{ua:"Експедирування Вантажів",en:"Cargo Forwarding",ru:"Экспедирование Грузов"},agency_exp_main:{ua:"Наші експедиторські послуги забезпечують ефективне управління вантажами в порту, оптимізуючи логістичні процеси та забезпечуючи своєчасну доставку вантажів.",en:"Our forwarding services provide efficient cargo management in the port, optimizing logistical processes and ensuring timely delivery of goods.",ru:"Наши экспедиторские услуги обеспечивают эффективное управление грузами в порту, оптимизируя логистические процессы и обеспечивая своевременную доставку грузов."},agency_exp_text1:{ua:"Оформлення Согласувань та Митних Документів: Ми забезпечуємо швидке та точне оформлення всіх необхідних документів для імпорту та експорту вантажів, включаючи митні декларації, сертифікати та інші дозволи.",en:"Arrangement of Agreements and Customs Documents: We ensure fast and accurate processing of all necessary documents for the import and export of goods, including customs declarations, certificates, and other permits.",ru:"Оформление Соглашений и Таможенных Документов: Обеспечиваем быстрое и точное оформление всех необходимых документов для импорта и экспорта грузов, включая таможенные декларации, сертификаты и другие разрешения."},agency_exp_text2:{ua:"Експедирування Вантажу Внутрі Порту: Координуємо всі етапи обробки вантажу всередині порту, включаючи розвантаження, складування, переробку та завантаження на транспортні засоби.",en:"Intra-port Cargo Forwarding: We coordinate all stages of cargo handling within the port, including unloading, storage, processing, and loading onto transportation vehicles.",ru:"Экспедирование Груза Внутри Порта: Координируем все этапы обработки груза внутри порта, включая разгрузку, хранение, переработку и погрузку на транспортные средства."},agency_exp_text3:{ua:"Вибір Найбільш Оптимального Маршруту: Ми аналізуємо всі можливі маршрути для перевезення вантажів, щоб забезпечити найбільш ефективний та економічний варіант доставки, враховуючи всі можливі ризики та вимоги клієнта.",en:"Selection of the Most Optimal Route: We analyze all possible routes for cargo transportation to ensure the most efficient and economical delivery option, considering all possible risks and client requirements.",ru:"Выбор Самого Оптимального Маршрута: Анализируем все возможные маршруты для перевозки грузов, чтобы обеспечить наиболее эффективный и экономичный вариант доставки, учитывая все возможные риски и требования клиента."},agency_footer:{ua:"Судове агентування та експедирування вантажів є надійним та ефективним обслуговуванням ваших морських операцій. Ми гарантуємо високий рівень професіоналізму та увагу до кожної деталі.",en:"Ship agency and cargo forwarding are reliable and efficient services for your maritime operations. We guarantee a high level of professionalism and attention to every detail.",ru:"Судовое агентирование и экспедирование грузов являются надежным и эффективным обслуживанием ваших морских операций. Мы гарантируем высокий уровень профессионализма и внимание к каждой детали."},chartering_ttl:{ua:"Фрахтування суден",en:"Vessel Chartering",ru:"Аренда судов"},chartering_main:{ua:"Наша компанія пропонує послуги фрахтування суден, допомагаючи вам орендувати судна для перевезення вантажів або пасажирів. Ми організовуємо весь процес, включаючи пошук судна, переговори умов та складання контракту, забезпечуючи найкращі умови для ваших потреб.",en:"Our company offers vessel chartering services, helping you rent ships for cargo or passenger transport. We organize the entire process, including vessel search, terms negotiation, and contract drafting, ensuring the best conditions for your needs.",ru:"Наша компания предлагает услуги аренды судов, помогая вам арендовать судна для перевозки грузов или пассажиров. Мы организуем весь процесс, включая поиск судна, переговоры условий и заключение контракта, обеспечивая лучшие условия для ваших потреб."},chartering_text1:{ua:"Прийом зерна: Зерно надходить до порту залізничним, автомобільним транспортом або баржами.",en:"Grain reception: Grain arrives at the port by rail, road, or barges.",ru:"Прием зерна: Зерно поступает в порт железнодорожным, автомобильным транспортом или баржами."},chartering_text2:{ua:"Пошук барж і морських суден: Ми здійснюємо пошук барж і морських суден, що відповідають вашим вимогам до вантажопідйомності та типу вантажу. Використовуючи широку мережу агентів і брокерів, ми знаходимо судна, які максимально відповідають вашим потребам і забезпечують надійність перевезень.",en:"Search for barges and vessels: We search for barges and vessels that meet your requirements for cargo capacity and cargo type. Using a wide network of agents and brokers, we find vessels that best suit your needs and ensure reliable transportation.",ru:"Поиск барж и морских судов: Мы осуществляем поиск барж и морских судов, соответствующих вашим требованиям к грузоподъемности и типу груза. Используя широкую сеть агентов и брокеров, мы находим суда, которые максимально соответствуют вашим потребностям и обеспечиваем надежность перевозок."},chartering_text3:{ua:"Фрахт судна на один рейс: Наша компанія пропонує фрахт судна на один рейс, забезпечуючи оренду судна для конкретного перевезення вантажу або пасажирів. Ми організовуємо всі етапи: від завантаження до доставки в пункт призначення, забезпечуючи чітке дотримання умов договору.",en:"Vessel charter for a single voyage: Our company offers vessel charter for a single voyage, providing vessel rental for specific cargo or passenger transport. We organize all stages: from loading to delivery to the destination, ensuring strict compliance with the contract terms.",ru:"Фрахт судна на один рейс: Наша компания предлагает фрахт судна на один рейс, обеспечивая аренду судна для конкретной перевозки груза или пассажиров. Мы организуем все этапы: от загрузки до доставки в пункт назначения, обеспечивая четкое соблюдение условий договора."},chartering_text4:{ua:"Фрахт судна на кілька послідовних рейсів: Для клієнтів з постійними потребами у перевезеннях ми надаємо послуги фрахту суден на кілька послідовних рейсів. Це дозволяє оптимізувати логістику та зменшити витрати, забезпечуючи регулярні перевезення товарів протягом тривалого періоду.",en:"Vessel charter for multiple consecutive voyages: For clients with regular transportation needs, we provide vessel charter services for multiple consecutive voyages. This allows optimizing logistics and reducing costs, ensuring regular transportation of goods over an extended period.",ru:"Фрахт судна на несколько последовательных рейсов: Для клиентов с постоянными потребностями в перевозках мы предоставляем услуги аренды судов на несколько последовательных рейсов. Это позволяет оптимизировать логистику и снизить затраты, обеспечивая регулярные перевозки товаров в течение продолжительного периода."},chartering_text5:{ua:"Складання фрахтового контракту: Ми займаємося складанням фрахтових контрактів, що включають всі необхідні деталі угоди між судновласником і фрахтувальником. Наші фахівці забезпечують чітке і прозоре оформлення документів, що допомагає уникнути непорозумінь та суперечок.",en:"Vessel charter contract drafting: We handle the drafting of charter contracts, including all necessary details of the agreement between the shipowner and the charterer. Our experts ensure clear and transparent document preparation, helping to avoid misunderstandings and disputes.",ru:"Составление фрахтового контракта: Мы занимаемся составлением фрахтовых контрактов, включающих все необходимые детали соглашения между судновладельцем и фрахтовщиком. Наши специалисты обеспечивают четкое и прозрачное оформление документов, что помогает избежать недоразумений и споров."},chartering_text6:{ua:"Замовлення лоцмана: Ми пропонуємо послуги з замовлення лоцмана для безпечного проведення судна у складних навігаційних умовах. Наші лоцмани володіють глибокими знаннями місцевих вод і допоможуть забезпечити безпеку вашого судна, вантажу та екіпажу.",en:"Pilot ordering: We offer pilot ordering services for safe vessel passage in complex navigation conditions. Our pilots have deep knowledge of local waters and will help ensure the safety of your vessel, cargo, and crew.",ru:"Заказ лоцмана: Мы предлагаем услуги заказа лоцмана для безопасного проведения судна в сложных навигационных условиях. Наши лоцманы обладают глубокими знаниями местных вод и помогут обеспечить безопасность вашего судна, груза и экипажа."},chartering_text7:{ua:"Забезпечення лоцманської проводки: Наша компанія організовує повний процес лоцманської проводки, включаючи координацію з портовими службами та забезпечення всіх необхідних процедур для безпечного проходу судна. Ми гарантуємо професіоналізм і надійність на всіх етапах.",en:"Pilotage arrangements: Our company organizes the full pilotage process, including coordination with port services and ensuring all necessary procedures for safe vessel passage. We guarantee professionalism and reliability at all stages.",ru:"Обеспечение лоцманской проводки: Наша компания организует полный процесс лоцманской проводки, включая координацию с портовыми службами и обеспечение всех необходимых процедур для безопасного прохождения судна. Мы гарантируем профессионализм и надежность на всех этапах."},chartering_footer:{ua:"Ми надаємо комплексні послуги для забезпечення надійних і ефективних морських перевезень, допомагаючи вам успішно виконувати логістичні завдання та задовольняти потреби вашого бізнесу.",en:"We provide comprehensive services to ensure reliable and efficient maritime transportation, helping you successfully fulfill logistical tasks and meet the needs of your business.",ru:"Мы предоставляем комплексные услуги для обеспечения надежных и эффективных морских перевозок, помогая вам успешно выполнять логистические задачи и удовлетворять потребности вашего бизнеса."}},{footer_info1:{ua:"Контактна інформація:",en:"Contact Information:",ru:"Контактная информация:"},footer_info2:{ua:"м.Одеса, вул. Фонтанська дорога 58/1, квартира 318",en:"Odessa, Fontanska Doroha str. 58/1, apt. 318",ru:"г. Одесса, ул. Фонтанская дорога 58/1, квартира 318"},footer_rights:{ua:"всі права захищені",en:"all rights reserved",ru:"все права защищены"}},{contact_header:{ua:"Зв'язатись з нами",en:"Contact Us",ru:"Связаться с нами"},contact_description:{ua:"Заповніть форму і ми з вами зв'яжемось ->",en:"Fill out the form and we will contact you ->",ru:"Заполните форму и мы с вами свяжемся ->"},contact_name:{ua:"Ім'я та по батькові:",en:"Full Name:",ru:"Имя и отчество:"},contact_company:{ua:"Назва компанії:",en:"Company Name:",ru:"Название компании:"},contact_email:{ua:"E-mail:",en:"E-mail:",ru:"E-mail:"},contact_tel:{ua:"Телефон:",en:"Phone:",ru:"Телефон:"},contact_message:{ua:"Ваше повідомлення...",en:"Your message...",ru:"Ваше сообщение..."},"contact_contact-button":{ua:"Надіслати",en:"Send",ru:"Отправить"}});function r(){for(const t in n){const r=document.querySelector(`[data-lang=${t}]`);r&&(r.textContent=n[t][e])}}r(),t.forEach((n=>{n.addEventListener("click",(a=>{e=a.target.dataset.btn,t.forEach((e=>e.classList.remove("lang__active"))),n.classList.add("lang__active"),r()}))}));document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("form");function t(e){e.parentElement.classList.add("_error"),e.classList.add("_error")}function n(e){e.parentElement.classList.remove("_error"),e.classList.remove("_error")}function r(e){return!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(e.value)}function a(e){return!/^([А-ЯЇЄІҐA-Z][а-яїєіґa-z']+\s[А-ЯЇЄІҐA-Z][а-яїєіґa-z']+)$/.test(e.value)}function i(e){return!/^(\+?38)?\s?(\(?0\d{2}\)?)\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/.test(e.value)}function s(e){return!/^.{80,}$/.test(e.value)}e.addEventListener("submit",(async function(o){o.preventDefault();let c=function(e){let o=0,c=document.querySelectorAll("._req");for(let e=0;e<c.length;e++){const u=c[e];n(u),u.classList.contains("_email")?r(u)&&(t(u),o++):u.classList.contains("_name")?a(u)&&(t(u),o++):u.classList.contains("_phone")?i(u)&&(t(u),o++):u.classList.contains("_text")&&s(u)&&(t(u),o++)}return o}(),u=new FormData(e);if(console.log("DATA",u),0===c){e.classList.add("_sending");let t=await fetch("sendmail.php",{method:"POST",body:u});if(t.ok){let n=await t.json();alert(n.message),e.reset(),e.classList.remove("_sending")}else alert("Сталася помилка!"),e.classList.remove("_sending")}else alert("Заповніть всі обов'язкові поля")}))}())}();