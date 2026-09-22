/* ==========================================================
   HR Experts — shared site behaviour
   Bilingual (EN / MN) content dictionary + interactions
   ========================================================== */

const I18N = {
en: {
  "nav.home":"Home", "nav.about":"About", "nav.services":"Services",
  "nav.fw":"Foreign Workers", "nav.contact":"Contact Us", "nav.cta":"Request Staff",

  "home.hero.eyebrow":"Recruitment & Foreign Workforce Solutions",
  "home.hero.h1":"We connect Mongolian businesses with the people who move them forward.",
  "home.hero.lead":"Since 2017, HR Experts has recruited, screened and placed talent across Mongolia — including the full foreign-worker permit and visa process, managed from application to arrival.",
  "home.hero.cta1":"Request a Candidate",
  "home.hero.cta2":"Browse Open Roles",
  "home.stat1.n":"9+", "home.stat1.l":"Years in operation",
  "home.stat2.n":"1000+", "home.stat2.l":"Placements made",
  "home.stat3.n":"20+", "home.stat3.l":"Source countries",
  "home.stat4.n":"48h", "home.stat4.l":"Average first shortlist",

  "home.split.tag1":"For employers",
  "home.split.h1":"Hire faster, with less risk.",
  "home.split.p1":"Tell us the role — local or a foreign specialist you can't find at home. We source, screen and shortlist, and if it's a foreign hire, we run the permit and visa process alongside you.",
  "home.split.cta1":"Request staff",
  "home.split.tag2":"For candidates",
  "home.split.h2":"Find work in Mongolia, done properly.",
  "home.split.p2":"Browse current openings or register your CV. If you're relocating from abroad, our team manages your work permit and visa paperwork so you can focus on the move.",
  "home.split.cta2":"See open roles",

  "home.services.eyebrow":"What we do",
  "home.services.h2":"Five services, one accountable team",
  "home.services.p":"From a single hard-to-fill role to building out a foreign workforce from scratch.",
  "home.s1.h":"HR Consulting", "home.s1.p":"We help you design a more structured organisation — clearer roles, stronger culture, and processes that scale.",
  "home.s2.h":"Head Hunting", "home.s2.p":"A vetted network across Mongolia and Asia-Pacific for senior and hard-to-fill positions.",
  "home.s3.h":"Recruiting", "home.s3.p":"End-to-end hiring: sourcing, screening, interviews and offer — so you only meet qualified candidates.",
  "home.s4.h":"Staff Renting", "home.s4.p":"Access qualified staff on a labour-service contract, without the overhead of permanent hiring.",
  "home.s5.h":"Foreign Worker & Visa Placement", "home.s5.p":"We recruit foreign specialists and run their work-permit and visa process end to end.",
  "home.more":"Learn more",

  "home.why.eyebrow":"Why HR Experts",
  "home.why.h2":"Built around three guarantees",
  "home.why1.h":"Selection speed guarantee", "home.why1.p":"We search and select as fast as your role allows, so a qualified specialist starts as soon as possible.",
  "home.why2.h":"Replacement warranty", "home.why2.p":"If a placed employee doesn't work out during the trial period, we find a replacement promptly, at no extra cost.",
  "home.why3.h":"Individual evaluation", "home.why3.p":"Every candidate is assessed against your specific niche by consultants who work in that industry daily.",

  "home.industries.eyebrow":"Sectors we staff",
  "home.industries.h2":"Industries that trust us with hiring",
  "home.ind1":"Mining & Resources", "home.ind2":"Construction", "home.ind3":"Manufacturing",
  "home.ind4":"Hospitality & Tourism", "home.ind5":"Logistics", "home.ind6":"Retail & FMCG",
  "home.ind7":"IT & Technology", "home.ind8":"Finance & Professional Services",

  "home.process.eyebrow":"Foreign workforce",
  "home.process.h2":"Hiring from abroad, handled end to end",
  "home.process.p":"From needs assessment to arrival, we manage the permit and visa work so your new hire can focus on the job.",
  "home.process.cta":"See the full process",

  "home.cta.h2":"Ready to start?",
  "home.cta.p":"Tell us what you need — a single hire, a foreign specialist, or a full team — and we'll get back to you within one business day.",
  "home.cta.btn1":"Request staff", "home.cta.btn2":"Contact us",

  "about.crumb":"About",
  "about.h1":"About HR Experts",
  "about.lead":"A Mongolian recruitment agency built for local hiring and foreign workforce placement alike.",
  "about.story.eyebrow":"Our story",
  "about.story.h2":"Since 2017, matching people to work that fits",
  "about.story.p1":"HR Experts is a dedicated team of recruitment professionals helping organisations align their workforce with their business goals — turning strategy into hiring decisions that actually work.",
  "about.story.p2":"As demand grew for skilled specialists that couldn't be sourced locally, we built out a dedicated foreign-workforce practice: recruiting candidates from abroad and managing their work-permit and visa process end to end, alongside our core HR services.",
  "about.compliance.h3":"Operating within the rules, every time",
  "about.compliance.p":"Every foreign placement is run in line with Mongolian labour law and immigration procedure, working directly with the relevant government offices at each stage — from quota and work-permit approval through to visa issuance and arrival registration.",

  "about.values.eyebrow":"How we work",
  "about.values.h2":"What guides every placement",
  "about.v1.h":"Speed without shortcuts", "about.v1.p":"We move quickly because our process is efficient, not because we skip steps.",
  "about.v2.h":"Compliance first", "about.v2.p":"Every foreign hire is handled to the letter of Mongolian labour and immigration procedure.",
  "about.v3.h":"Local knowledge, global reach", "about.v3.p":"Consultants based in Ulaanbaatar with a sourcing network across Asia-Pacific.",
  "about.v4.h":"Candidates are people", "about.v4.p":"We give every applicant a clear, honest process — whether or not they're the final hire.",

  "about.stats.h2":"HR Experts in numbers",

  "services.crumb":"Services",
  "services.h1":"Our Services",
  "services.lead":"Four core HR services, plus a dedicated foreign-workforce and visa practice.",
  "services.included.eyebrow":"What's included",
  "services.included.h2":"Every recruiting engagement includes",
  "services.inc1":"Analysis of the vacancy and role requirements",
  "services.inc2":"Advertising design and targeted job promotion",
  "services.inc3":"Vacancy listing across major job-search platforms",
  "services.inc4":"Outreach to matching candidates in our database",
  "services.inc5":"CV screening and shortlisting",
  "services.inc6":"Candidate assessment with tests and qualifying questions",
  "services.inc7":"Phone and video interviews to assess competencies",
  "services.inc8":"Coordination of final interviews with your team",
  "services.quote.h2":"Every business hires differently",
  "services.quote.p":"Tell us the role, the volume, and the timeline, and we'll put together a scope and quote that fits — no fixed packages, no guesswork.",
  "services.quote.btn":"Get a tailored quote",
  "services.fw.eyebrow":"Also part of our work",
  "services.fw.h2":"Recruiting from abroad? See our foreign-worker service",
  "services.fw.p":"Sourcing, permits and visas for foreign specialists, managed end to end.",
  "services.fw.btn":"View foreign worker services",

  "fw.crumb":"Foreign Workers",
  "fw.h1":"Foreign Workforce & Visa Services",
  "fw.lead":"We recruit foreign specialists for Mongolian employers and manage their work-permit and visa process from application to arrival.",
  "fw.intro.eyebrow":"How it works",
  "fw.intro.h2":"One team, both sides of the process",
  "fw.intro.p":"Whether you're a company that needs a specialist you can't hire locally, or a foreign professional looking for work in Mongolia, we manage sourcing, paperwork and compliance so nothing falls between the cracks.",

  "fw.process.eyebrow":"The process",
  "fw.process.h2":"From request to arrival",
  "fw.step1.h":"Needs assessment", "fw.step1.p":"We define the role, requirements and quota position with you before sourcing begins.",
  "fw.step2.h":"Sourcing & screening", "fw.step2.p":"Candidates are sourced through our international network and screened against your criteria.",
  "fw.step3.h":"Interviews & selection", "fw.step3.p":"We coordinate interviews and support you through final candidate selection.",
  "fw.step4.h":"Work permit application", "fw.step4.p":"We prepare and submit the work-permit application with the relevant labour authority on your behalf.",
  "fw.step5.h":"Visa application", "fw.step5.p":"Once the permit is approved, we coordinate the work-visa application with the candidate.",
  "fw.step6.h":"Arrival & registration", "fw.step6.p":"We support arrival logistics, residence registration and onboarding into the role.",

  "fw.jobs.eyebrow":"Open roles",
  "fw.jobs.h2":"Current openings for foreign candidates",
  "fw.jobs.p":"Sample listings — contact us for the current, complete list of openings.",
  "fw.jobs.filter.all":"All",
  "fw.jobs.apply":"Apply now",
  "fw.jobs.empty":"No roles match that filter right now — check back soon or register your CV below.",

  "fw.employer.eyebrow":"For employers",
  "fw.employer.h2":"Request a foreign specialist",
  "fw.employer.p":"Tell us what you need and a consultant will get back to you within one business day.",
  "fw.f.company":"Company name", "fw.f.contact":"Contact person", "fw.f.email":"Work email", "fw.f.phone":"Phone number",
  "fw.f.industry":"Industry", "fw.f.count":"Number of workers needed", "fw.f.roles":"Role(s) needed",
  "fw.f.country":"Preferred source country (optional)", "fw.f.timeline":"Timeline",
  "fw.f.message":"Anything else we should know?",
  "fw.f.submit":"Submit request",
  "fw.f.success":"Thanks — your request has been received. A consultant will contact you within one business day.",

  "fw.candidate.eyebrow":"For candidates",
  "fw.candidate.h2":"Register your CV",
  "fw.candidate.p":"Apply to a specific role above, or register generally and we'll reach out when a matching role opens.",
  "fw.f.fullname":"Full name", "fw.f.nationality":"Nationality", "fw.f.role":"Desired role / industry",
  "fw.f.experience":"Years of experience", "fw.f.cv":"CV / resume", "fw.f.coverletter":"Cover message",
  "fw.f.cvhint":"PDF or Word, up to 10MB.",
  "fw.f.submitcv":"Submit application",
  "fw.f.successcv":"Thanks — we've received your application and will be in touch if there's a match.",

  "contact.crumb":"Contact",
  "contact.h1":"Contact Us",
  "contact.lead":"Have a role to fill, or looking for work? Reach out — we usually reply within one business day.",
  "contact.details.h2":"Get in touch",
  "contact.addr.l":"Office", "contact.phone.l":"Phone", "contact.email.l":"Email", "contact.hours.l":"Hours",
  "contact.hours.v":"Mon–Fri, 09:00–18:00",
  "contact.form.h2":"Send us a message",
  "fw.f.name":"Full name", "fw.f.subject":"Subject", "fw.f.msg":"Message",
  "contact.f.submit":"Send message",
  "contact.f.success":"Thanks for reaching out — we'll reply within one business day.",

  "footer.tagline":"Recruitment and foreign-workforce specialists based in Ulaanbaatar, Mongolia.",
  "footer.links.h":"Useful links",
  "footer.services.h":"Our services",
  "footer.contact.h":"Contact us",
  "footer.rights":"All rights reserved.",
  "footer.dev.note":"Built by ", "footer.mn":"Mongolian", "footer.en":"English",

  "common.required":"required",
},
mn: {
  "nav.home":"Нүүр", "nav.about":"Бидний тухай", "nav.services":"Үйлчилгээ",
  "nav.fw":"Гадаад ажилтан", "nav.contact":"Холбоо барих", "nav.cta":"Ажилтан хүсэх",

  "home.hero.eyebrow":"Ажилтан сонголт ба гадаад хүний нөөцийн шийдэл",
  "home.hero.h1":"Бид Монголын байгууллагуудыг тэднийг урагшлуулах хүмүүстэй холбодог.",
  "home.hero.lead":"2017 оноос хойш HR Experts Монгол даяар авьяас чадвартай ажилтныг сонгож, шалгаруулж, байрлуулж ирсэн — гадаад ажиллах хүчний зөвшөөрөл, визийн бүх процессыг өргөдлөөс ирэх хүртэл удирддаг.",
  "home.hero.cta1":"Ажилтан хүсэх",
  "home.hero.cta2":"Нээлттэй ажлын байрууд",
  "home.stat1.n":"9+", "home.stat1.l":"жил үйл ажиллагаа явуулж буй",
  "home.stat2.n":"1000+", "home.stat2.l":"амжилттай байршуулалт",
  "home.stat3.n":"20+", "home.stat3.l":"эх орон улс",
  "home.stat4.n":"48ц", "home.stat4.l":"анхны нэр дэвшигчийн жагсаалт",

  "home.split.tag1":"Ажил олгогчдод",
  "home.split.h1":"Хурдан, эрсдэл багатай ажилд ав.",
  "home.split.p1":"Орон нутгийн эсвэл олж чадахгүй байгаа гадаад мэргэжилтний талаар бидэнд хэлээрэй. Бид эх сурвалж олж, шалгаж, богино жагсаалт гаргана — гадаадын иргэн бол зөвшөөрөл, визийн процессыг тантай хамт удирдана.",
  "home.split.cta1":"Ажилтан хүсэх",
  "home.split.tag2":"Ажил хайгчдад",
  "home.split.h2":"Монголд ажлаа зөв аргаар ол.",
  "home.split.p2":"Одоогийн нээлттэй ажлын байрыг үзэх, эсвэл CV-ээ бүртгүүлээрэй. Гадаадаас нүүж ирж байгаа бол манай баг таны ажиллах хүчний зөвшөөрөл, визийн бичиг баримтыг хариуцна.",
  "home.split.cta2":"Ажлын байрууд харах",

  "home.services.eyebrow":"Бидний үйлчилгээ",
  "home.services.h2":"Тав хариуцлагатай нэг баг",
  "home.services.p":"Нэг ганц бөглөхөд хэцүү орон тооноос эхлээд гадаад ажиллах хүчийг бүхэлд нь бий болгох хүртэл.",
  "home.s1.h":"HR зөвлөгөө", "home.s1.p":"Илүү бүтэцлэгдсэн байгууллага бий болгоход тусалдаг — тодорхой үүрэг, хүчтэй соёл, өргөжих боломжтой процесс.",
  "home.s2.h":"Head Hunting", "home.s2.p":"Ахлах болон бөглөхөд хэцүү орон тоонд зориулсан Монгол болон Ази-Номхон далайн бүсийн шалгарсан сүлжээ.",
  "home.s3.h":"Ажилтан сонголт", "home.s3.p":"Эх сурвалж олох, шалгах, ярилцлага, санал тавихад хүртэл бүтэн процесс — та зөвхөн тохирсон нэр дэвшигчидтэй уулзана.",
  "home.s4.h":"Ажилтан түрээслэх", "home.s4.p":"Байнгын ажилтан авахгүйгээр хөдөлмөрийн гэрээгээр мэргэшсэн ажилтныг ашиглах боломж.",
  "home.s5.h":"Гадаад ажилтан ба виз", "home.s5.p":"Бид гадаад мэргэжилтэн элсүүлж, тэдний ажиллах хүчний зөвшөөрөл, визийн процессыг эхнээс нь дуустал удирдана.",
  "home.more":"Дэлгэрэнгүй",

  "home.why.eyebrow":"Яагаад HR Experts",
  "home.why.h2":"Гурван баталгаан дээр суурилсан",
  "home.why1.h":"Хурдан сонголтын баталгаа", "home.why1.p":"Таны орон тоонд тохирсон хугацаанд бид хайлт, сонголтоо явуулж, мэргэжилтэн аль болох хурдан ажилд орно.",
  "home.why2.h":"Солих баталгаа", "home.why2.p":"Байрлуулсан ажилтан туршилтын хугацаанд тохирохгүй бол бид нэмэлт төлбөргүйгээр шуурхай солих хүн олно.",
  "home.why3.h":"Тухайн бүрд нь үнэлэх", "home.why3.p":"Тухайн салбарт өдөр тутам ажилладаг зөвлөхүүд нэр дэвшигч бүрийг таны онцлогт нийцүүлэн үнэлдэг.",

  "home.industries.eyebrow":"Бидний ажилладаг салбарууд",
  "home.industries.h2":"Ажилтан сонголтоо бидэнд итгэдэг салбарууд",
  "home.ind1":"Уул уурхай, эрдэс баялаг", "home.ind2":"Барилга", "home.ind3":"Үйлдвэрлэл",
  "home.ind4":"Зочид буудал, аялал жуулчлал", "home.ind5":"Ложистик", "home.ind6":"Жижиглэн худалдаа",
  "home.ind7":"Мэдээллийн технологи", "home.ind8":"Санхүү, мэргэжлийн үйлчилгээ",

  "home.process.eyebrow":"Гадаад ажиллах хүч",
  "home.process.h2":"Гадаадаас ажилтан авах — эхнээс нь дуустал бид хариуцна",
  "home.process.p":"Хэрэгцээг тодорхойлохоос эхлээд ирэх хүртэл бид зөвшөөрөл, визийн ажлыг удирдана — таны шинэ ажилтан ажил дээрээ л анхаарлаа хандуулна.",
  "home.process.cta":"Бүтэн процессыг харах",

  "home.cta.h2":"Эхлэхэд бэлэн үү?",
  "home.cta.p":"Нэг ажилтан, гадаад мэргэжилтэн, эсвэл бүтэн баг хэрэгтэй эсэхээ бидэнд хэлээрэй — бид нэг ажлын өдрийн дотор холбогдоно.",
  "home.cta.btn1":"Ажилтан хүсэх", "home.cta.btn2":"Холбоо барих",

  "about.crumb":"Бидний тухай",
  "about.h1":"HR Experts-ийн тухай",
  "about.lead":"Орон нутгийн ажилтан сонголт болон гадаад ажиллах хүчний байршуулалтад зориулагдсан Монголын ажилтан сонголтын агентлаг.",
  "about.story.eyebrow":"Бидний түүх",
  "about.story.h2":"2017 оноос хойш хүмүүсийг тохирсон ажилтай нь холбож ирлээ",
  "about.story.p1":"HR Experts бол байгууллагуудад өөрсдийн ажиллах хүчийг бизнесийн зорилготойгоо уялдуулахад тусалдаг, стратегийг бодит үр дүнтэй сонголтын шийдвэр болгон хувиргадаг ажилтан сонголтын мэргэжилтнүүдийн баг юм.",
  "about.story.p2":"Орон нутгаас олдохгүй байгаа мэргэшсэн ажилтны эрэлт нэмэгдэхийн хэрээр бид гадаад ажиллах хүчний тусгай чиглэл бий болгосон: гадаадаас нэр дэвшигч элсүүлж, тэдний ажиллах хүчний зөвшөөрөл, визийн процессыг эхнээс нь дуустал үндсэн HR үйлчилгээнийхээ хамт удирддаг.",
  "about.compliance.h3":"Хууль журмын хүрээнд, үргэлж",
  "about.compliance.p":"Гадаад ажилтны байршуулалт бүрийг Монгол улсын хөдөлмөрийн хууль болон гадаадын иргэдийн харьяалалтай холбоотой журамд нийцүүлэн, эрх бүхий байгууллагатай шат бүрт — квот, ажиллах зөвшөөрлийн батламжаас эхлээд виз олгох, ирсний дараах бүртгэл хүртэл — шууд хамтран явуулдаг.",

  "about.values.eyebrow":"Бидний ажлын арга барил",
  "about.values.h2":"Байршуулалт бүрийг удирдаж буй зарчим",
  "about.v1.h":"Товчлохгүйгээр хурдан ажиллах", "about.v1.p":"Бид алхмуудыг алгасдаггүй, харин процесс маань үр дүнтэй тул хурдан ажилладаг.",
  "about.v2.h":"Хууль журам нэн тэргүүнд", "about.v2.p":"Гадаад ажилтан бүрийг Монголын хөдөлмөр, гадаадын иргэний журамд бүрэн нийцүүлэн зохицуулдаг.",
  "about.v3.h":"Орон нутгийн мэдлэг, олон улсын хамрах хүрээ", "about.v3.p":"Улаанбаатарт суурилсан зөвлөхүүд, Ази-Номхон далайн бүс даяар эх сурвалжийн сүлжээтэй.",
  "about.v4.h":"Нэр дэвшигч бүр хүн", "about.v4.p":"Эцсийн шийдвэр ямар ч байсан бид өргөдөл гаргагч бүрд тодорхой, шударга процесс хангадаг.",

  "about.stats.h2":"HR Experts тоогоор",

  "services.crumb":"Үйлчилгээ",
  "services.h1":"Бидний үйлчилгээ",
  "services.lead":"HR-ийн дөрвөн үндсэн үйлчилгээ, түүнчлэн гадаад ажиллах хүч, визийн тусгай чиглэл.",
  "services.included.eyebrow":"Багтсан үйлчилгээ",
  "services.included.h2":"Ажилтан сонголтын үйлчилгээ бүрт дараах зүйлс багтдаг",
  "services.inc1":"Орон тоо болон шаардлагын дүн шинжилгээ",
  "services.inc2":"Зар сурталчилгааны загвар, чиглэсэн сурталчилгаа",
  "services.inc3":"Гол ажлын зар мэдээллийн платформ дээр байршуулах",
  "services.inc4":"Манай өгөгдлийн сангаас тохирох нэр дэвшигчдэд санал илгээх",
  "services.inc5":"CV шалгах, эрэмбэлэх",
  "services.inc6":"Тест, шалгуур асуулгаар нэр дэвшигчийг үнэлэх",
  "services.inc7":"Чадварыг үнэлэх утас, видео ярилцлага",
  "services.inc8":"Эцсийн ярилцлагыг таны багтай зохицуулах",
  "services.quote.h2":"Байгууллага бүр өөрөөр ажилтан авдаг",
  "services.quote.p":"Орон тоо, тоо хэмжээ, хугацаагаа хэлээрэй — бид тохирсон хамрах хүрээ, үнийн саналыг бэлдэнэ. Тогтмол багц, тааман тооцоо байхгүй.",
  "services.quote.btn":"Үнийн санал авах",
  "services.fw.eyebrow":"Мөн бидний ажил",
  "services.fw.h2":"Гадаадаас ажилтан авах уу? Манай гадаад ажилтны үйлчилгээг үзнэ үү",
  "services.fw.p":"Гадаад мэргэжилтний эх сурвалж, зөвшөөрөл, виз — эхнээс нь дуустал удирдана.",
  "services.fw.btn":"Гадаад ажилтны үйлчилгээ үзэх",

  "fw.crumb":"Гадаад ажилтан",
  "fw.h1":"Гадаад ажиллах хүч ба визийн үйлчилгээ",
  "fw.lead":"Бид Монголын ажил олгогчдод зориулж гадаад мэргэжилтэн элсүүлж, тэдний ажиллах хүчний зөвшөөрөл, визийн процессыг өргөдлөөс ирэх хүртэл удирддаг.",
  "fw.intro.eyebrow":"Хэрхэн ажилладаг вэ",
  "fw.intro.h2":"Нэг баг, процессын хоёр тал",
  "fw.intro.p":"Та орон нутгаас олж чадахгүй байгаа мэргэжилтэн хэрэгтэй байгууллага, эсвэл Монголд ажил хайж буй гадаад мэргэжилтэн — аль нь ч бай бид эх сурвалж олох, бичиг баримт, хууль журмын дагуу байдлыг бүрэн хариуцна.",

  "fw.process.eyebrow":"Процесс",
  "fw.process.h2":"Хүсэлтээс эхлээд ирэх хүртэл",
  "fw.step1.h":"Хэрэгцээг тодорхойлох", "fw.step1.p":"Эх сурвалж хайхаас өмнө таны хамт орон тоо, шаардлага, квотын байдлыг тодорхойлно.",
  "fw.step2.h":"Эх сурвалж, шалгалт", "fw.step2.p":"Нэр дэвшигчийг олон улсын сүлжээгээрээ олж, таны шаардлагын дагуу шалгана.",
  "fw.step3.h":"Ярилцлага, сонголт", "fw.step3.p":"Ярилцлагыг зохицуулж, эцсийн нэр дэвшигчийг сонгоход тань туслана.",
  "fw.step4.h":"Ажиллах зөвшөөрлийн хүсэлт", "fw.step4.p":"Таны өмнөөс эрх бүхий хөдөлмөрийн байгууллагад ажиллах зөвшөөрлийн хүсэлтийг бэлтгэж, гаргана.",
  "fw.step5.h":"Визийн хүсэлт", "fw.step5.p":"Зөвшөөрөл батлагдсаны дараа нэр дэвшигчтэй хамт ажлын визийн хүсэлтийг зохицуулна.",
  "fw.step6.h":"Ирэлт, бүртгэл", "fw.step6.p":"Ирэх логистик, оршин суух бүртгэл, ажилд дасан зохицоход тусална.",

  "fw.jobs.eyebrow":"Нээлттэй ажлын байр",
  "fw.jobs.h2":"Гадаад нэр дэвшигчдэд зориулсан одоогийн ажлын байрууд",
  "fw.jobs.p":"Жишээ жагсаалт — одоогийн бүрэн жагсаалтыг бидэнтэй холбогдож авна уу.",
  "fw.jobs.filter.all":"Бүгд",
  "fw.jobs.apply":"Өргөдөл гаргах",
  "fw.jobs.empty":"Одоогоор энэ шүүлтүүрт тохирох орон тоо алга — удахгүй дахин шалгах эсвэл доор CV-ээ бүртгүүлээрэй.",

  "fw.employer.eyebrow":"Ажил олгогчдод",
  "fw.employer.h2":"Гадаад мэргэжилтэн хүсэх",
  "fw.employer.p":"Хэрэгцээгээ бидэнд хэлээрэй, зөвлөх нэг ажлын өдрийн дотор тантай холбогдоно.",
  "fw.f.company":"Байгууллагын нэр", "fw.f.contact":"Холбоо барих ажилтан", "fw.f.email":"Ажлын имэйл", "fw.f.phone":"Утасны дугаар",
  "fw.f.industry":"Салбар", "fw.f.count":"Хэрэгтэй ажилтны тоо", "fw.f.roles":"Хэрэгтэй ажлын байр",
  "fw.f.country":"Эх орны сонголт (заавал биш)", "fw.f.timeline":"Хугацаа",
  "fw.f.message":"Бусад мэдээлэл байвал",
  "fw.f.submit":"Хүсэлт илгээх",
  "fw.f.success":"Баярлалаа — таны хүсэлтийг хүлээн авлаа. Зөвлөх нэг ажлын өдрийн дотор тантай холбогдоно.",

  "fw.candidate.eyebrow":"Ажил хайгчдад",
  "fw.candidate.h2":"CV-ээ бүртгүүлэх",
  "fw.candidate.p":"Дээрх тодорхой ажлын байранд өргөдөл гаргах, эсвэл ерөнхийд нь бүртгүүлбэл тохирох орон тоо гарахад бид холбогдоно.",
  "fw.f.fullname":"Овог нэр", "fw.f.nationality":"Иргэншил", "fw.f.role":"Хүссэн ажлын байр / салбар",
  "fw.f.experience":"Ажлын туршлага (жил)", "fw.f.cv":"CV / намтар", "fw.f.coverletter":"Тайлбар мессеж",
  "fw.f.cvhint":"PDF эсвэл Word, 10MB хүртэл.",
  "fw.f.submitcv":"Өргөдөл илгээх",
  "fw.f.successcv":"Баярлалаа — таны өргөдлийг хүлээн авлаа, тохирох орон тоо гарвал бид холбогдоно.",

  "contact.crumb":"Холбоо барих",
  "contact.h1":"Холбоо барих",
  "contact.lead":"Ажилтан хэрэгтэй юу, эсвэл ажил хайж байна уу? Бидэнтэй холбогдоорой — ихэвчлэн нэг ажлын өдрийн дотор хариулна.",
  "contact.details.h2":"Холбоо барих",
  "contact.addr.l":"Оффис", "contact.phone.l":"Утас", "contact.email.l":"Имэйл", "contact.hours.l":"Ажиллах цаг",
  "contact.hours.v":"Даваа–Баасан, 09:00–18:00",
  "contact.form.h2":"Мессеж илгээх",
  "fw.f.name":"Овог нэр", "fw.f.subject":"Гарчиг", "fw.f.msg":"Мессеж",
  "contact.f.submit":"Мессеж илгээх",
  "contact.f.success":"Холбогдсонд баярлалаа — бид нэг ажлын өдрийн дотор хариу өгнө.",

  "footer.tagline":"Улаанбаатарт төвтэй ажилтан сонголт, гадаад ажиллах хүчний мэргэжилтнүүд.",
  "footer.links.h":"Хэрэгтэй холбоосууд",
  "footer.services.h":"Бидний үйлчилгээ",
  "footer.contact.h":"Холбоо барих",
  "footer.rights":"Бүх эрх хуулиар хамгаалагдсан.",
  "footer.dev.note":"Хөгжүүлсэн: ", "footer.mn":"Монгол", "footer.en":"English",

  "common.required":"заавал",
}
};

