function projectGallery(files, arAlt, enAlt) {
  return files.map(function (file) {
    return {
      src: "assets/images/projects/" + file,
      alt: { ar: arAlt, en: enAlt }
    };
  });
}

var makanunaLensGallery = projectGallery(
  [
    "makanuna-visual.webp",
    "darb-al-ahmar-tour.webp",
    "darb-al-ahmar-tour (2).webp",
    "darb-al-ahmar-tour (3).webp",
    "darb-al-ahmar-tour (4).webp"
  ],
  "صورة توثيقية من مشروعات عدسة مكاننا والدرب الأحمر",
  "Documentary image from Makanuna Lens and Darb al-Ahmar projects"
);

var SITE = {
  brand: {
    ar: "مختبر ندى السباعي",
    en: "Nada Elsebaee Lab"
  },
  origin: "https://nadaelsebaee.com",
  email: "connect@nadaelsebaee.com",
  phone: "+201002044330",
  linkedin: "https://linkedin.com/in/nada-elsebaee-25632b138",
  substack: "",
  formEndpoint: "",
  nav: {
    ar: [
      ["الخدمات", "services.html"],
      ["الاستوديو", "studio.html"],
      ["عن ندى", "about.html"],
      ["أرشيف الخبرات", "archive.html"],
      ["للتعاون", "contact.html"]
    ],
    en: [
      ["Services", "services.html"],
      ["Studio", "studio.html"],
      ["About", "about.html"],
      ["Experience archive", "archive.html"],
      ["Collaborate", "contact.html"]
    ]
  },
  copy: {
    ar: {
      language: "English",
      menu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      home: "الرئيسية",
      footerNote: "أرشيف مهني وأعمال مختارة",
      footerRights: "جميع الحقوق محفوظة",
      openProject: "استكشاف المشروع",
      archiveEyebrow: "رحلة استثنائية",
      archiveTitle: "خبرات ومشاريع، لكل منها حكايتها",
      archiveIntro: "أرشيف يوثق الأدوار والمشاريع والمخرجات، مع صفحة مستقلة لتفاصيل كل مشروع ومواده المنشورة.",
      filterAll: "كل المجالات",
      resultSingular: "مشروع",
      resultPlural: "مشاريع",
      timelineLabel: "اختيار السنة يعرض الخبرات المرتبطة بها",
      allYears: "كل السنوات",
      yearLabel: "سنة",
      backArchive: "العودة إلى الأرشيف",
      roleLabel: "الدور",
      periodLabel: "الفترة",
      organizationLabel: "الجهة / الشركاء",
      workLabel: "نطاق العمل",
      outcomeLabel: "المخرجات والأدلة",
      relatedLabel: "مواد وروابط",
      projectContactButton: "لنتحدث عن مشروعك",
      projectContactEyebrow: "مساحة للتعاون حول المشروع",
      projectContactCtas: {
        operations: {
          title: "هل تريد تطوير حضور مشروعك الرقمي؟",
          text: "لنتحدث عن المحتوى والمنصات والخطوات العملية التي تناسب أهدافك."
        },
        writing: {
          title: "هل لديك فكرة تحتاج إلى كتابة؟",
          text: "نناقش السيناريو أو المحتوى التحريري، والجمهور الذي تخاطبه الفكرة."
        },
        research: {
          title: "هل يحتاج مشروعك إلى بحث أو أدوات تقييم؟",
          text: "نحدد أسئلة البحث والمنهج والأدوات المناسبة لسياق المشروع."
        },
        visual: {
          title: "هل لديك فعالية أو مشروع يحتاج إلى توثيق بصري؟",
          text: "لنتحدث عن التغطية والإنتاج المرئي بما يلائم طبيعة الحدث واحتياجك."
        },
        education: {
          title: "هل تطوّر دورة أو برنامجًا تدريبيًا؟",
          text: "نناقش تصميم المحتوى وتجربة التعلّم وإنتاج المواد التعليمية."
        },
        community: {
          title: "هل تعمل على مبادرة ثقافية أو مجتمعية؟",
          text: "لنتحدث عن تصميم البرنامج وتنسيقه وتطوير الأدوات المناسبة لسياقه."
        },
        default: {
          title: "هل لديك مشروع وتبحث عن شريك مناسب؟",
          text: "شارك تفاصيل الفكرة لنحدد معًا نطاق العمل والخطوة التالية."
        }
      },
      notFoundTitle: "لم نعثر على هذه الصفحة",
      notFoundText: "قد يكون الرابط غير صحيح أو أن الصفحة غير متاحة.",
      articlesEyebrow: "المدونة",
      articlesTitle: "المدونة",
      articlesDescription: "مقالات تحريرية وأدلة تطبيقية في العمليات، وتصميم التعلّم، والتوثيق البصري، والثقافة والإعلام.",
      articlesIntro: "مقالات وأدلة عملية مقسمة حسب المجال، مع توضيح المنهجية وحدود كل مادة وإتاحة صور ذات بيانات توثيقية عند استخدامها.",
      blogEyebrow: "أدلة قصيرة قابلة للتطبيق",
      blogTitle: "مقالات عملية حسب المجال",
      blogIntro: "تصفّح المقالات حسب المجال. توضح كل مادة غرضها ومنهجيتها، وتفصل بين الشرح التحريري والادعاءات البحثية.",
      readArticle: "قراءة المقال",
      blogAll: "كل المجالات",
      articleSourceLabel: "المصدر والسياق",
      photoDateLabel: "تاريخ الصورة",
      photoLocationLabel: "مكان التصوير",
      englishEditionNote: "هذه نسخة إنجليزية موجزة من المقال العربي المطول.",
      closeArticle: "إغلاق المقال",
      readTime: "دقائق للقراءة",
      tryItLabel: "تطبيق عملي",
      newsletterEyebrow: "رسائل جديدة لاحقًا",
      newsletterTitle: "النشرة البريدية قيد الإعداد",
      newsletterText: "سيظهر الاشتراك هنا بعد تجهيز رابط النشرة. وحتى ذلك الحين، ستُنشر المواد الجديدة في هذه الصفحة.",
      newsletterCta: "زيارة النشرة",
      publishedEyebrow: "من الأعمال المنشورة",
      publishedTitle: "أدلة ومحتوى موثق",
      publishedIntro: "مواد منشورة مرتبطة بمشروعات موثقة، مع رابط يفتح تفاصيل كل مشروع.",
      publishedType: "مخرج منشور",
      publishedDetails: "تفاصيل العمل",
      researchAuthorLabel: "إعداد",
      researchSupervisorLabel: "إشراف",
      aboutEyebrow: "عن ندى",
      aboutTitle: "ندى السباعي",
      contactEyebrow: "مساحة للتعاون",
      contactTitle: "من فكرة إلى حكاية جديدة",
      contactIntro: "للمشروعات الفنية والثقافية، والأفكار التي تستحق الاكتشاف معًا، يسعدني بدء الحوار. تتوفر عدة وسائل للتواصل.",
      formEyebrow: "رسالة عبر الموقع",
      formTitle: "تفاصيل الفكرة",
      formIntro: "تعبئة البيانات مطلوبة، وسيُتاح إرسال الرسائل قريبًا. للتواصل حاليًا، يتوفر البريد وواتساب.",
      formNameLabel: "الاسم",
      formEmailLabel: "البريد الإلكتروني",
      formSubjectLabel: "موضوع الرسالة",
      formMessageLabel: "الرسالة",
      formSubmit: "إرسال الرسالة",
      formSetupPending: "النموذج قيد التجهيز ولا يرسل الرسائل حاليًا. للتواصل المباشر، يتوفر البريد أو واتساب.",
      formSending: "جارٍ إرسال رسالتك…",
      formSuccess: "وصلت الرسالة بنجاح. شكرًا على التواصل.",
      formError: "تعذر إرسال الرسالة الآن. يرجى المحاولة مجددًا أو التواصل مباشرة عبر البريد.",
      formUnavailable: "نموذج الإرسال غير مفعّل بعد. يمكن التواصل مباشرة عبر البريد.",
      formConfigError: "تعذر إرسال الرسالة بسبب إعداد غير صالح. يرجى التواصل عبر البريد.",
      emailLabel: "راسلني بالبريد",
      phoneLabel: "محادثة عبر واتساب",
      linkedinLabel: "LinkedIn",
      contactLinkHint: "الانتقال إلى الرابط",
      articlesPage: "المدونة",
      studioPage: "الاستوديو",
      backToTop: "العودة إلى أعلى الصفحة",
      previousPage: "العودة إلى الصفحة السابقة",
      playVideo: "تشغيل الفيديو: ",
      studioEyebrow: "الاستوديو",
      studioTitle: "مساحة للحكايات المرئية",
      studioIntro: "مجموعة من الفيديوهات والأعمال المرئية التي تعكس تنوع المشروعات والتجارب والأساليب الإبداعية.",
      studioCta: "استكشاف الاستوديو",
      studioVideosLabel: "فيديوهات مختارة من الاستوديو",
      projectVideosTitle: "فيديوهات المشروع",
      studioWorkTitle: "مختارات من الأعمال المرئية",
      studioWorkIntro: "صور ثابتة وكواليس وأعمال مرئية مختارة من مشروعات متنوعة.",
      writingArchiveHeading: "خبرات الكتابة",
      stylingWorkDetails: "تفاصيل الأدوار",
      servicesEyebrow: "مساحات للتعاون",
      servicesTitle: "خدمات تجمع الرؤية بالتنفيذ",
      servicesIntro: "حلول عملية مصممة للشركات والمنظمات غير الحكومية والكيانات الثقافية والمشاريع الإعلامية.",
      servicesMore: "استكشاف الخدمات",
      serviceDetails: "استكشف الخدمة",
      featuredEyebrow: "مختارات من الأرشيف",
      featuredTitle: "رحلة استثنائية",
      viewArchive: "عرض الأرشيف كاملًا",
      approachEyebrow: "منهج العمل",
      approachTitle: "من فهم السياق إلى إنجاز ملموس",
      aboutLink: "المزيد عن ندى",
      writingEyebrow: "المدونة",
      writingTitle: "أفكار عملية ومساحة للقراءة",
      writingText: "مقالات وأدلة عملية في العمليات وتصميم التعلّم والتوثيق البصري والثقافة والإعلام.",
      writingCta: "تصفح المدونة",
      hero: {
        eyebrow: "مختبر ندى السباعي | القاهرة، مصر",
        headline: "ابتكار تجربة استثنائية",
        subtitle: "إنتاج بصري · إدارة ثقافية-فنية · بحث وتصميم تعليمي · عمليات وتجارة إلكترونية · ذكاء اصطناعي",
        intro: "وسائط متعددة · توثيق إبداعي — بناء أنظمة عمل وتصميم أدوات ومحتوى إبداعي، من عالم المبادرات الثقافية والمجتمعية إلى عالم التجارة الإلكترونية.",
        projectsCta: "عرض أرشيف الخبرات",
        contactCta: "للتواصل والتعاون",
        proof: "أكثر من 11 عامًا من الخبرة المهنية منذ 2014",
        portraitAlt: "صورة شخصية لندى السباعي",
        portraitCaption: "ندى السباعي",
        studioImageAlt: "مشهد من فيلم لوحة، أحد الأعمال المرئية في الاستوديو",
        statYears: "+11",
        statYearsLabel: "عامًا من الخبرة منذ 2014",
        statFields: "5",
        statFieldsLabel: "مسارات مهنية متقاطعة",
        statPartners: "مشاريع",
        statPartnersLabel: "محلية ودولية موثقة"
      }
    },
    en: {
      language: "العربية",
      menu: "Open menu",
      closeMenu: "Close menu",
      home: "Home",
      footerNote: "Professional archive and selected work",
      footerRights: "All rights reserved",
      openProject: "Explore project",
      archiveEyebrow: "An exceptional journey",
      archiveTitle: "Experience and projects, each with its own story",
      archiveIntro: "Browse roles, projects and documented outputs. Open any project to explore its details and published materials.",
      filterAll: "All fields",
      resultSingular: "project",
      resultPlural: "projects",
      timelineLabel: "Choose a year to see related experience",
      allYears: "All years",
      yearLabel: "Year",
      backArchive: "Back to archive",
      roleLabel: "Role",
      periodLabel: "Period",
      organizationLabel: "Organization / partners",
      workLabel: "Scope of work",
      outcomeLabel: "Outputs and evidence",
      relatedLabel: "Materials and links",
      projectContactButton: "Discuss your project",
      projectContactEyebrow: "A next step for your project",
      projectContactCtas: {
        operations: {
          title: "Looking to develop your project's digital presence?",
          text: "Let's discuss the content, platforms and practical steps that fit your goals."
        },
        writing: {
          title: "Do you have an idea that needs writing?",
          text: "Let's talk about the screenplay or editorial content and the audience it should reach."
        },
        research: {
          title: "Could your project use research or evaluation tools?",
          text: "Let's define research questions, methods and tools suited to its context."
        },
        visual: {
          title: "Do you have an event or project that needs visual documentation?",
          text: "Let's discuss coverage and visual production shaped around the event and your needs."
        },
        education: {
          title: "Developing a course or training program?",
          text: "Let's discuss learning content, experience design and educational production."
        },
        community: {
          title: "Working on a cultural or community initiative?",
          text: "Let's discuss program design, coordination and tools suited to its context."
        },
        default: {
          title: "Have a project and looking for the right collaborator?",
          text: "Share the idea so we can define a suitable scope and next step."
        }
      },
      notFoundTitle: "Project not found",
      notFoundText: "The link may be incorrect or this page may be unavailable.",
      articlesEyebrow: "The blog",
      articlesTitle: "The Blog",
      articlesDescription: "Editorial articles and practical guides on operations, learning design, visual documentation, culture and media.",
      articlesIntro: "Articles and practical guides organized by field, with a clear account of each article's method and limits, and metadata for any documentary images.",
      blogEyebrow: "Short, practical guides",
      blogTitle: "Practical articles by field",
      blogIntro: "Browse articles by field. Each article explains its purpose and approach, distinguishing editorial discussion from research claims.",
      readArticle: "Read the article",
      blogAll: "All fields",
      articleSourceLabel: "Source and context",
      photoDateLabel: "Image date",
      photoLocationLabel: "Photo location",
      englishEditionNote: "This is a concise English adaptation of the Arabic long-form article.",
      closeArticle: "Close the article",
      readTime: "min read",
      tryItLabel: "Try it now",
      newsletterEyebrow: "More notes, later",
      newsletterTitle: "Email newsletter coming soon",
      newsletterText: "A subscription link will appear here once the newsletter is set up. New material will be shared on this page until then.",
      newsletterCta: "Visit the newsletter",
      publishedEyebrow: "Selected published work",
      publishedTitle: "Documented guides & content",
      publishedIntro: "Published work connected to documented projects, with a link to each project's details.",
      publishedType: "Published output",
      publishedDetails: "View project details",
      researchAuthorLabel: "Prepared by",
      researchSupervisorLabel: "Supervised by",
      aboutEyebrow: "About Nada",
      aboutTitle: "Nada Elsebaee",
      contactEyebrow: "A space to collaborate",
      contactTitle: "Let’s make something meaningful",
      contactIntro: "Have an art or culture project, or an idea you’d like to explore together? I’d love to hear about it. Choose the easiest way to reach me.",
      formEyebrow: "A note through the site",
      formTitle: "Tell me about your idea",
      formIntro: "Fill in the details and message sending will be available soon. For now, reach me by email or WhatsApp.",
      formNameLabel: "Name",
      formEmailLabel: "Email",
      formSubjectLabel: "Subject",
      formMessageLabel: "Message",
      formSubmit: "Send message",
      formSetupPending: "The form is being set up and cannot send messages yet. You can reach me directly by email or WhatsApp.",
      formSending: "Sending your message…",
      formSuccess: "Your message was sent successfully. Thank you for reaching out.",
      formError: "Your message could not be sent right now. Please try again or email us directly.",
      formUnavailable: "Form delivery is not enabled yet. You can contact us directly by email.",
      formConfigError: "The form could not be sent because its endpoint is invalid. Please contact us by email.",
      emailLabel: "Send me an email",
      phoneLabel: "Chat with me on WhatsApp",
      linkedinLabel: "LinkedIn",
      contactLinkHint: "Open link",
      articlesPage: "Blog",
      studioPage: "Studio",
      backToTop: "Back to top",
      previousPage: "Go to previous page",
      playVideo: "Play video: ",
      studioEyebrow: "The studio",
      studioTitle: "A Space for Visual Stories",
      studioIntro: "A collection of videos and visual work reflecting a range of projects, experiences and creative approaches.",
      studioCta: "Explore the studio",
      studioVideosLabel: "Selected studio videos",
      projectVideosTitle: "Project videos",
      studioWorkTitle: "Selected Visual Work",
      studioWorkIntro: "Selected visual materials and behind-the-scenes images from a range of projects.",
      writingArchiveHeading: "Writing Experience",
      stylingWorkDetails: "Styling roles",
      servicesEyebrow: "Ways to work together",
      servicesTitle: "Services that connect vision with delivery",
      servicesIntro: "Practical solutions for companies, NGOs, cultural organizations and media projects.",
      servicesMore: "Explore services",
      serviceDetails: "Service details",
      featuredEyebrow: "Selected from the archive",
      featuredTitle: "An exceptional journey",
      viewArchive: "View the full archive",
      approachEyebrow: "Approach",
      approachTitle: "From understanding context to tangible delivery",
      aboutLink: "More about Nada",
      writingEyebrow: "The blog",
      writingTitle: "Practical ideas and room to read",
      writingText: "Articles and practical guides on operations, learning design, visual documentation, culture and media.",
      writingCta: "Explore the blog",
      hero: {
        eyebrow: "Nada Elsebaee Lab | Cairo, Egypt",
        headline: "Designing an exceptional experience",
        subtitle: "Visual production · Cultural & artistic management · Educational research & design · Operations & e-commerce · AI",
        intro: "Multimedia · Creative documentation — building operating systems and designing tools and creative content, from cultural and community initiatives to e-commerce.",
        projectsCta: "Browse the experience archive",
        contactCta: "Get in touch",
        proof: "More than 11 years of professional experience since 2014",
        portraitAlt: "Portrait of Nada Elsebaee",
        portraitCaption: "Nada Elsebaee",
        studioImageAlt: "A still from Lawha, one of the studio's visual works",
        statYears: "+11",
        statYearsLabel: "years of experience since 2014",
        statFields: "5",
        statFieldsLabel: "connected professional fields",
        statPartners: "Projects",
        statPartnersLabel: "documented across local and international work"
      }
    }
  },
  aboutPage: {
    ar: {
      subtitle: "الإبداع برؤية منهجية، من الفكرة إلى التنفيذ.",
      intro: "أعمل عند تقاطع الإبداع والبحث والإدارة، وأهتم بتطوير المشروعات التي تجمع بين المحتوى والمعرفة والتنفيذ العملي.",
      experienceStory: "على مدار مساري المهني، الذي بدأ عام 2014، تنقلت بين مجالات متعددة، من إدارة العمليات والتجارة الإلكترونية وتطوير أنظمة العمل، إلى البحث الثقافي وتصميم الأدوات والمناهج، وصناعة الأفلام والتوثيق البصري وإدارة الإنتاج الإبداعي.",
      projectStory: "يساعدني هذا التنوع على فهم المشروعات من زوايا مختلفة؛ من فهم السياق وتحديد الاحتياجات، إلى تصميم الحلول وتنظيم الموارد والفرق، ثم إنتاج مخرجات واضحة وقابلة للتطبيق.",
      partnersStory: "شاركت في تنفيذ وقيادة مشروعات ثقافية ومجتمعية وتنموية بالتعاون مع جهات ومؤسسات محلية ودولية، من بينها UNESCO وCARE International وHabitat for Humanity وEUNIC وMakanuna.",
      beliefStory: "أؤمن أن الإبداع لا ينفصل عن المنهجية، وأن الأفكار الجيدة تحتاج إلى بحث وتخطيط وأنظمة عمل مناسبة حتى تتحول إلى نتائج ملموسة.",
      experienceLabel: "خبرة تجمع بين مجالات متعددة",
      experienceValue: "2014–2026",
      experienceCaption: "إدارة العمليات، البحث الثقافي، والإنتاج الإبداعي",
      portraitAlt: "صورة شخصية مهنية لندى السباعي",
      workCta: "الأعمال والمشروعات",
      contactCta: "للتواصل",
      competenciesEyebrow: "مجالات العمل",
      competenciesTitle: "خبرات متكاملة من البحث إلى التنفيذ",
      competenciesSummary: "من الفكرة إلى نظام يعمل.",
      competencies: [
        {
          title: "إدارة المشروعات والعمليات",
          items: ["تطوير وتنظيم العمليات التشغيلية", "تحليل العمليات وفرص التحسين", "تصميم هياكل ومسارات العمل", "إدارة وتنسيق فرق العمل", "إدارة عمليات التجارة الإلكترونية"]
        },
        {
          title: "البحث والتنمية الثقافية",
          items: ["البحث والتحليل الاجتماعي والثقافي", "تصميم أدوات ومقاييس سلوكية", "تحليل المشكلات والسياقات المجتمعية", "إعداد الأدلة والمواد التطبيقية", "المشاركة في تصميم وتنفيذ المبادرات الثقافية والتنموية"]
        },
        {
          title: "الإنتاج الإبداعي والبصري",
          items: ["صناعة الأفلام الوثائقية", "التصوير الفوتوغرافي والتوثيق البصري", "تطوير السرد القصصي والبصري", "إدارة وتنسيق الإنتاج الإبداعي", "التصميم وإعداد المواد البصرية"]
        },
        {
          title: "التعليم وتطوير المحتوى",
          items: ["تطوير المحتوى والمواد التعليمية", "تصميم التجارب والأنشطة التعليمية", "إعداد الأدلة والمناهج التطبيقية", "تيسير الورش والأنشطة التشاركية"]
        },
        {
          title: "الأنظمة الرقمية وأتمتة العمل",
          items: ["إدارة منصات التجارة الإلكترونية، ومنها Shopify", "تنظيم قواعد البيانات باستخدام Notion وAirtable", "تصميم مسارات العمل الرقمية", "توظيف أدوات الذكاء الاصطناعي وهندسة الأوامر لدعم الإنتاج والعمليات"]
        }
      ],
      educationEyebrow: "التعليم والمؤهلات",
      educationTitle: "التعليم والمؤهلات",
      education: [
        {
          title: "دبلوم دراسات عليا مهني في التنمية الثقافية",
          institution: "جامعة القاهرة",
          year: "2023–2025"
        },
        {
          title: "دبلوم في إخراج وصناعة الأفلام",
          institution: "أكاديمية كاليبر وبدرخان",
          year: "2019"
        },
        {
          title: "بكالوريوس الآداب في علم النفس",
          institution: "جامعة عين شمس",
          year: "2019"
        }
      ],
      trainingEyebrow: "التعلّم المستمر",
      trainingTitle: "شهادات ودورات تدريبية مختارة",
      trainings: [
        {
          title: "التصميم التعليمي",
          issuer: "منصة مهارة-تك",
          year: "2026"
        },
        {
          title: "معمل الثقافة للتنمية (Culture Lab for Development)",
          issuer: "جمعية ألوان وأوتار بدعم من اليونسكو IFCD",
          year: "2024–2025"
        },
        {
          title: "السرد القصصي الرقمي (Digital Storytelling)",
          issuer: "منصة إدراك",
          year: "2022"
        },
        {
          title: "من الفكرة إلى الشركة: مقدمة في ريادة الأعمال",
          issuer: "منصة إدراك",
          year: "2022"
        },
        {
          title: "إدارة الأعمال والشركات (Leading Businesses)",
          issuer: "منصة فرصة FORSA",
          year: "2021"
        },
        {
          title: "قيادة التغيير (Change Leadership)",
          issuer: "منصة إدراك",
          year: "2021"
        },
        {
          title: "توقع المخاطر المتعلقة بالمشاريع (Anticipate Risks Related to Project)",
          issuer: "DisasterReady.org",
          issuerUrl: "https://disasterready.org/",
          year: "2021"
        },
        {
          title: "تسويق الخدمات (Services Marketing)",
          issuer: "منصة معارف M3aarf",
          year: "2021"
        },
        {
          title: "إدارة المنتجات في الشركات (Product in Companies)",
          issuer: "منصة معارف M3aarf",
          year: "2021"
        }
      ],
      publicationsEyebrow: "مختارات من الأعمال",
      publicationsTitle: "إصدارات وأعمال بارزة",
      approachEyebrow: "منهج العمل",
      approachTitle: "من فهم السياق إلى إنجاز ملموس",
      approachIntro: "أتعامل مع كل مشروع باعتباره منظومة مترابطة، وليس مجرد مجموعة مهام منفصلة. أبدأ بفهم الاحتياج والسياق، ثم أحدد الأدوات والخبرات المناسبة، وأعمل على تحويل الفكرة إلى خطوات ومخرجات قابلة للتنفيذ.",
      ctaEyebrow: "لنتحدث عن مشروعك",
      ctaTitle: "إبداع موجه بمنهجية، وخبرة تتحول إلى عمل ملموس.",
      ctaText: "للمشروعات الثقافية والتنموية والإبداعية، ولتطوير المحتوى والعمليات وأنظمة العمل، يسعدني استكشاف فرص التعاون وتطوير حلول تتناسب مع احتياجات كل مشروع.",
      metaTitle: "عن ندى السباعي | مختبر ندى السباعي",
      metaDescription: "ندى السباعي تعمل عند تقاطع الإبداع والبحث والإدارة، بخبرة منذ 2014 في المشروعات الثقافية والعمليات والإنتاج الإبداعي والتعليمي والأنظمة الرقمية."
    },
    en: {
      subtitle: "Creativity with a method, from idea to execution.",
      intro: "I work at the intersection of creativity, research and management, developing projects that bring content, knowledge and practical delivery together.",
      experienceStory: "Since beginning my professional path in 2014, I have worked across operations management, e-commerce and workflow development; cultural research and the design of tools and curricula; and filmmaking, visual documentation and creative production management.",
      projectStory: "This range helps me understand projects from different angles: learning the context and needs, designing solutions, organizing resources and teams, and producing clear, practical outcomes.",
      partnersStory: "I have contributed to and led cultural, community and development projects with local and international organizations, including UNESCO, CARE International, Habitat for Humanity, EUNIC and Makanuna.",
      beliefStory: "I believe creativity and methodology belong together. Strong ideas need research, planning and suitable ways of working to become tangible results.",
      experienceLabel: "Experience across connected fields",
      experienceValue: "2014–2026",
      experienceCaption: "Operations, cultural research & creative production",
      portraitAlt: "Professional portrait of Nada Elsebaee",
      workCta: "Explore my work",
      contactCta: "Get in touch",
      competenciesEyebrow: "Areas of practice",
      competenciesTitle: "Connected experience from research to delivery",
      competenciesSummary: "From an idea to a working system.",
      competencies: [
        {
          title: "Project & Operations Management",
          items: ["Developing and organizing operational processes", "Analyzing processes and improvement opportunities", "Designing work structures and workflows", "Managing and coordinating teams", "Managing e-commerce operations"]
        },
        {
          title: "Research & Cultural Development",
          items: ["Social and cultural research and analysis", "Designing behavioral tools and scales", "Analyzing social issues and contexts", "Preparing practical guides and materials", "Contributing to cultural and development initiatives"]
        },
        {
          title: "Creative & Visual Production",
          items: ["Documentary filmmaking", "Photography and visual documentation", "Developing visual storytelling", "Managing and coordinating creative production", "Designing and preparing visual materials"]
        },
        {
          title: "Education & Content Development",
          items: ["Developing learning content and materials", "Designing learning experiences and activities", "Preparing practical guides and curricula", "Facilitating participatory workshops and activities"]
        },
        {
          title: "Digital Systems & Workflow Automation",
          items: ["Managing e-commerce platforms, including Shopify", "Organizing databases with Notion and Airtable", "Designing digital workflows", "Using AI tools and prompt engineering to support production and operations"]
        }
      ],
      educationEyebrow: "Education & qualifications",
      educationTitle: "Education",
      education: [
        {
          title: "Postgraduate Professional Diploma in Cultural Development",
          institution: "Cairo University",
          year: "2023–2025"
        },
        {
          title: "Diploma in Filmmaking",
          institution: "Caliber & Badrakhan Academy",
          year: "2019"
        },
        {
          title: "Bachelor of Arts in Psychology",
          institution: "Ain Shams University",
          year: "2019"
        }
      ],
      trainingEyebrow: "Continuous learning",
      trainingTitle: "Selected courses & professional training",
      trainings: [
        {
          title: "Instructional Design",
          issuer: "Mahara-Tech",
          year: "2026"
        },
        {
          title: "Culture Lab for Development",
          issuer: "Alwan wa Awtar Association, supported by UNESCO IFCD",
          year: "2024–2025"
        },
        {
          title: "Digital Storytelling",
          issuer: "Edraak",
          year: "2022"
        },
        {
          title: "From Idea to Company: An Introduction to Entrepreneurship",
          issuer: "Edraak",
          year: "2022"
        },
        {
          title: "Leading Businesses",
          issuer: "Forsa",
          year: "2021"
        },
        {
          title: "Change Leadership",
          issuer: "Edraak",
          year: "2021"
        },
        {
          title: "Anticipate Risks Related to Project",
          issuer: "DisasterReady.org",
          issuerUrl: "https://disasterready.org/",
          year: "2021"
        },
        {
          title: "Services Marketing",
          issuer: "M3aarf",
          year: "2021"
        },
        {
          title: "Product in Companies",
          issuer: "M3aarf",
          year: "2021"
        }
      ],
      publicationsEyebrow: "Selected work",
      publicationsTitle: "Publications & notable media",
      approachEyebrow: "My approach",
      approachTitle: "From understanding context to tangible delivery",
      approachIntro: "I treat each project as a connected system, not a set of isolated tasks. I start by understanding its needs and context, identify the right tools and expertise, then turn the idea into actionable steps and deliverables.",
      ctaEyebrow: "Let's discuss your project",
      ctaTitle: "Creativity guided by method, and experience turned into meaningful work.",
      ctaText: "Whether you are working on a cultural, development or creative project, or need to develop content, operations or ways of working, I welcome the opportunity to explore collaboration and shape solutions around your project's needs.",
      metaTitle: "About Nada Elsebaee | Nada Elsebaee Lab",
      metaDescription: "Nada Elsebaee works across creativity, research and management, with experience since 2014 in cultural projects, operations, creative and educational production, and digital systems."
    }
  },
  services: {
    ar: {
      pageTitle: "الخدمات | مختبر ندى السباعي",
      pageDescription: "خدمات ندى السباعي في التوثيق البصري والإنتاج الإعلامي، تنسيق المشاريع الثقافية، التصميم التعليمي، استراتيجية المحتوى والعمليات الرقمية.",
      eyebrow: "مساحات للتعاون",
      title: "حلول عملية من الفكرة إلى التنفيذ",
      intro: "حلول عملية مصممة للشركات والمنظمات غير الحكومية والكيانات الثقافية والمشاريع الإعلامية.",
      contactTitle: "مساحة للشراكة وطلب الاستشارة",
      whatsappCta: "مشروع جديد عبر واتساب",
      emailCta: "استفسار عبر البريد",
      openProject: "تفاصيل المشروع",
      services: [
        {
          title: "التوثيق والإنتاج الفني",
          description: "تخطيط وتنفيذ التوثيق الفوتوغرافي والمرئي، وإنتاج الأفلام والمواد الفنية، وإدارة التغطية الميدانية ولوجستياتها. يشمل ذلك تطوير تصورات ومواد مرئية مولّدة أو مدعومة بأدوات الذكاء الاصطناعي عند ملاءمتها للمشروع، مع مراجعة فنية وبشرية قبل الاستخدام.",
          image: "assets/images/services/visual-documentation.webp",
          summary: "التوثيق الميداني وإنتاج الأفلام والمواد الفنية، بما فيها مخرجات إبداعية مدعومة بالذكاء الاصطناعي.",
          examples: [
            {
              label: "ناسجات النيل",
              projectId: "nassajat-alnil"
            },
            {
              label: "الفيلم القصير المستقل «لوحة»",
              projectId: "lawha"
            },
            {
              label: "الأرشفة الرقمية ومشروعات فنون الأداء",
              projectId: "hakim-archive"
            }
          ]
        },
        {
          title: "تصميم وتنسيق المشروعات الثقافية والفنية والتعليمية",
          description: "تصميم وتنسيق برامج ومشروعات ثقافية وفنية وتعليمية انطلاقًا من احتياجات المشاركين وسياقهم. يشمل العمل إعداد أدوات البحث والتعلّم والتقييم، وتطوير الأدلة والورش وتيسيرها، والتنسيق مع الشركاء.",
          image: "assets/images/services/cultural-project-design.webp",
          summary: "تصميم البرامج والمواد التعليمية وأدوات البحث والتقييم، وتنسيق تنفيذها مع الشركاء.",
          examples: [
            {
              label: "دليل سوا سوا لمواجهة التنمر",
              projectId: "sawa-sawa"
            },
            {
              label: "مبادرة أمتن",
              projectId: "dar-al-mabra"
            },
            {
              label: "ورش السيكودراما مع CARE International",
              projectId: "care-lecaire"
            }
          ]
        },
        {
          title: "سرد العلامات التجارية واستراتيجية المحتوى",
          description: "بناء صوت تحريري متسق، وتأليف سلاسل سردية ثقافية وقصص أصل المنتجات، وصياغة المحتوى التنفيذي. يمكن توظيف أدوات الذكاء الاصطناعي للبحث الأولي وتوليد مسودات أو بدائل، مع التحقق من المعلومات والتحرير البشري قبل النشر.",
          image: "assets/images/services/brand-storytelling.webp",
          summary: "سرد العلامة وقصص المنتجات ومحتوى تحريري، مع استخدام منضبط لأدوات الذكاء الاصطناعي.",
          examples: [
            {
              label: "إدارة GAIA Global",
              projectId: "gaia-global"
            },
            {
              label: "Mastery Academy: تأسيس فرع مصر والإنتاج الإبداعي",
              projectId: "mastery-academy"
            }
          ]
        },
        {
          title: "إدارة وتطوير الحضور الرقمي",
          description: "تحديد المنصات الملائمة للأهداف والجمهور، وبناء خطة محتوى وتقويم نشر، وإدارة سير الإنتاج والمراجعة وقراءة مؤشرات الأداء. يمكن توظيف أدوات الذكاء الاصطناعي لدعم البحث وتكييف الصيغ، دون استبدال المراجعة التحريرية أو صوت الجهة.",
          image: "assets/images/services/digital-presence.webp",
          summary: "استراتيجية منصات ومحتوى ونشر وقياس أداء، مع دعم أدوات AI عند الحاجة.",
          examples: [
            {
              label: "إدارة GAIA Global",
              projectId: "gaia-global"
            }
          ]
        },
        {
          title: "دراسات السوق وتحليل الجمهور",
          description: "تصميم أسئلة البحث وأدوات جمع البيانات، وتنفيذ مراجعة مكتبية أو ميدانية لفهم الجمهور والمنافسين والفرص. تُنظّم النتائج وتُحلل وتُقدّم في صورة استنتاجات وحدود واضحة وخطوات قابلة للتطبيق؛ ويمكن استخدام أدوات AI للمساندة بعد مراعاة الخصوصية والتحقق.",
          image: "assets/images/services/market-research.webp",
          summary: "بحث الجمهور والسوق وتحويل الأدلة إلى قرارات عملية، مع توظيف مسؤول لأدوات التحليل.",
          examples: [
            {
              label: "إدارة GAIA Global",
              projectId: "gaia-global"
            }
          ]
        },
        {
          title: "تطوير الاستراتيجيات والخطط",
          description: "صياغة استراتيجيات وخطط مؤسسية ورقمية وفنية إبداعية انطلاقًا من تحليل الوضع والأهداف والموارد، ثم تحويلها إلى مراحل ومسؤوليات ومؤشرات متابعة قابلة للقياس. تُستخدم الأدوات الرقمية والذكاء الاصطناعي للمساندة في التنظيم والاستكشاف، مع مراجعة المخرجات وربطها بالأدلة.",
          image: "assets/images/services/strategy-planning.webp",
          summary: "استراتيجيات قابلة للتنفيذ بمراحل ومسؤوليات ومؤشرات واضحة وأدوات رقمية مساندة.",
          examples: [
            {
              label: "إدارة GAIA Global",
              projectId: "gaia-global"
            },
            {
              label: "Mastery Academy: تأسيس فرع مصر والإنتاج الإبداعي",
              projectId: "mastery-academy"
            }
          ]
        }
      ]
    },
    en: {
      pageTitle: "Services | Nada Elsebaee Lab",
      pageDescription: "Nada Elsebaee's services in visual documentation, media production, cultural project coordination, instructional design, content strategy and digital operations.",
      eyebrow: "Ways to work together",
      image: "assets/images/projects/screenplays.webp",
      title: "Practical solutions from idea to delivery",
      intro: "Practical solutions for companies, NGOs, cultural organizations and media projects.",
      contactTitle: "Let's discuss a project or a consultation tailored to your needs",
      whatsappCta: "Start a project on WhatsApp",
      emailCta: "Send an email inquiry",
      openProject: "Explore the project",
      services: [
        {
          title: "Visual Documentation & Creative Production",
          description: "Planning and delivering photographic and video documentation, films, creative assets and field-production logistics. This can include visual concepts and assets generated or supported by AI tools when suitable to the project, with human and creative review before use.",
          image: "assets/images/services/visual-documentation.webp",
          summary: "Field documentation, film and creative production, including carefully reviewed AI-assisted outputs.",
          examples: [
            {
              label: "Nassajat El Nile",
              projectId: "nassajat-alnil"
            },
            {
              label: "Independent short film Lawha",
              projectId: "lawha"
            },
            {
              label: "Digital archives and performing arts projects",
              projectId: "hakim-archive"
            }
          ]
        },
        {
          title: "Cultural, Arts & Education Project Design and Coordination",
          description: "Designing and coordinating cultural, arts and education projects around participant needs and context. Work includes research, learning and evaluation tools, practical guides, workshop design and facilitation, and coordination with project partners.",
          image: "assets/images/services/cultural-project-design.webp",
          summary: "Designing programs, learning resources and research and evaluation tools, and coordinating their delivery with partners.",
          examples: [
            {
              label: "Sawa Sawa anti-bullying guide",
              projectId: "sawa-sawa"
            },
            {
              label: "Amton initiative",
              projectId: "dar-al-mabra"
            },
            {
              label: "Psychodrama workshops with CARE International",
              projectId: "care-lecaire"
            }
          ]
        },
        {
          title: "Brand Storytelling & Content Strategy",
          description: "Building an editorial voice through cultural storytelling, product-origin narratives and executive copy. AI tools can support initial research, ideation and draft variations, followed by fact-checking and human editing before publication.",
          image: "assets/images/services/brand-storytelling.webp",
          summary: "Brand storytelling and editorial content with considered, human-reviewed AI support.",
          examples: [
            {
              label: "GAIA Global",
              projectId: "gaia-global"
            },
            {
              label: "Mastery Academy: Egypt setup & creative production",
              projectId: "mastery-academy"
            }
          ]
        },
        {
          title: "Digital Presence Management & Growth",
          description: "Selecting platforms for audience and goals, developing content plans and publishing calendars, coordinating production and reviewing performance. AI tools may support research and format adaptation without replacing editorial review or the organization's voice.",
          image: "assets/images/services/digital-presence.webp",
          summary: "Platform, content and publishing strategy with performance review and optional AI support.",
          examples: [
            {
              label: "GAIA Global",
              projectId: "gaia-global"
            }
          ]
        },
        {
          title: "Market Research & Audience Analysis",
          description: "Designing research questions and collection tools, then conducting desk or field research into audience needs, competitors and opportunities. Findings are organized with clear evidence and limitations; AI tools may assist analysis subject to privacy and verification.",
          image: "assets/images/services/market-research.webp",
          summary: "Audience and market research translated into evidence-based decisions, with responsible analytical tools.",
          examples: [
            {
              label: "GAIA Global",
              projectId: "gaia-global"
            }
          ]
        },
        {
          title: "Institutional, Digital & Creative Strategy",
          description: "Developing institutional, digital and creative strategies from a review of context, objectives and resources, then translating them into phases, responsibilities and measurable indicators. Digital and AI tools can support organization and exploration, with outputs reviewed against evidence.",
          image: "assets/images/services/strategy-planning.webp",
          summary: "Actionable strategies with clear phases, ownership and measures, supported by appropriate digital tools.",
          examples: [
            {
              label: "GAIA Global",
              projectId: "gaia-global"
            },
            {
              label: "Mastery Academy: Egypt setup & creative production",
              projectId: "mastery-academy"
            }
          ]
        }
      ]
    }
  },
  categories: [
    {
      id: "operations",
      ar: "العمليات والتجارة الإلكترونية",
      en: "Operations & e-commerce"
    },
    {
      id: "writing",
      ar: "الكتابة والمحتوى",
      en: "Writing & content"
    },
    {
      id: "research",
      ar: "البحث والتنمية الثقافية",
      en: "Research & cultural development"
    },
    {
      id: "visual",
      ar: "الإنتاج والتوثيق البصري",
      en: "Visual production & documentation"
    },
    {
      id: "education",
      ar: "التعليم والإنتاج الإبداعي",
      en: "Education & creative production"
    },
    {
      id: "community",
      ar: "المشاريع المجتمعية",
      en: "Community projects"
    }
  ],
  capabilities: {
    ar: [
      {
        title: "الفهم والبحث",
        text: "تحليل السياق والاحتياجات، وجمع المعلومات، وتحديد المشكلات والفرص."
      },
      {
        title: "التصميم والتخطيط",
        text: "تطوير الأفكار والأدوات والمحتوى، وتصميم الحلول ومسارات العمل المناسبة."
      },
      {
        title: "التنظيم والتنفيذ",
        text: "تنسيق الموارد والفرق والعمليات، ومتابعة تنفيذ المشروع ومراحله المختلفة."
      },
      {
        title: "الإنتاج والتوثيق",
        text: "تحويل الأفكار إلى مخرجات عملية وبصرية وتعليمية، مع توثيق التجربة ومراحل العمل."
      },
      {
        title: "التطوير والتحسين",
        text: "مراجعة النتائج، وتحديد فرص التحسين، وتطوير الأنظمة والمخرجات وفق احتياجات المشروع."
      }
    ],
    en: [
      {
        title: "Understand & Research",
        text: "Analyze context and needs, gather information, and identify challenges and opportunities."
      },
      {
        title: "Design & Plan",
        text: "Develop ideas, tools and content, then design suitable solutions and workflows."
      },
      {
        title: "Organize & Deliver",
        text: "Coordinate resources, teams and operations, and follow the project's delivery and stages."
      },
      {
        title: "Produce & Document",
        text: "Turn ideas into practical, visual and educational outputs while documenting the experience and process."
      },
      {
        title: "Develop & Improve",
        text: "Review results, identify opportunities to improve, and refine systems and outputs to meet project needs."
      }
    ]
  },
  studioVideos: [
    {
      videoId: "19Dd1IYT_qo",
      projectId: "nassajat-alnil",
      arTitle: "ناسجات النيل · 01",
      enTitle: "Weavers of the Nile · 01"
    },
    {
      videoId: "O8RzVT-DG1k",
      projectId: "nassajat-alnil",
      arTitle: "ناسجات النيل · 02",
      enTitle: "Weavers of the Nile · 02"
    },
    {
      videoId: "L-MSt3wE81A",
      projectId: "alasmarat",
      arTitle: "حكاية حيينا: الأسمرات",
      enTitle: "The Story of Our Neighborhood: Al-Asmarat"
    },
    {
      videoId: "1vPOFFTtjMY",
      projectId: "darb-al-ahmar-tour",
      arTitle: "عدسة مكاننا · جولة الدرب الأحمر",
      enTitle: "Makanuna Lens · Darb al-Ahmar Tour"
    },
    {
      videoId: "Lp1wsZy8-Pc",
      projectId: "gaia-global",
      arTitle: "GAIA Global · فيديو AI 01",
      enTitle: "GAIA Global · AI Video 01"
    },
    {
      videoId: "eIhR4Q_UcKw",
      projectId: "gaia-global",
      arTitle: "GAIA Global · فيديو AI 02",
      enTitle: "GAIA Global · AI Video 02"
    },
    {
      videoId: "mVXZs8flABs",
      projectId: "gaia-global",
      arTitle: "GAIA Global · فيديو AI 03",
      enTitle: "GAIA Global · AI Video 03"
    },
    {
      videoId: "5Du63JOZ3kM",
      projectId: "gaia-global",
      arTitle: "GAIA Global · فيديو AI 04",
      enTitle: "GAIA Global · AI Video 04"
    },
    {
      videoId: "_i_kjJcf2u0",
      projectId: "gaia-global",
      arTitle: "GAIA Global · فيديو AI 05",
      enTitle: "GAIA Global · AI Video 05"
    },
    {
      videoId: "IBz32OPt9rE",
      projectId: "gaia-global",
      arTitle: "GAIA Global · فيديو AI 06",
      enTitle: "GAIA Global · AI Video 06"
    },
    {
      videoId: "4g0vl2CBbi0",
      projectId: "lawha",
      arTitle: "لوحة — الفيلم الأصلي",
      enTitle: "Lawha — Original film"
    },
    {
      videoId: "Wy_BOSZIYtE",
      projectId: "sky-events",
      arTitle: "كواليس تصوير فيديو كليب جامعة الجلالة",
      enTitle: "Galala University music video — behind-the-scenes documentation"
    }
  ],
  studioVisualProjects: ["lawha", "gelsa-orfeya", "bara-geiby"],
  projects: [
    {
      id: "gaia-global",
      category: "operations",
      image: "assets/images/projects/assetsimagesprojectsgaia-global.webp",
      gallery: projectGallery(
        [
          "assetsimagesprojectsgaia-global (2).webp",
          "assetsimagesprojectsgaia-global (3).webp",
          "assetsimagesprojectsgaia-global (4).webp"
        ],
        "صورة من تشكيلات مجوهرات GAIA Global",
        "Image from GAIA Global jewellery collections"
      ),
      years: "يونيو 2025 – يونيو 2026",
      organization: "GAIA Global",
      role: "المدير العام ومدير عمليات التجارة الإلكترونية",
      title: "GAIA Global — إدارة العمليات والتجارة الإلكترونية",
      summary: "قيادة العمليات والتجارة الإلكترونية لعلامة فاخرة تعمل عبر Shopify.",
      scope: [
        "إدارة منصة Shopify ومتابعة المخزون وسلاسل الإمداد واللوجستيات وتجربة العملاء ومؤشرات الأداء.",
        "تطوير إجراءات التشغيل القياسية (SOPs) وتنسيق العمل بين الفرق وقنوات التواصل وبرنامج Shopify Collabs.",
        "صياغة سلسلة Decoding Beauty التي تمزج التاريخ الطبيعي والميثولوجيا والحقائق العلمية.",
        "استخدام هندسة أوامر الذكاء الاصطناعي لدعم أصول العلامة التجارية وتنظيم CRM."
      ],
      outcomes: [
        "سلسلة Decoding Beauty ومقاطع GAIA المنشورة.",
        "تطوير تصميم التغليف بما خفّض هدر المواد بأكثر من 70% والمرتجعات بأكثر من 10%، وفق الملف المهني."
      ],
      links: [
        [{ ar: "الموقع الرسمي لـ GAIA Global", en: "GAIA Global official website" }, "https://gaia-global.shop/"]
      ],
      en: {
        years: "June 2025 – June 2026",
        organization: "GAIA Global",
        title: "GAIA Global — Operations & e-commerce",
        summary: "Led operations and e-commerce for a luxury brand working on Shopify.",
        role: "General Manager & E-commerce Operations Manager",
        scope: [
          "Managed Shopify operations across inventory, supply chain, logistics, customer experience and performance indicators.",
          "Developed standard operating procedures (SOPs) and coordinated work across teams, communication channels and Shopify Collabs.",
          "Created the Decoding Beauty series, combining natural history, mythology and scientific facts.",
          "Used AI prompt engineering to support brand assets and CRM organization."
        ],
        outcomes: [
          "The Decoding Beauty series and published GAIA videos.",
          "Packaging design changes reduced material waste by more than 70% and returns by more than 10%, as stated in the professional profile."
        ]
      }
    },
    {
      id: "sawa-sawa",
      category: "research",
      image: "assets/images/projects/sawa-sawa.webp",
      years: "2024 – 2025",
      organization: "جمعية ألوان وأوتار · بدعم صندوق اليونسكو الدولي للتنوع الثقافي (UNESCO IFCD)",
      role: "مؤلفة محتوى تعليمي وقائدة مشروع",
      title: "سوا سوا — دليل ومقياس سلوكي",
      summary: "مشروع تطبيقي لدعم المعلمين ومديري المساحات الآمنة في التعامل مع التنمر بين الأطفال من 11 إلى 14 عامًا.",
      scope: [
        "تأليف دليل تطبيقي لرصد التنمر والاستجابة له في السياقات التربوية.",
        "تصميم مقياس للتنمر لدى الأطفال وتكييفه لغويًا وثقافيًا.",
        "تنسيق العمل الميداني والشراكات مع أنا مصري ودوار عزبة ومجموعة صديقي في القاهرة وقنا."
      ],
      outcomes: ["دليل سوا سوا المنشور بدعم UNESCO IFCD عام 2025."],
      links: [
        [
          "تحميل دليل سوا سوا (PDF)",
          "https://alwan-awtar.org/wp-content/uploads/2025/04/Sawa-Sawa_A-Mapping-Survey-for-Bullying.pdf"
        ]
      ],
      en: {
        years: "2024 – 2025",
        organization: "Alwan wa Awtar · UNESCO International Fund for Cultural Diversity (IFCD)",
        title: "Sawa Sawa — Applied guide and behavioral scale",
        summary: "An applied project supporting teachers and safe-space managers addressing bullying among children aged 11–14.",
        role: "Lead Instructional Content Author & Project Manager",
        scope: [
          "Authored an applied guide for identifying and responding to bullying in educational settings.",
          "Designed and culturally and linguistically adapted a child bullying scale.",
          "Coordinated fieldwork and partnerships with Ana Masry, Dawar Ezbet and Sadeeqy Group in Cairo and Qena."
        ],
        outcomes: ["The Sawa Sawa guide, published with UNESCO IFCD support in 2025."]
      }
    },
    {
      id: "nassajat-alnil",
      category: "visual",
      image: "assets/images/projects/nassajat-alnil.webp",
      gallery: projectGallery(
        [
          "assetsimagesprojectsnassajat-alnil (1).webp",
          "assetsimagesprojectsnassajat-alnil (2).webp",
          "assetsimagesprojectsnassajat-alnil (3).webp",
          "assetsimagesprojectsnassajat-alnil (4).webp",
          "assetsimagesprojectsnassajat-alnil (5).webp"
        ],
        "صورة من أنشطة وحرف مشروع ناسجات النيل",
        "Image from Weavers of the Nile craft and project activities"
      ),
      years: "سبتمبر 2024",
      organization: "مبادرة مكاننا · علياء جاليري · مبادرة سيدات النوبة للحرف اليدوية · بتمويل الاتحاد الأوروبي وبالتعاون مع EUNIC مصر",
      role: "قائدة التوثيق البصري ومديرة تصوير (DOP)",
      title: "ناسجات النيل — توثيق بصري وتمكين رقمي",
      summary: "مشروع يوثق الحرف اليدوية في القاهرة وأسوان والنوبة، ويشارك المعرفة البصرية مع الشباب.",
      scope: [
        "قيادة التوثيق الفوتوغرافي والسينمائي للمشروع.",
        "تدريب 20 شابًا وشابة من عمر 12 إلى 18 عامًا على التصوير بالموبايل والمونتاج.",
        "إخراج وإنتاج فيلم وثائقي عُرض في المركز الثقافي الإيطالي بالزمالك."
      ],
      outcomes: ["فيلم وثائقي ومواد مرئية للمشروع."],
      links: [],
      en: {
        years: "September 2024",
        organization: "Makanuna Initiative · Aliaa Gallery · Nubian Women Initiative for Handcrafts · EU-funded with EUNIC Egypt",
        title: "Nassajat El Nile — Visual documentation & digital empowerment",
        summary: "A project documenting handicrafts in Cairo, Aswan and Nubia while sharing visual skills with young people.",
        role: "Visual Documentation Lead & Director of Photography",
        scope: [
          "Led photographic and film documentation for the project.",
          "Trained 20 young people aged 12–18 in mobile photography and editing.",
          "Directed and produced a documentary screened at the Italian Cultural Institute in Zamalek."
        ],
        outcomes: ["A documentary and visual materials for the project."]
      }
    },
    {
      id: "wuf12",
      category: "visual",
      image: "assets/images/projects/wuf12.webp",
      gallery: [
        {
          src: "assets/images/projects/assetsimagesprojectswuf12.webp",
          alt: {
            ar: "توثيق مشاركة Habitat for Humanity في المنتدى الحضري العالمي 12",
            en: "Documentation of Habitat for Humanity's WUF12 participation"
          }
        }
      ],
      years: "نوفمبر 2024",
      organization: "Habitat for Humanity · المنتدى الحضري العالمي WUF12",
      role: "مديرة إنتاج ومديرة تصوير (DOP)",
      title: "WUF12 — الإنتاج والتوثيق البصري",
      summary: "إدارة وتنفيذ التغطية المرئية لمشاركة Habitat for Humanity في المنتدى الحضري العالمي.",
      scope: [
        "تنسيق إنتاج التغطية الفوتوغرافية والفيديو.",
        "جدولة المقابلات وإدارة المخرجات الرقمية والأرشيف في إطار زمني ضيق."
      ],
      outcomes: ["أرشيف رقمي مؤسسي للتغطية."],
      links: [],
      en: {
        years: "November 2024",
        organization: "Habitat for Humanity · World Urban Forum 12",
        title: "WUF12 — Production & visual documentation",
        summary: "Managed and delivered visual coverage of Habitat for Humanity's participation in the World Urban Forum.",
        role: "Production Manager & Director of Photography",
        scope: [
          "Coordinated photo and video coverage production.",
          "Scheduled interviews and managed digital outputs and archive under tight deadlines."
        ],
        outcomes: ["An institutional digital archive of the coverage."]
      }
    },
    {
      id: "dar-al-mabra",
      category: "research",
      image: "assets/images/projects/dar-al-mabra.webp",
      years: "2025 – 2026",
      organization: "دار المبرة للأيتام · مؤسسة مكاننا",
      role: "منسقة بحث تنمية ثقافية ومشاركة في تصميم برنامج أمتن",
      title: "أمتن — بحث وتصميم برنامج ثقافي",
      summary: "تصميم برنامج ثقافي واجتماعي لفتيات ورعاة دار المبرة، يرتكز على المساحات الآمنة والتعبير بالفن والحكي.",
      scope: [
        "تصميم أدوات البحث الكيفي وأدلة المقابلات.",
        "إعداد مقاييس التقييم السلوكي وتحليل شجرة المشكلات.",
        "المساهمة في تصميم وتيسير البرنامج الثقافي والاجتماعي."
      ],
      outcomes: ["أدوات بحث وتصميم برنامج أمتن كما وردت في الملف المرجعي."],
      links: [],
      en: {
        years: "2025 – 2026",
        organization: "Dar Al-Mabara Orphanage · Makanuna Foundation",
        title: "Amten — Cultural research & program design",
        summary: "A cultural and social program designed with girls and caregivers at Dar Al-Mabara, focused on safe spaces and expression through art and storytelling.",
        role: "Cultural Research Coordinator & Program Design Contributor",
        scope: [
          "Designed qualitative research tools and interview guides.",
          "Prepared behavioral evaluation measures and problem-tree analysis.",
          "Contributed to the design and facilitation of the cultural and social program."
        ],
        outcomes: ["Research tools and Amten program design, as described in the reference profile."]
      }
    },
    {
      id: "alasmarat",
      category: "community",
      image: "assets/images/projects/assetsimagesprojectsalasmarat.webp",
      imageAlt: {
        ar: "صورة من مشروع حكاية حيينا: الأسمرات",
        en: "Image from The Story of Our Neighborhood: Al-Asmarat"
      },
      gallery: projectGallery(
        ["assetsimagesprojectsalasmarat.webp", "assetsimagesprojectsalasmarat (2).webp"],
        "صورة توثيقية من مشروع الأسمرات",
        "Documentary image from the Al-Asmarat project"
      ),
      years: "2024",
      organization: "مبادرة مين بيربي مين · علياء جاليري · ورشة ستار ميتال · نظمت الورشة Habitat for Humanity بالشراكة مع مكاننا ومؤسسة بناء، وبالتعاون مع AASMT وتحت رعاية صندوق التنمية الحضرية",
      role: "مصممة مشاركة ومنفذة للفيلم الوثائقي",
      title: "حكاية حيينا: الأسمرات",
      summary: "فيلم وثائقي قصير ضمن ورشة تطوير تشاركي للمساحات العامة في حي الأسمرات.",
      scope: [
        "تصميم وتنفيذ الفيلم الوثائقي بصورة تشاركية مع الشركاء.",
        "توثيق أنشطة شارك فيها أطفال من المنطقة لتصميم ورسم جداريات وجرافيتي."
      ],
      outcomes: ["فيلم وثائقي منشور عن المشروع."],
      links: [],
      en: {
        years: "2024",
        organization: "Meen Byraby Meen Initiative · Aliaa Gallery · Star Metal Workshop · Organized by Habitat for Humanity with Makanuna and BENAA Foundation; in collaboration with AASMT under the patronage of UDF",
        title: "The Story of Our Neighborhood: Al-Asmarat",
        summary: "A short documentary produced as part of a participatory public-space workshop in Al-Asmarat.",
        role: "Documentary Co-designer & Contributor",
        scope: [
          "Co-designed and implemented the documentary with project partners.",
          "Documented activities with children from the neighborhood designing and painting murals and graffiti."
        ],
        outcomes: ["A published documentary about the project."]
      }
    },
    {
      id: "darb-al-ahmar-tour",
      category: "community",
      image: "assets/images/projects/makanuna-visual.webp",
      imageAlt: {
        ar: "صورة من مشروع عدسة مكاننا",
        en: "Image from the Makanuna Lens project"
      },
      gallery: makanunaLensGallery,
      years: "2025",
      organization: "مكاننا · صورة وحكاية",
      role: "مشاركة في التوثيق والتصوير",
      title: "عدسة مكاننا — جولة الدرب الأحمر",
      summary: "جولة تصوير بالهاتف في شوارع وحواري الدرب الأحمر للشباب من عمر 16 إلى 30 عامًا.",
      scope: [
        "المشاركة في التوثيق والتصوير، دون نسبة قيادة الجولة إليها.",
        "قاد الجولة المصور مصطفى الشوربجي والمصورة الناشئة جنى أيمن."
      ],
      outcomes: ["فيديو يوثق الجولة."],
      links: [],
      en: {
        organization: "Makanuna · Soura & Hekaya",
        title: "Makanuna Lens — Darb al-Ahmar photography tour",
        summary: "A mobile-photography tour through Darb al-Ahmar for young people aged 16–30.",
        role: "Documentation & Photography Contributor",
        scope: [
          "Contributed to documentation and photography; the tour is not attributed as her own initiative.",
          "The tour was led by photographer Mustafa Shorbaji and emerging photographer Jana Ayman."
        ],
        outcomes: ["A video documenting the tour."]
      }
    },
    {
      id: "mastery-academy",
      category: "education",
      image: "assets/images/projects/mastery-academy.webp",
      years: "تأسيس المقر: 2018–2019 · الوظيفة: يناير 2021 – يونيو 2022",
      organization: "Mastery Academy",
      role: "مديرة الإنتاج الإبداعي وإدارة العمليات",
      title: "Mastery Academy — الإنتاج التعليمي وإدارة العمليات",
      summary: "إدارة إنتاج المحتوى التعليمي والتدريبي وعملياته، إلى جانب مساهمة تأسيسية منفصلة لتجهيز المقر والاستوديو في مصر.",
      scope: [
        "خلال الوظيفة (يناير 2021 – يونيو 2022): إدارة الإنتاج الإبداعي والعمليات المرتبطة بإنتاج المحتوى التعليمي والتدريبي.",
        "إدارة فريق الإنتاج الإبداعي والفرق الفنية، والتنسيق مع الفرق والمدربين والخبراء في القاهرة والسعودية ومواقع أخرى بحسب احتياج العمل.",
        "الإشراف على إنتاج وتصوير ومونتاج أكثر من 30 دورة تدريبية وتعليمية.",
        "تنسيق جداول المدربين والخبراء، ومتابعة العقود والميزانيات والتسليمات.",
        "مراجعة الحقائب والمحتوى التدريبي قبل التسجيل وبعده، وتنظيم إجراءات العمل والأرشفة الرقمية.",
        "مرحلة تأسيس منفصلة (2018 – 2019): المساهمة في تجهيز المقر الإقليمي والاستوديو الإنتاجي الأول في مصر، بما شمل البنية التقنية ومعدات التصوير والإضاءة والصوت وإجراءات التشغيل الأساسية."
      ],
      outcomes: ["الإشراف على إنتاج أكثر من 30 دورة تدريبية وتعليمية."],
      links: [],
      en: {
        years: "Setup: 2018–2019 · Role: Jan 2021 – Jun 2022",
        organization: "Mastery Academy",
        title: "Mastery Academy — Learning Production & Operations",
        summary: "Managed educational and training-content production and operations, alongside a separate earlier contribution to the Egypt headquarters and studio setup.",
        role: "Creative Production & Operations Manager",
        scope: [
          "During the role (January 2021–June 2022), managed creative production and operations for educational and training content.",
          "Led the creative production team and technical teams, coordinating with teams, trainers and experts in Cairo, Saudi Arabia and other locations as needed.",
          "Oversaw production, filming and editing for more than 30 educational and training courses.",
          "Coordinated trainer and expert schedules and followed up on contracts, budgets and deliverables.",
          "Reviewed training packages and content before and after recording, and organized workflows and the digital archive.",
          "Separate setup phase (2018–2019): contributed to establishing the regional headquarters and Egypt's first production studio, including technical infrastructure, camera, lighting and audio equipment, and basic operating procedures."
        ],
        outcomes: ["Oversaw production of more than 30 educational and training courses."]
      }
    },
    {
      id: "hakim-archive",
      category: "visual",
      years: "2018 – 2019",
      organization: "المكتب الخاص للفنان حكيم",
      role: "مسؤولة أرشيف رقمي ومصورة ومونتيرة",
      title: "أرشيف الفنان حكيم — تصوير ومونتاج",
      summary: "بناء أرشيف رقمي للأعمال الفنية حتى عام 2018، مع توثيق الكواليس والحفلات والفعاليات.",
      scope: [
        "تنظيم وأرشفة مواد فنية ومسرحية وغنائية حتى عام 2018.",
        "تصوير ومونتاج الكواليس والحفلات والفعاليات خلال فترة العمل."
      ],
      outcomes: ["أرشيف رقمي ومواد مصورة وممنتجة."],
      links: [],
      en: {
        years: "2018 – 2019",
        organization: "Private office of singer Hakim",
        title: "Hakim archive — Photography & editing",
        summary: "Built a digital archive of artistic work through 2018 and documented backstage activity, concerts and events.",
        role: "Digital Archivist, Photographer & Editor",
        scope: [
          "Organized and archived artistic, theatrical and musical materials through 2018.",
          "Photographed and edited backstage, concerts and event materials during the engagement."
        ],
        outcomes: ["A digital archive and edited visual materials."]
      }
    },
    {
      id: "care-lecaire",
      category: "community",
      image: "assets/images/projects/care-lecaire.webp",
      gallery: projectGallery(
        ["care-lecaire (2).webp"],
        "صورة جماعية ضمن مشروع CARE International وLe Caire",
        "Group photo from the CARE International and Le Caire project"
      ),
      years: "2019",
      organization: "CARE International · Le Caire",
      role: "ميسرة ومستشارة تدريب",
      title: "CARE International وLe Caire — جلسات حكي وسيكودراما",
      summary: "تيسير جلسات حكي وسيكودراما ضمن برامج دعم وتمكين للنساء.",
      scope: [
        "تيسير جلسات لأكثر من 70 امرأة من المتأثرات بالعنف القائم على النوع الاجتماعي في القاهرة والمنيا.",
        "تنسيق اللوجستيات وإعداد تقارير ودراسات حالة والتوثيق المرئي."
      ],
      outcomes: ["تقارير ميدانية ودراسات حالة؛ لا تُعرض بيانات المشاركات الشخصية."],
      links: [],
      en: {
        years: "2019",
        organization: "CARE International · Le Caire",
        title: "CARE International & Le Caire — Storytelling and psychodrama",
        summary: "Facilitated storytelling and psychodrama sessions within women's support and empowerment programs.",
        role: "Training Consultant & Facilitator",
        scope: [
          "Facilitated sessions for more than 70 women affected by gender-based violence in Cairo and Minya.",
          "Coordinated logistics and prepared reports, case studies and visual documentation."
        ],
        outcomes: ["Field reports and case studies; participants' personal information is not displayed."]
      }
    },
    {
      id: "sky-events",
      category: "visual",
      years: "2015 – 2023 · دوام جزئي",
      organization: "Sky Event Management",
      role: "منسقة ومصورة فعاليات",
      title: "Sky — تنسيق وتغطية الفعاليات",
      summary: "تنسيق لوجستي وميداني وتغطية فوتوغرافية ومرئية للفعاليات.",
      scope: ["تنسيق تفاصيل تنظيم الفعاليات والتغطيات.", "تصوير وتوثيق وأرشفة المواد لاستخدامها في التواصل والتسويق."],
      outcomes: ["خبرة جزئية ممتدة على مدار ثماني سنوات."],
      links: [],
      en: {
        years: "2015 – 2023 · Part-time",
        organization: "Sky Event Management",
        title: "Sky — Event coordination & photography",
        summary: "Field and logistical event coordination with photo and video coverage.",
        role: "Event Coordinator & Photographer (Part-time)",
        scope: [
          "Coordinated event logistics and coverage.",
          "Photographed, documented and archived materials for communication and marketing."
        ],
        outcomes: ["Eight years of part-time experience."]
      }
    },
    {
      id: "selected-styling-work",
      category: "visual",
      image: "assets/images/projects/yomeddine.webp",
      imageAlt: {
        ar: "بوستر فيلم يوم الدين، ضمن أعمال تنسيق الملابس",
        en: "Yomeddine film poster, featured in styling work"
      },
      years: "2014 – 2015",
      organization: "أعمال مختارة في تنسيق الأزياء",
      role: "ستايلست",
      title: "أدوار تنسيق الملابس",
      summary: "ثلاثة أعمال مستقلة في تنسيق الملابس، لكل منها سياقه ومواده الخاصة.",
      scope: [
        "Yomeddine — Stylist، 2015.",
        "TEN Channel — Stylist، 2014–2015.",
        "Batata Film — Stylist."
      ],
      outcomes: [],
      links: [],
      selectedWorks: [
        {
          title: { ar: "يوم الدين — Yomeddine", en: "Yomeddine" },
          role: { ar: "ستايلست", en: "Stylist" },
          years: "2015",
          image: "assets/images/projects/yomeddine.webp",
          alt: { ar: "بوستر فيلم يوم الدين", en: "Yomeddine film poster" }
        },
        {
          title: { ar: "قناة TEN", en: "TEN Channel" },
          role: { ar: "ستايلست", en: "Stylist" },
          years: "2014 – 2015"
        },
        {
          title: { ar: "فيلم Batata", en: "Batata Film" },
          role: { ar: "ستايلست", en: "Stylist" }
        }
      ],
      en: {
        years: "2014 – 2015",
        organization: "Selected styling work",
        title: "Styling Roles",
        summary: "Three distinct styling projects, each presented in its own context.",
        role: "Stylist",
        scope: [
          "Yomeddine — Stylist, 2015.",
          "TEN Channel — Stylist, 2014–2015.",
          "Batata Film — Stylist."
        ],
        outcomes: []
      }
    },
    {
      id: "lawha",
      category: "visual",
      image: "assets/images/optimized/lawha.webp",
      gallery: projectGallery(
        [
          "lawha.webp",
          "lawha (1).webp",
          "lawha (2).webp",
          "lawha (3).webp",
          "lawha (4).webp",
          "lawha (5).webp",
          "lawha (6).webp",
          "lawha (7).webp",
          "lawha (8).webp",
          "lawha (9).webp",
          "lawha (10).webp",
          "lawha (11).webp",
          "lawha (12).webp",
          "lawha (13).webp",
          "lawha (14).webp",
          "lawha (15).webp",
          "lawha (16).webp",
          "lawha (17).webp"
        ],
        "صورة ثابتة أو مادة تصويرية من فيلم لوحة",
        "Film still or production image from Lawha"
      ),
      years: "2019",
      organization: "فيلم مستقل · مهرجان رؤى للفيلم المصري القصير",
      role: "كاتبة ومخرجة ومنتجة",
      title: "لوحة — فيلم قصير",
      summary: "فيلم قصير مستقل من كتابة وإخراج وإنتاج ندى السباعي.",
      scope: ["كتابة وإخراج وإنتاج الفيلم القصير."],
      outcomes: ["اختيار رسمي وعرض في مهرجان رؤى للفيلم المصري القصير بالقاهرة."],
      links: [],
      en: {
        years: "2019",
        organization: "Independent film · Visions Cairo Short Film Festival",
        title: "Lawha — Short film",
        summary: "An independent short film written, directed and produced by Nada Elsebaee.",
        role: "Writer, Director & Producer",
        scope: ["Wrote, directed and produced the short film."],
        outcomes: ["Official selection and screening at Cairo's Visions Cairo Short Film Festival."]
      }
    },
    {
      id: "independent-films",
      category: "visual",
      image: "assets/images/projects/independent-films.webp",
      years: "منذ 2017",
      organization: "مشاريع سينمائية ومسرحية مستقلة",
      role: "صانعة أفلام ومخرجة ومونتيرة",
      title: "الأفلام والمشاريع المستقلة",
      summary: "مسار من الأعمال السينمائية والإعلانية والمسرحية المستقلة منذ 2017.",
      scope: [
        "كتابة وإخراج ومونتاج أكثر من 30 فيلمًا قصيرًا وإعلانًا وعملًا أدائيًا ومسرحيًا، وفق الملف المهني.",
        "مساعدة مخرج أول ومونتيرة لفيلم «جلسة عرفية» عام 2018.",
        "تصوير كواليس ومونتاج مسرحية «بره جيبي» عام 2018.",
        "كتابة وتصوير ومونتاج شوريلات تمثيلية."
      ],
      outcomes: ["أعمال مختارة ومشاريع متعددة في السينما والمسرح."],
      links: [],
      en: {
        years: "Since 2017",
        organization: "Independent film and theatre projects",
        title: "Independent film and creative projects",
        summary: "A body of independent film, advertising, theatre and performance work since 2017.",
        role: "Independent Filmmaker, Director & Editor",
        scope: [
          "Writing, directing and editing more than 30 short films, advertisements, performance and theatre works, as stated in the professional profile.",
          "First assistant director and editor on Gelsa Orfeya (2018).",
          "Behind-the-scenes photography and editing for the play Bara Geiby (2018).",
          "Wrote, shot and edited actor showreels."
        ],
        outcomes: ["Selected work across independent film and theatre."]
      }
    },
    {
      id: "gelsa-orfeya",
      category: "visual",
      image: "assets/images/projects/gelsa-orfeya.webp",
      gallery: [
        {
          src: "assets/images/projects/gelsa-orfeya (2).webp",
          alt: {
            ar: "صورة من فيلم جلسة عرفية",
            en: "Image from Gelsa Orfeya"
          }
        },
        {
          src: "assets/images/projects/gelsa-orfeya (3).webp",
          alt: {
            ar: "صورة من فيلم جلسة عرفية",
            en: "Image from Gelsa Orfeya"
          }
        }
      ],
      years: "2018",
      organization: "فيلم مستقل",
      role: "مساعدة مخرج أول ومونتيرة",
      title: "جلسة عرفية — فيلم مستقل",
      summary: "مساهمة في الإخراج والمونتاج ضمن فريق الفيلم.",
      scope: ["العمل كمساعدة مخرج أول وتنفيذ المونتاج."],
      outcomes: [],
      links: [],
      en: {
        years: "2018",
        organization: "Independent film",
        title: "Gelsa Orfeya — Independent film",
        summary: "Contributed to the film's directing and editing team.",
        role: "First Assistant Director & Editor",
        scope: ["Worked as first assistant director and edited the film."],
        outcomes: []
      }
    },
    {
      id: "bara-geiby",
      category: "visual",
      image: "assets/images/projects/bara-geiby.webp",
      gallery: projectGallery(
        ["bara-geiby (2).webp"],
        "صورة توثيقية من كواليس مسرحية بره جيبي",
        "Behind-the-scenes image from Bara Geiby"
      ),
      years: "2018",
      organization: "مسرح مستقل",
      role: "مصورة ومونتيرة توثيقية",
      title: "بره جيبي — توثيق مسرحي",
      summary: "توثيق كواليس العمل المسرحي وإنتاج مواده المرئية.",
      scope: ["تصوير الكواليس ومونتاج المسرحية والمواد التوثيقية."],
      outcomes: [],
      links: [],
      en: {
        years: "2018",
        organization: "Independent theatre",
        title: "Bara Geiby — Theatre documentation",
        summary: "Documented the theatre production and created visual materials.",
        role: "Behind-the-scenes Photographer & Editor",
        scope: ["Photographed behind the scenes and edited the play and its documentation."],
        outcomes: []
      }
    },
    {
      id: "writing",
      category: "writing",
      archivePriority: true,
      image: "assets/images/projects/screenplays.webp",
      gallery: projectGallery(
        ["assetsimagesnada-culturaldevelepment-college (3).webp"],
        "صورة جماعية لزملاء دبلوم التنمية الثقافية بجامعة القاهرة",
        "Cultural Development Diploma cohort at Cairo University"
      ),
      years: "",
      role: "كاتبة سيناريو ومحتوى وباحثة في مشروعات ثقافية",
      title: "خبرات في الكتابة — سيناريو ومحتوى وبحث",
      summary: "خبرة كتابية متنوعة تشمل السيناريوهات الروائية والقصيرة، ومقالات المحتوى الثقافي، والمواد التعليمية والبحثية.",
      scope: [
        "كتابة سيناريوهين روائيين طويلين، «بنت لكن» و«رحمة»، وتسجيل ملكيتهما الفكرية.",
        "كتابة وإخراج الفيلم الروائي القصير «لوحة» (2019)، الذي اختير رسميًا وعُرض في مهرجان رؤى للفيلم المصري القصير بالقاهرة.",
        "كتابة مقالات وتطوير محتوى سلسلة Decoding Beauty لصالح GAIA Global، عن التاريخ والميثولوجيا والخامات والأحجار الطبيعية، مع الاستعانة بأدوات الذكاء الاصطناعي.",
        "تأليف محتوى تعليمي لدليل «سوا سوا: قراءة لواقع التنمر في السياقات التربوية».",
        "إعداد أدوات بحث كيفي ومقابلات وتقييم ضمن مشروع تخرج دبلوم التنمية الثقافية بجامعة القاهرة، لتصميم برنامج أمتن (2025).",
        "كتابة مشاهد وسيناريوهات قصيرة لشخصيات درامية متنوعة لاستخدامها في ملفات العرض التمثيلي."
      ],
      outcomes: [],
      links: [],
      selectedWorksHeading: {
        ar: "نماذج من الأعمال الكتابية",
        en: "Selected writing"
      },
      selectedWorks: [
        {
          title: { ar: "بنت لكن · رحمة", en: "Bent Laken · Rahma" },
          role: { ar: "سيناريوهان روائيان طويلان مسجّلا الملكية الفكرية", en: "Two feature-length screenplays with registered intellectual property" }
        },
        {
          title: { ar: "لوحة — Lawha", en: "Lawha" },
          role: { ar: "سيناريو وإخراج فيلم روائي قصير · اختيار رسمي لمهرجان رؤى", en: "Short-film screenplay and direction · Official selection at Ru'ya Festival" },
          years: "2019"
        },
        {
          title: { ar: "Decoding Beauty — GAIA Global", en: "Decoding Beauty — GAIA Global" },
          role: { ar: "مقالات ومحتوى عن التاريخ والميثولوجيا والخامات والأحجار الطبيعية", en: "Articles and content on history, mythology, materials and natural stones" }
        },
        {
          title: { ar: "دليل سوا سوا", en: "Sawa Sawa guide" },
          role: { ar: "تأليف محتوى تعليمي", en: "Educational content writing" },
          years: "2025"
        },
        {
          title: { ar: "مشروع أمتن — جامعة القاهرة", en: "Amten — Cairo University" },
          role: { ar: "بحث كيفي وأدوات مقابلات وتقييم ضمن مشروع تخرج دبلوم التنمية الثقافية", en: "Qualitative research, interview and evaluation tools for a Cultural Development diploma capstone" },
          years: "2025"
        },
        {
          title: { ar: "مشروع شوريلات الممثلين", en: "Actor Showreels Project" },
          role: { ar: "كتابة مشاهد وسيناريوهات قصيرة لشخصيات درامية متنوعة", en: "Writing short dramatic scenes and scripts for varied characters" }
        }
      ],
      en: {
        role: "Screenwriter, content writer and cultural-research contributor",
        title: "Writing Experience — Screenplays, Content & Research",
        summary: "Writing across feature and short-form screenplays, cultural editorial content, educational materials and research.",
        scope: [
          "Wrote two feature-length screenplays, Bent Laken and Rahma, with registered intellectual property.",
          "Wrote and directed the 2019 short fiction film Lawha, officially selected and screened at the Ru'ya Egyptian Short Film Festival in Cairo.",
          "Wrote articles and developed Decoding Beauty content for GAIA Global on history, mythology, materials and natural stones, with AI-assisted support.",
          "Wrote educational content for the Sawa Sawa guide on addressing bullying in educational contexts.",
          "Prepared qualitative research, interview and evaluation tools for the Amten capstone project in Cairo University's Cultural Development diploma (2025).",
          "Wrote short dramatic scenes and scripts for varied characters for actor showreels."
        ],
        outcomes: []
      }
    },
    {
      id: "sinai-community",
      category: "community",
      years: "يناير – مايو 2020",
      organization: "فريق فني مستقل · جنوب سيناء",
      role: "فنانة جرافيتي ومشاركة بيئية",
      title: "جنوب سيناء — فنون ومبادرة بيئية",
      summary: "مشاركة فنية ومجتمعية في تجميل المكان وأنشطة حماية البيئة.",
      scope: ["المشاركة في تجميل مباني المخيمات والشارع.", "المشاركة في حملات تنظيف الشواطئ مع فريق فني مستقل."],
      outcomes: [],
      links: [],
      en: {
        years: "January – May 2020",
        organization: "Independent arts team · South Sinai",
        title: "South Sinai — Art & environmental initiative",
        summary: "Community art and environmental participation focused on improving shared spaces.",
        role: "Graffiti Artist & Environmental Volunteer",
        scope: [
          "Helped paint camp buildings and public streets.",
          "Joined beach-cleaning campaigns with an independent arts team."
        ],
        outcomes: []
      }
    },
    {
      id: "actor-showreels",
      category: "visual",
      years: "2018 – 2019",
      organization: "مشروع شوريلات للممثلين",
      role: "كاتبة ومخرجة ومونتيرة",
      title: "شوريلات تمثيلية — كتابة وإخراج ومونتاج",
      summary: "إنتاج مشاهد قصيرة وشوريلات لعرض قدرات الممثلين.",
      scope: ["كتابة مشاهد درامية لشخصيات متنوعة.", "إخراج الأداء والمشاهد ومونتاج النسخ النهائية."],
      outcomes: ["شوريلات مرئية مخصصة للممثلين."],
      links: [],
      en: {
        years: "2018 – 2019",
        organization: "Actor showreel project",
        title: "Actor showreels — Writing, directing & editing",
        summary: "Produced short scenes and showreels showcasing actors' range.",
        role: "Scriptwriter, Director & Editor",
        scope: ["Wrote dramatic scenes for varied characters.", "Directed performances and edited final reels."],
        outcomes: ["Video showreels for actors."]
      }
    },
    {
      id: "delta-festival",
      category: "community",
      image: "assets/images/projects/delta-festival.webp",
      gallery: projectGallery(
        ["delta-festival (2).webp", "delta-festival (3).webp", "delta-festival (4).webp"],
        "صورة من فعالية Delta Little Queen Festival",
        "Image from the Delta Little Queen Festival"
      ),
      years: "2018",
      organization: "مهرجان Delta Little Queen · المنصورة",
      role: "مديرة المهرجان",
      title: "Delta Little Queen — إدارة المهرجان",
      summary: "إدارة المهرجان والتنسيق مع المشاركين والرعاة.",
      scope: ["تنسيق المهرجان والمشاركين والرعاة."],
      outcomes: ["تكريم من منظمي المهرجان، وفق الملف المهني."],
      links: [],
      en: {
        years: "2018",
        organization: "Delta Little Queen Festival · Mansoura",
        title: "Delta Little Queen — Festival direction",
        summary: "Directed the festival and coordinated participants and sponsors.",
        role: "Festival Director",
        scope: ["Coordinated the festival, participants and sponsors."],
        outcomes: ["Recognition from the festival organizers, as stated in the professional profile."]
      }
    }
  ]
};