/* ---------------- language ---------------- */
function getLang(){ return localStorage.getItem("hre_lang") || "en"; }
function setLang(lang){
  localStorage.setItem("hre_lang", lang);
  applyLang(lang);
}
function applyLang(lang){
  document.documentElement.setAttribute("lang", lang === "mn" ? "mn" : "en");
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const val = I18N[lang] && I18N[lang][key];
    if(val) el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    const val = I18N[lang] && I18N[lang][key];
    if(val) el.setAttribute("placeholder", val);
  });
  document.querySelectorAll(".lang-toggle button").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  if(typeof initJobFilters === "function") initJobFilters();
}
function t(key){ return (I18N[getLang()] && I18N[getLang()][key]) || key; }

document.addEventListener("DOMContentLoaded", ()=>{
  applyLang(getLang());
  document.querySelectorAll(".lang-toggle button").forEach(btn=>{
    btn.addEventListener("click", ()=> setLang(btn.dataset.lang));
  });

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if(navToggle && nav){
    navToggle.addEventListener("click", ()=> nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(a=>{
      a.addEventListener("click", ()=> nav.classList.remove("open"));
    });
  }

  document.querySelectorAll("form[data-demo-form]").forEach(form=>{
    form.addEventListener("submit", e=>{
      e.preventDefault();
      const successId = form.getAttribute("data-success");
      const successEl = successId ? document.getElementById(successId) : null;
      if(successEl){
        successEl.classList.add("show");
        successEl.scrollIntoView({behavior:"smooth", block:"center"});
      }
      form.reset();
    });
  });

  /* header: subtle compact state once the page scrolls */
  const header = document.querySelector(".site-header");
  if(header){
    const onScroll = ()=> header.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive:true});
  }

  /* scroll-reveal: fade/slide elements in as they enter the viewport */
  const revealTargets = document.querySelectorAll(
    ".panel, .split-panel, .step, .stat-strip > div, .job-card, .contact-detail, .page-hero .container > *, .hero .container > *, .hero-stats .stat, .checklist li, .badge"
  );
  revealTargets.forEach(el => el.classList.add("reveal"));

  function animateCountUp(numEl){
    if(!numEl || numEl.dataset.counted) return;
    const match = numEl.textContent.trim().match(/^(\d+)(.*)$/);
    if(!match) return;
    numEl.dataset.counted = "1";
    const targetVal = parseInt(match[1], 10);
    const suffix = match[2];
    const duration = 1000;
    const startTime = performance.now();
    function frame(now){
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      numEl.textContent = Math.round(targetVal * eased) + suffix;
      if(p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if("IntersectionObserver" in window && !prefersReduced){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach((entry, i)=>{
        if(entry.isIntersecting){
          const delay = Math.min(i % 4, 3) * 70;
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add("in-view");
          if(entry.target.matches(".hero-stats .stat")){
            animateCountUp(entry.target.querySelector("b"));
          }
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.15, rootMargin:"0px 0px -40px 0px"});
    revealTargets.forEach(el => io.observe(el));

    // Safety net: content must never stay permanently invisible (slow/blocked
    // observer, unusual viewports, print/PDF export, etc.) — force-reveal
    // anything still hidden a couple of seconds after load.
    window.setTimeout(()=>{
      revealTargets.forEach(el => el.classList.add("in-view"));
    }, 2200);
  } else {
    revealTargets.forEach(el => el.classList.add("in-view"));
  }

  /* ---- buttery wheel scrolling + eased anchor jumps (no external deps) ---- */
  initSmoothScroll();

  /* ---- home hero: scroll parallax + cursor tilt on the seal ---- */
  initHeroInteractions();
});

function initSmoothScroll(){
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  if(prefersReduced || !finePointer) return; // leave native scrolling for touch & reduced-motion users

  document.documentElement.classList.add("js-smooth-scroll");

  let current = window.scrollY;
  let target = window.scrollY;
  let rafId = null;

  const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const clamp = v => Math.min(Math.max(v, 0), maxScroll());

  function tick(){
    current += (target - current) * 0.09;
    if(Math.abs(target - current) < 0.4){
      current = target;
      window.scrollTo(0, current);
      rafId = null;
      return;
    }
    window.scrollTo(0, current);
    rafId = requestAnimationFrame(tick);
  }
  function start(){ if(!rafId) rafId = requestAnimationFrame(tick); }

  window.addEventListener("wheel", (e)=>{
    if(e.ctrlKey) return; // don't hijack pinch-zoom
    if(e.target.closest && e.target.closest("textarea, select")) return; // native scroll inside form controls
    e.preventDefault();
    target = clamp(target + e.deltaY);
    start();
  }, {passive:false});

  // Resync with the browser's own scroll position after anything we didn't
  // drive ourselves (keyboard scrolling, Find-in-page, native scrollIntoView).
  let idleTimer;
  window.addEventListener("scroll", ()=>{
    if(rafId) return;
    clearTimeout(idleTimer);
    idleTimer = setTimeout(()=>{ target = window.scrollY; current = window.scrollY; }, 120);
  }, {passive:true});

  window.addEventListener("resize", ()=>{ target = clamp(target); });

  // Smooth, header-aware jumps for in-page anchor links (e.g. "#employer-form")
  document.querySelectorAll('a[href*="#"]').forEach(link=>{
    link.addEventListener("click", (e)=>{
      let url;
      try{ url = new URL(link.getAttribute("href"), location.href); } catch(err){ return; }
      if(url.pathname !== location.pathname || !url.hash || url.hash === "#") return;
      const dest = document.querySelector(url.hash);
      if(!dest) return;
      e.preventDefault();
      const headerH = document.querySelector(".site-header")?.offsetHeight || 0;
      target = clamp(dest.getBoundingClientRect().top + window.scrollY - headerH - 16);
      start();
      history.pushState(null, "", url.hash);
    });
  });
}

function initHeroInteractions(){
  const heroSection = document.querySelector(".hero");
  const heroSeal = document.querySelector(".hero-seal");
  if(!heroSection || !heroSeal) return; // only present on the home page
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  if(prefersReduced || !finePointer) return;

  let scrollY = window.scrollY, tiltX = 0, tiltY = 0, ticking = false;

  function render(){
    heroSeal.style.transform = `translateY(${scrollY * 0.1}px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
    ticking = false;
  }
  function requestRender(){ if(!ticking){ ticking = true; requestAnimationFrame(render); } }

  window.addEventListener("scroll", ()=>{ scrollY = window.scrollY; requestRender(); }, {passive:true});
  heroSection.addEventListener("mousemove", (e)=>{
    const rect = heroSection.getBoundingClientRect();
    tiltX = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    tiltY = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    requestRender();
  });
  heroSection.addEventListener("mouseleave", ()=>{ tiltX = 0; tiltY = 0; requestRender(); });
}

/* ---------------- sample job listings (foreign-worker candidates) ----------------
   Replace with a live feed from your ATS / job-board API. */
const JOBS = [
  { id:1, category:"Construction", visaSupport:true,
    title:{en:"Site Engineer", mn:"Талбайн инженер"},
    location:{en:"Ulaanbaatar", mn:"Улаанбаатар"},
    type:{en:"Full-time · Foreign hire", mn:"Бүтэн цаг · Гадаад ажилтан"} },
  { id:2, category:"Mining & Resources", visaSupport:true,
    title:{en:"Mining Operations Specialist", mn:"Уул уурхайн үйл ажиллагааны мэргэжилтэн"},
    location:{en:"Umnugovi Province", mn:"Өмнөговь аймаг"},
    type:{en:"Full-time · Foreign hire", mn:"Бүтэн цаг · Гадаад ажилтан"} },
  { id:3, category:"Manufacturing", visaSupport:true,
    title:{en:"Production Line Manager", mn:"Үйлдвэрлэлийн шугамын менежер"},
    location:{en:"Ulaanbaatar", mn:"Улаанбаатар"},
    type:{en:"Full-time · Foreign hire", mn:"Бүтэн цаг · Гадаад ажилтан"} },
  { id:4, category:"IT & Technology", visaSupport:true,
    title:{en:"Senior Software Engineer", mn:"Ахлах программ хангамжийн инженер"},
    location:{en:"Ulaanbaatar (remote-friendly)", mn:"Улаанбаатар (алсаас ажиллах боломжтой)"},
    type:{en:"Full-time · Foreign hire", mn:"Бүтэн цаг · Гадаад ажилтан"} },
  { id:5, category:"Hospitality & Tourism", visaSupport:true,
    title:{en:"Executive Chef", mn:"Ерөнхий тогооч"},
    location:{en:"Ulaanbaatar", mn:"Улаанбаатар"},
    type:{en:"Full-time · Foreign hire", mn:"Бүтэн цаг · Гадаад ажилтан"} },
  { id:6, category:"Logistics", visaSupport:false,
    title:{en:"Supply Chain Coordinator", mn:"Ханган нийлүүлэлтийн зохицуулагч"},
    location:{en:"Ulaanbaatar", mn:"Улаанбаатар"},
    type:{en:"Full-time · Local hire", mn:"Бүтэн цаг · Дотоод ажилтан"} },
];

const CATEGORY_MN = {
  "Construction":"Барилга", "Mining & Resources":"Уул уурхай, эрдэс баялаг",
  "Manufacturing":"Үйлдвэрлэл", "IT & Technology":"Мэдээллийн технологи",
  "Hospitality & Tourism":"Зочид буудал, аялал жуулчлал", "Logistics":"Ложистик"
};
function categoryLabel(cat){
  return getLang()==="mn" ? (CATEGORY_MN[cat] || cat) : cat;
}

let activeJobFilter = "all";

function renderJobs(){
  const list = document.getElementById("job-list");
  if(!list) return;
  const lang = getLang();
  const filtered = activeJobFilter === "all" ? JOBS : JOBS.filter(j=> j.category === activeJobFilter);

  if(filtered.length === 0){
    list.innerHTML = `<div class="job-empty">${t("fw.jobs.empty")}</div>`;
    return;
  }

  list.innerHTML = filtered.map(j => `
    <div class="job-card">
      <div>
        <h3>${j.title[lang]}</h3>
        <div class="job-meta">
          <span class="job-tag">${j.location[lang]}</span>
          <span class="job-tag">${j.type[lang]}</span>
          ${j.visaSupport ? `<span class="job-tag visa">${lang==="mn" ? "Виз дэмжлэгтэй" : "Visa support included"}</span>` : ""}
        </div>
      </div>
      <a class="btn btn-outline" href="#employer-form-anchor" onclick="document.getElementById('candidate-form').scrollIntoView({behavior:'smooth'})">${t("fw.jobs.apply")}</a>
    </div>
  `).join("");
}

function initJobFilters(){
  const filterBar = document.getElementById("job-filters");
  if(!filterBar) return;
  const categories = ["all", ...new Set(JOBS.map(j=>j.category))];
  filterBar.innerHTML = categories.map(c =>
    `<button data-cat="${c}" class="${c===activeJobFilter ? 'active' : ''}">${c==='all' ? t("fw.jobs.filter.all") : categoryLabel(c)}</button>`
  ).join("");
  filterBar.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      activeJobFilter = btn.dataset.cat;
      filterBar.querySelectorAll("button").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      renderJobs();
    });
  });
  renderJobs();
}

document.addEventListener("DOMContentLoaded", initJobFilters);
