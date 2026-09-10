// Single source of truth for brand info used across Home and Products pages.
// Translatable fields are keyed by locale (en/hi/mr). Non-text fields
// (slug, logo, accent, images, swatch colors) are shared across locales.
// Use getBrands(locale) to get a flat, locale-resolved array like before.

const PLACEHOLDER_DETAILS = {
  fitNotes: {
    en: "Placeholder detail copy — replace with real specs. Typically covers fabric composition, available sizes, fit notes, colourways, and minimum order quantity for wholesale buyers.",
    hi: "प्लेसहोल्डर विवरण — असली स्पेसिफिकेशन से बदलें। आमतौर पर इसमें फ़ैब्रिक संरचना, उपलब्ध साइज़, फ़िट नोट्स, रंग विकल्प, और थोक खरीदारों के लिए न्यूनतम ऑर्डर मात्रा शामिल होती है।",
    mr: "प्लेसहोल्डर तपशील — खऱ्या स्पेसिफिकेशन्सने बदला. यामध्ये सहसा फॅब्रिक रचना, उपलब्ध साइज, फिट नोट्स, रंगपर्याय आणि घाऊक खरेदीदारांसाठी किमान ऑर्डर प्रमाण यांचा समावेश असतो.",
  },
  packSizes: {
    en: "Placeholder detail copy — replace with real specs. Typically covers fabric composition, available sizes, pack sizes, colourways, and minimum order quantity for wholesale buyers.",
    hi: "प्लेसहोल्डर विवरण — असली स्पेसिफिकेशन से बदलें। आमतौर पर इसमें फ़ैब्रिक संरचना, उपलब्ध साइज़, पैक साइज़, रंग विकल्प, और थोक खरीदारों के लिए न्यूनतम ऑर्डर मात्रा शामिल होती है।",
    mr: "प्लेसहोल्डर तपशील — खऱ्या स्पेसिफिकेशन्सने बदला. यामध्ये सहसा फॅब्रिक रचना, उपलब्ध साइज, पॅक साइज, रंगपर्याय आणि घाऊक खरेदीदारांसाठी किमान ऑर्डर प्रमाण यांचा समावेश असतो.",
  },
  sizeRange: {
    en: "Placeholder detail copy — replace with real specs. Typically covers fabric composition, size range, fit notes, colourways, and minimum order quantity for wholesale buyers.",
    hi: "प्लेसहोल्डर विवरण — असली स्पेसिफिकेशन से बदलें। आमतौर पर इसमें फ़ैब्रिक संरचना, साइज़ रेंज, फ़िट नोट्स, रंग विकल्प, और थोक खरीदारों के लिए न्यूनतम ऑर्डर मात्रा शामिल होती है।",
    mr: "प्लेसहोल्डर तपशील — खऱ्या स्पेसिफिकेशन्सने बदला. यामध्ये सहसा फॅब्रिक रचना, साइज रेंज, फिट नोट्स, रंगपर्याय आणि घाऊक खरेदीदारांसाठी किमान ऑर्डर प्रमाण यांचा समावेश असतो.",
  },
  softnessAge: {
    en: "Placeholder detail copy — replace with real specs. Typically covers fabric softness, age/size range, colourways, and minimum order quantity for wholesale buyers.",
    hi: "प्लेसहोल्डर विवरण — असली स्पेसिफिकेशन से बदलें। आमतौर पर इसमें फ़ैब्रिक की कोमलता, आयु/साइज़ रेंज, रंग विकल्प, और न्यूनतम ऑर्डर मात्रा शामिल होती है।",
    mr: "प्लेसहोल्डर तपशील — खऱ्या स्पेसिफिकेशन्सने बदला. यामध्ये सहसा फॅब्रिकची मऊपणा, वय/साइज रेंज, रंगपर्याय आणि किमान ऑर्डर प्रमाण यांचा समावेश असतो.",
  },
  fabricBlend: {
    en: "Placeholder detail copy — replace with real specs. Typically covers fabric blend, size range, pack sizes, colourways, and minimum order quantity for wholesale buyers.",
    hi: "प्लेसहोल्डर विवरण — असली स्पेसिफिकेशन से बदलें। आमतौर पर इसमें फ़ैब्रिक ब्लेंड, साइज़ रेंज, पैक साइज़, रंग विकल्प, और थोक खरीदारों के लिए न्यूनतम ऑर्डर मात्रा शामिल होती है।",
    mr: "प्लेसहोल्डर तपशील — खऱ्या स्पेसिफिकेशन्सने बदला. यामध्ये सहसा फॅब्रिक ब्लेंड, साइज रेंज, पॅक साइज, रंगपर्याय आणि घाऊक खरेदीदारांसाठी किमान ऑर्डर प्रमाण यांचा समावेश असतो.",
  },
  blendSimple: {
    en: "Placeholder detail copy — replace with real specs. Typically covers fabric blend, size range, colourways, and minimum order quantity.",
    hi: "प्लेसहोल्डर विवरण — असली स्पेसिफिकेशन से बदलें। आमतौर पर इसमें फ़ैब्रिक ब्लेंड, साइज़ रेंज, रंग विकल्प, और न्यूनतम ऑर्डर मात्रा शामिल होती है।",
    mr: "प्लेसहोल्डर तपशील — खऱ्या स्पेसिफिकेशन्सने बदला. यामध्ये सहसा फॅब्रिक ब्लेंड, साइज रेंज, रंगपर्याय आणि किमान ऑर्डर प्रमाण यांचा समावेश असतो.",
  },
  stretchAge: {
    en: "Placeholder detail copy — replace with real specs. Typically covers fabric stretch, age/size range, colourways, and minimum order quantity.",
    hi: "प्लेसहोल्डर विवरण — असली स्पेसिफिकेशन से बदलें। आमतौर पर इसमें फ़ैब्रिक की स्ट्रेच क्षमता, आयु/साइज़ रेंज, रंग विकल्प, और न्यूनतम ऑर्डर मात्रा शामिल होती है।",
    mr: "प्लेसहोल्डर तपशील — खऱ्या स्पेसिफिकेशन्सने बदला. यामध्ये सहसा फॅब्रिकची स्ट्रेच क्षमता, वय/साइज रेंज, रंगपर्याय आणि किमान ऑर्डर प्रमाण यांचा समावेश असतो.",
  },
  packComposition: {
    en: "Placeholder detail copy — replace with real specs. Typically covers pack composition, fabric blend, sizes, and minimum order quantity.",
    hi: "प्लेसहोल्डर विवरण — असली स्पेसिफिकेशन से बदलें। आमतौर पर इसमें पैक संरचना, फ़ैब्रिक ब्लेंड, साइज़, और न्यूनतम ऑर्डर मात्रा शामिल होती है।",
    mr: "प्लेसहोल्डर तपशील — खऱ्या स्पेसिफिकेशन्सने बदला. यामध्ये सहसा पॅक रचना, फॅब्रिक ब्लेंड, साइज आणि किमान ऑर्डर प्रमाण यांचा समावेश असतो.",
  },
  cushioningPack: {
    en: "Placeholder detail copy — replace with real specs. Typically covers cushioning, pack sizes, colourways, and minimum order quantity.",
    hi: "प्लेसहोल्डर विवरण — असली स्पेसिफिकेशन से बदलें। आमतौर पर इसमें कुशनिंग, पैक साइज़, रंग विकल्प, और न्यूनतम ऑर्डर मात्रा शामिल होती है।",
    mr: "प्लेसहोल्डर तपशील — खऱ्या स्पेसिफिकेशन्सने बदला. यामध्ये सहसा कुशनिंग, पॅक साइज, रंगपर्याय आणि किमान ऑर्डर प्रमाण यांचा समावेश असतो.",
  },
  insulation: {
    en: "Placeholder detail copy — replace with real specs. Typically covers insulation type, fabric blend, sizes, and minimum order quantity.",
    hi: "प्लेसहोल्डर विवरण — असली स्पेसिफिकेशन से बदलें। आमतौर पर इसमें इंसुलेशन प्रकार, फ़ैब्रिक ब्लेंड, साइज़, और न्यूनतम ऑर्डर मात्रा शामिल होती है।",
    mr: "प्लेसहोल्डर तपशील — खऱ्या स्पेसिफिकेशन्सने बदला. यामध्ये सहसा इन्सुलेशन प्रकार, फॅब्रिक ब्लेंड, साइज आणि किमान ऑर्डर प्रमाण यांचा समावेश असतो.",
  },
  softnessAgeNoColour: {
    en: "Placeholder detail copy — replace with real specs. Typically covers fabric softness, age/size range, and minimum order quantity.",
    hi: "प्लेसहोल्डर विवरण — असली स्पेसिफिकेशन से बदलें। आमतौर पर इसमें फ़ैब्रिक की कोमलता, आयु/साइज़ रेंज, और न्यूनतम ऑर्डर मात्रा शामिल होती है।",
    mr: "प्लेसहोल्डर तपशील — खऱ्या स्पेसिफिकेशन्सने बदला. यामध्ये सहसा फॅब्रिकची मऊपणा, वय/साइज रेंज आणि किमान ऑर्डर प्रमाण यांचा समावेश असतो.",
  },
};

const BRANDS_RAW = [
  {
    slug: "milton",
    name: "Milton",
    logo: null,
    accent: "#003B89",
    segment: { en: "Everyday essentials", hi: "रोज़मर्रा की ज़रूरी चीज़ें", mr: "रोजच्या गरजेच्या वस्तू" },
    status: { en: "Established", hi: "स्थापित", mr: "स्थापित" },
    statusDetail: { en: "Established 1973", hi: "1973 से स्थापित", mr: "1973 पासून स्थापित" },
    homeBlurb: {
      en: "Everyday essentials — the line we started with in 1973.",
      hi: "रोज़मर्रा की ज़रूरी चीज़ें — वह लाइन जिससे हमने 1973 में शुरुआत की थी।",
      mr: "रोजच्या गरजेच्या वस्तू — 1973 मध्ये आम्ही याच लाइनने सुरुवात केली होती.",
    },
    description: {
      en: "Our original line, and still the foundation of the business — everyday hosiery and innerwear essentials, built for reliability over trend cycles.",
      hi: "हमारी मूल लाइन, जो आज भी व्यवसाय की नींव है — रोज़मर्रा की होज़री और इननरवियर ज़रूरतें, जो ट्रेंड से ज़्यादा भरोसेमंद बनी रहने के लिए बनाई गई हैं।",
      mr: "आमची मूळ लाइन, जी आजही व्यवसायाचा पाया आहे — रोजच्या होजिअरी आणि इनरवेअर गरजा, ट्रेंडपेक्षा विश्वासार्हतेसाठी घडवलेल्या.",
    },
    products: [
      {
        name: { en: "Nylon trunks", hi: "नायलॉन ट्रंक्स", mr: "नायलॉन ट्रंक्स" },
        description: {
          en: "The product Milton started with. Classic fit, everyday wear.",
          hi: "वह उत्पाद जिससे Milton की शुरुआत हुई। क्लासिक फ़िट, रोज़मर्रा पहनने के लिए।",
          mr: "ज्या उत्पादनापासून Milton ची सुरुवात झाली. क्लासिक फिट, रोजच्या वापरासाठी.",
        },
        details: PLACEHOLDER_DETAILS.fitNotes,
        swatchA: "#e4edfb",
        swatchB: "#b9d0f2",
      },
      {
        name: { en: "Vests", hi: "बनियान", mr: "बनियन" },
        description: {
          en: "Everyday innerwear staple, sold across general trade.",
          hi: "रोज़मर्रा का इननरवियर स्टेपल, जनरल ट्रेड में बिकता है।",
          mr: "रोजच्या वापरातील इनरवेअर, जनरल ट्रेडमध्ये विकले जाते.",
        },
        details: PLACEHOLDER_DETAILS.fitNotes,
        swatchA: "#e4edfb",
        swatchB: "#b9d0f2",
      },
      {
        name: { en: "Everyday socks", hi: "रोज़मर्रा के मोज़े", mr: "रोजचे मोजे" },
        description: {
          en: "Value-tier hosiery for daily wear.",
          hi: "रोज़ पहनने के लिए वैल्यू-टियर होज़री।",
          mr: "रोजच्या वापरासाठी व्हॅल्यू-टियर होजिअरी.",
        },
        details: PLACEHOLDER_DETAILS.packSizes,
        swatchA: "#e4edfb",
        swatchB: "#b9d0f2",
      },
    ],
  },
  {
    slug: "anicy",
    name: "ANICY",
    logo: "/logos/anicy.png",
    accent: "#0C2C55",
    segment: { en: "Men's performance wear", hi: "मेन्स परफॉर्मेंस वियर", mr: "मेन्स परफॉर्मन्स वेअर" },
    status: { en: "Active", hi: "सक्रिय", mr: "सक्रिय" },
    statusDetail: { en: "Leading brand", hi: "अग्रणी ब्रांड", mr: "आघाडीचा ब्रँड" },
    homeBlurb: {
      en: "Men's performance wear. Our leading brand today.",
      hi: "मेन्स परफॉर्मेंस वियर। आज हमारा अग्रणी ब्रांड।",
      mr: "मेन्स परफॉर्मन्स वेअर. आजचा आमचा आघाडीचा ब्रँड.",
    },
    description: {
      en: "Our leading and most established growth brand — performance-oriented menswear designed for daily activity, sold through general and modern trade.",
      hi: "हमारा अग्रणी और सबसे स्थापित ग्रोथ ब्रांड — रोज़मर्रा की गतिविधि के लिए डिज़ाइन किया गया परफॉर्मेंस-ओरिएंटेड मेन्सवियर, जनरल और मॉडर्न ट्रेड के ज़रिए बेचा जाता है।",
      mr: "आमचा आघाडीचा आणि सर्वात स्थापित ग्रोथ ब्रँड — रोजच्या हालचालींसाठी डिझाइन केलेले परफॉर्मन्स-ओरिएंटेड मेन्सवेअर, जनरल आणि मॉडर्न ट्रेडमार्फत विकले जाते.",
    },
    products: [
      {
        name: { en: "4-Way Track Pant", hi: "4-वे ट्रैक पैंट", mr: "4-वे ट्रॅक पँट" },
        description: {
          en: "A versatile full-length track pant with a clean athletic silhouette, elasticated drawstring waist and practical side pockets.",
          hi: "एक बहुउपयोगी फ़ुल-लेंथ ट्रैक पैंट, साफ़ एथलेटिक सिल्हूट, इलास्टिक ड्रॉस्ट्रिंग कमर और प्रैक्टिकल साइड पॉकेट्स के साथ।",
          mr: "एक बहुउपयोगी फुल-लेंथ ट्रॅक पँट, स्वच्छ अ‍ॅथलेटिक सिल्हूट, इलास्टिक ड्रॉस्ट्रिंग कंबर आणि व्यावहारिक साइड पॉकेट्ससह.",
        },
        details: {
          en: "A versatile full-length track pant with a clean athletic silhouette, elasticated drawstring waist and practical side pockets. Designed with a streamlined fit that works equally well for workouts, running and everyday activewear.",
          hi: "एक बहुउपयोगी फ़ुल-लेंथ ट्रैक पैंट, साफ़ एथलेटिक सिल्हूट, इलास्टिक ड्रॉस्ट्रिंग कमर और प्रैक्टिकल साइड पॉकेट्स के साथ। एक स्ट्रीमलाइन्ड फ़िट के साथ डिज़ाइन की गई जो वर्कआउट, रनिंग और रोज़मर्रा की एक्टिववियर के लिए समान रूप से अच्छी तरह काम करती है।",
          mr: "एक बहुउपयोगी फुल-लेंथ ट्रॅक पँट, स्वच्छ अ‍ॅथलेटिक सिल्हूट, इलास्टिक ड्रॉस्ट्रिंग कंबर आणि व्यावहारिक साइड पॉकेट्ससह. वर्कआउट, धावणे आणि रोजच्या अ‍ॅक्टिव्हवेअरसाठी सारखेच चांगले काम करणाऱ्या स्ट्रीमलाइन्ड फिटसह डिझाइन केलेली.",
        },
        images: ["/products/anicy/1/1.jpg", "/products/anicy/1/2.jpg", "/products/anicy/1/3.jpg", "/products/anicy/1/4.jpg", "/products/anicy/1/5.jpg", "/products/anicy/1/6.jpg"],
      },
      {
        name: { en: "4-Way Bermuda", hi: "4-वे बरमूडा", mr: "4-वे बर्म्युडा" },
        description: {
          en: "A clean athletic bermuda with a relaxed knee-length profile, elastic drawstring waistband and secure zippered side pocket.",
          hi: "एक साफ़ एथलेटिक बरमूडा, आरामदायक नी-लेंथ प्रोफ़ाइल, इलास्टिक ड्रॉस्ट्रिंग कमरबंद और सुरक्षित ज़िप वाली साइड पॉकेट के साथ।",
          mr: "एक स्वच्छ अ‍ॅथलेटिक बर्म्युडा, आरामदायक नी-लेंथ प्रोफाइल, इलास्टिक ड्रॉस्ट्रिंग कंबरपट्टा आणि सुरक्षित झिप असलेल्या साइड पॉकेटसह.",
        },
        details: {
          en: "A clean athletic bermuda with a relaxed knee-length profile, elastic drawstring waistband and secure zippered side pocket. Its lightweight-looking construction makes it ideal for training, sports and casual outdoor wear.",
          hi: "एक साफ़ एथलेटिक बरमूडा, आरामदायक नी-लेंथ प्रोफ़ाइल, इलास्टिक ड्रॉस्ट्रिंग कमरबंद और सुरक्षित ज़िप वाली साइड पॉकेट के साथ। इसकी हल्की बनावट इसे ट्रेनिंग, स्पोर्ट्स और कैज़ुअल आउटडोर वियर के लिए आदर्श बनाती है।",
          mr: "एक स्वच्छ अ‍ॅथलेटिक बर्म्युडा, आरामदायक नी-लेंथ प्रोफाइल, इलास्टिक ड्रॉस्ट्रिंग कंबरपट्टा आणि सुरक्षित झिप असलेल्या साइड पॉकेटसह. याची हलकी रचना ट्रेनिंग, स्पोर्ट्स आणि कॅज्युअल आउटडोअर वापरासाठी आदर्श बनवते.",
        },
        images: ["/products/anicy/2/1.jpg", "/products/anicy/2/2.jpg", "/products/anicy/2/3.jpg", "/products/anicy/2/4.jpg", "/products/anicy/2/5.jpg"],
      },
      {
        name: { en: "4-Way Imported Track Pant — Belt Elastic", hi: "4-वे इम्पोर्टेड ट्रैक पैंट — बेल्ट इलास्टिक", mr: "4-वे इम्पोर्टेड ट्रॅक पँट — बेल्ट इलास्टिक" },
        description: {
          en: "A sleek tapered track pant featuring a structured elastic waistband, side pockets and a minimal athletic finish.",
          hi: "एक स्लीक टेपर्ड ट्रैक पैंट, स्ट्रक्चर्ड इलास्टिक कमरबंद, साइड पॉकेट्स और मिनिमल एथलेटिक फ़िनिश के साथ।",
          mr: "एक स्लीक टेपर्ड ट्रॅक पँट, स्ट्रक्चर्ड इलास्टिक कंबरपट्टा, साइड पॉकेट्स आणि मिनिमल अ‍ॅथलेटिक फिनिशसह.",
        },
        details: {
          en: "A sleek tapered track pant featuring a structured elastic waistband, side pockets and a minimal athletic finish. The smooth surface and narrow-leg silhouette give it a more refined performance look.",
          hi: "एक स्लीक टेपर्ड ट्रैक पैंट, स्ट्रक्चर्ड इलास्टिक कमरबंद, साइड पॉकेट्स और मिनिमल एथलेटिक फ़िनिश के साथ। इसकी स्मूद सतह और नैरो-लेग सिल्हूट इसे एक बेहतर रिफ़ाइंड परफॉर्मेंस लुक देते हैं।",
          mr: "एक स्लीक टेपर्ड ट्रॅक पँट, स्ट्रक्चर्ड इलास्टिक कंबरपट्टा, साइड पॉकेट्स आणि मिनिमल अ‍ॅथलेटिक फिनिशसह. याची गुळगुळीत पृष्ठभाग आणि नॅरो-लेग सिल्हूट यामुळे याला अधिक रिफाइंड परफॉर्मन्स लुक मिळतो.",
        },
        images: ["/products/anicy/3/1.jpg", "/products/anicy/3/2.jpg", "/products/anicy/3/3.jpg", "/products/anicy/3/4.jpg", "/products/anicy/3/5.jpg", "/products/anicy/3/6.jpg"],
      },
      {
        name: { en: "4-Way Imported Track Pant — Machine Elastic", hi: "4-वे इम्पोर्टेड ट्रैक पैंट — मशीन इलास्टिक", mr: "4-वे इम्पोर्टेड ट्रॅक पँट — मशीन इलास्टिक" },
        description: {
          en: "A streamlined tapered track pant with a comfortable gathered waistband, practical zippered side pockets and a clean low-profile finish.",
          hi: "एक स्ट्रीमलाइन्ड टेपर्ड ट्रैक पैंट, आरामदायक गैदर्ड कमरबंद, प्रैक्टिकल ज़िप साइड पॉकेट्स और साफ़ लो-प्रोफ़ाइल फ़िनिश के साथ।",
          mr: "एक स्ट्रीमलाइन्ड टेपर्ड ट्रॅक पँट, आरामदायक गॅदर्ड कंबरपट्टा, व्यावहारिक झिप साइड पॉकेट्स आणि स्वच्छ लो-प्रोफाइल फिनिशसह.",
        },
        details: {
          en: "A streamlined tapered track pant with a comfortable gathered waistband, practical zippered side pockets and a clean low-profile finish. Built for an understated sporty look that transitions easily from training to everyday wear.",
          hi: "एक स्ट्रीमलाइन्ड टेपर्ड ट्रैक पैंट, आरामदायक गैदर्ड कमरबंद, प्रैक्टिकल ज़िप साइड पॉकेट्स और साफ़ लो-प्रोफ़ाइल फ़िनिश के साथ। यह एक सिंपल स्पोर्टी लुक के लिए बनाई गई है जो ट्रेनिंग से रोज़मर्रा पहनने तक आसानी से ढल जाती है।",
          mr: "एक स्ट्रीमलाइन्ड टेपर्ड ट्रॅक पँट, आरामदायक गॅदर्ड कंबरपट्टा, व्यावहारिक झिप साइड पॉकेट्स आणि स्वच्छ लो-प्रोफाइल फिनिशसह. ट्रेनिंगपासून रोजच्या वापरापर्यंत सहज बदलणाऱ्या साध्या स्पोर्टी लुकसाठी ही घडवलेली आहे.",
        },
        images: ["/products/anicy/4/1.jpg", "/products/anicy/4/2.jpg", "/products/anicy/4/3.jpg", "/products/anicy/4/4.jpg", "/products/anicy/4/5.jpg", "/products/anicy/4/6.jpg"],
      },
      {
        name: { en: "4-Way Imported Bermuda", hi: "4-वे इम्पोर्टेड बरमूडा", mr: "4-वे इम्पोर्टेड बर्म्युडा" },
        description: {
          en: "A modern athletic bermuda with a relaxed fit, elastic drawstring waist and deep side pockets.",
          hi: "एक मॉडर्न एथलेटिक बरमूडा, आरामदायक फ़िट, इलास्टिक ड्रॉस्ट्रिंग कमर और गहरी साइड पॉकेट्स के साथ।",
          mr: "एक आधुनिक अ‍ॅथलेटिक बर्म्युडा, आरामदायक फिट, इलास्टिक ड्रॉस्ट्रिंग कंबर आणि खोल साइड पॉकेट्ससह.",
        },
        details: {
          en: "A modern athletic bermuda with a relaxed fit, elastic drawstring waist and deep side pockets. Its clean styling and flexible silhouette make it suitable for gym sessions, outdoor activities and everyday casual wear.",
          hi: "एक मॉडर्न एथलेटिक बरमूडा, आरामदायक फ़िट, इलास्टिक ड्रॉस्ट्रिंग कमर और गहरी साइड पॉकेट्स के साथ। इसकी साफ़ स्टाइलिंग और फ्लेक्सिबल सिल्हूट इसे जिम सेशन, आउटडोर एक्टिविटी और रोज़मर्रा कैज़ुअल वियर के लिए उपयुक्त बनाते हैं।",
          mr: "एक आधुनिक अ‍ॅथलेटिक बर्म्युडा, आरामदायक फिट, इलास्टिक ड्रॉस्ट्रिंग कंबर आणि खोल साइड पॉकेट्ससह. याची स्वच्छ स्टाइलिंग आणि लवचिक सिल्हूट यामुळे हे जिम सेशन्स, आउटडोअर अ‍ॅक्टिव्हिटीज आणि रोजच्या कॅज्युअल वापरासाठी योग्य ठरते.",
        },
        images: ["/products/anicy/5/1.jpg", "/products/anicy/5/2.jpg", "/products/anicy/5/3.jpg", "/products/anicy/5/4.jpg", "/products/anicy/5/5.jpg"],
      },
      {
        name: { en: "4-Way Heavy Track Pant — Belt Elastic", hi: "4-वे हैवी ट्रैक पैंट — बेल्ट इलास्टिक", mr: "4-वे हेवी ट्रॅक पँट — बेल्ट इलास्टिक" },
        description: {
          en: "A robust full-length track pant with a tapered athletic cut, drawstring waist and zipped side pockets.",
          hi: "एक मज़बूत फ़ुल-लेंथ ट्रैक पैंट, टेपर्ड एथलेटिक कट, ड्रॉस्ट्रिंग कमर और ज़िप साइड पॉकेट्स के साथ।",
          mr: "एक मजबूत फुल-लेंथ ट्रॅक पँट, टेपर्ड अ‍ॅथलेटिक कट, ड्रॉस्ट्रिंग कंबर आणि झिप साइड पॉकेट्ससह.",
        },
        details: {
          en: "A robust full-length track pant with a tapered athletic cut, drawstring waist and zipped side pockets. The heavier construction gives the silhouette a more substantial feel while retaining the flexibility expected from activewear.",
          hi: "एक मज़बूत फ़ुल-लेंथ ट्रैक पैंट, टेपर्ड एथलेटिक कट, ड्रॉस्ट्रिंग कमर और ज़िप साइड पॉकेट्स के साथ। इसकी भारी बनावट सिल्हूट को एक मज़बूत एहसास देती है, जबकि एक्टिववियर से अपेक्षित लचीलापन भी बरक़रार रहता है।",
          mr: "एक मजबूत फुल-लेंथ ट्रॅक पँट, टेपर्ड अ‍ॅथलेटिक कट, ड्रॉस्ट्रिंग कंबर आणि झिप साइड पॉकेट्ससह. याची जड रचना सिल्हूटला अधिक भक्कम अनुभव देते, तरीही अ‍ॅक्टिव्हवेअरकडून अपेक्षित लवचिकता कायम राहते.",
        },
        images: ["/products/anicy/6/1.jpg", "/products/anicy/6/2.jpg", "/products/anicy/6/3.jpg", "/products/anicy/6/4.jpg", "/products/anicy/6/5.jpg", "/products/anicy/6/6.jpg"],
      },
      {
        name: { en: "4-Way Heavy Track Pant — Machine Elastic", hi: "4-वे हैवी ट्रैक पैंट — मशीन इलास्टिक", mr: "4-वे हेवी ट्रॅक पँट — मशीन इलास्टिक" },
        description: {
          en: "A heavier-duty track pant with a clean tapered profile and elasticated waistband.",
          hi: "एक हेवी-ड्यूटी ट्रैक पैंट, साफ़ टेपर्ड प्रोफ़ाइल और इलास्टिक कमरबंद के साथ।",
          mr: "एक हेवी-ड्युटी ट्रॅक पँट, स्वच्छ टेपर्ड प्रोफाइल आणि इलास्टिक कंबरपट्ट्यासह.",
        },
        details: {
          en: "A heavier-duty track pant with a clean tapered profile and elasticated waistband. Finished with practical side storage and a minimalist sporty appearance, making it suited to training as well as everyday movement.",
          hi: "एक हेवी-ड्यूटी ट्रैक पैंट, साफ़ टेपर्ड प्रोफ़ाइल और इलास्टिक कमरबंद के साथ। प्रैक्टिकल साइड स्टोरेज और मिनिमलिस्ट स्पोर्टी लुक के साथ तैयार की गई, जो इसे ट्रेनिंग और रोज़मर्रा की गतिविधियों दोनों के लिए उपयुक्त बनाती है।",
          mr: "एक हेवी-ड्युटी ट्रॅक पँट, स्वच्छ टेपर्ड प्रोफाइल आणि इलास्टिक कंबरपट्ट्यासह. व्यावहारिक साइड स्टोरेज आणि मिनिमलिस्ट स्पोर्टी लूकसह तयार केलेली, जी हिला ट्रेनिंग आणि रोजच्या हालचालींसाठीही योग्य बनवते.",
        },
        images: ["/products/anicy/7/1.jpg", "/products/anicy/7/2.jpg", "/products/anicy/7/3.jpg", "/products/anicy/7/4.jpg", "/products/anicy/7/5.jpg", "/products/anicy/7/6.jpg"],
      },
      {
        name: { en: "4-Way Cargo Track Pant", hi: "4-वे कार्गो ट्रैक पैंट", mr: "4-वे कार्गो ट्रॅक पँट" },
        description: {
          en: "A functional cargo-inspired track pant combining a tapered athletic silhouette with multiple utility pockets.",
          hi: "एक फ़ंक्शनल कार्गो-इंस्पायर्ड ट्रैक पैंट, जो टेपर्ड एथलेटिक सिल्हूट को कई यूटिलिटी पॉकेट्स के साथ जोड़ती है।",
          mr: "एक फंक्शनल कार्गो-प्रेरित ट्रॅक पँट, जी टेपर्ड अ‍ॅथलेटिक सिल्हूटला अनेक युटिलिटी पॉकेट्ससह जोडते.",
        },
        details: {
          en: "A functional cargo-inspired track pant combining a tapered athletic silhouette with multiple utility pockets. The side cargo compartments add practicality without losing the clean, modern activewear aesthetic.",
          hi: "एक फ़ंक्शनल कार्गो-इंस्पायर्ड ट्रैक पैंट, जो टेपर्ड एथलेटिक सिल्हूट को कई यूटिलिटी पॉकेट्स के साथ जोड़ती है। साइड कार्गो कम्पार्टमेंट्स इसे व्यावहारिक बनाते हैं, वहीं साफ़-सुथरी, मॉडर्न एक्टिववियर लुक भी बनी रहती है।",
          mr: "एक फंक्शनल कार्गो-प्रेरित ट्रॅक पँट, जी टेपर्ड अ‍ॅथलेटिक सिल्हूटला अनेक युटिलिटी पॉकेट्ससह जोडते. साइड कार्गो कप्पे यामध्ये व्यावहारिकता वाढवतात, तरीही स्वच्छ, आधुनिक अ‍ॅक्टिव्हवेअर लूक कायम राहतो.",
        },
        images: ["/products/anicy/8/1.jpg", "/products/anicy/8/2.jpg", "/products/anicy/8/3.jpg", "/products/anicy/8/4.jpg", "/products/anicy/8/5.jpg", "/products/anicy/8/6.jpg"],
      },
    ],
  },
  {
    slug: "nicy",
    name: "NICY",
    logo: "/logos/nicy.png",
    accent: "#D8362B",
    segment: { en: "Girls' & ladies' wear", hi: "गर्ल्स और लेडीज़ वियर", mr: "गर्ल्स आणि लेडीज वेअर" },
    status: { en: "Active", hi: "सक्रिय", mr: "सक्रिय" },
    statusDetail: { en: "Fastest-growing", hi: "सबसे तेज़ी से बढ़ता ब्रांड", mr: "सर्वात वेगाने वाढणारा ब्रँड" },
    homeBlurb: {
      en: "Girls' and ladies' wear — our fastest-growing brand.",
      hi: "गर्ल्स और लेडीज़ वियर — हमारा सबसे तेज़ी से बढ़ता ब्रांड।",
      mr: "गर्ल्स आणि लेडीज वेअर — आमचा सर्वात वेगाने वाढणारा ब्रँड.",
    },
    description: {
      en: "Our fastest-growing brand — everyday innerwear and hosiery for girls and women, built on comfort and consistent sizing across the range.",
      hi: "हमारा सबसे तेज़ी से बढ़ता ब्रांड — लड़कियों और महिलाओं के लिए रोज़मर्रा का इननरवियर और होज़री, जो आराम और पूरी रेंज में एक जैसी साइज़िंग पर बना है।",
      mr: "आमचा सर्वात वेगाने वाढणारा ब्रँड — मुली आणि महिलांसाठी रोजचे इनरवेअर आणि होजिअरी, आराम आणि संपूर्ण रेंजमध्ये सुसंगत साइजिंगवर घडवलेला.",
    },
    products: [
      {
        name: { en: "Ladies' innerwear", hi: "लेडीज़ इननरवियर", mr: "लेडीज इनरवेअर" },
        description: { en: "Everyday comfort fit across standard sizing.", hi: "स्टैंडर्ड साइज़िंग में रोज़मर्रा का आरामदायक फ़िट।", mr: "स्टँडर्ड साइजिंगमध्ये रोजचा आरामदायक फिट." },
        category: "ladies",
        details: PLACEHOLDER_DETAILS.sizeRange,
        swatchA: "#fbe1de",
        swatchB: "#f0b0a9",
      },
      {
        name: { en: "Girls' vests", hi: "गर्ल्स बनियान", mr: "गर्ल्स बनियन" },
        description: { en: "Soft-touch fabric for younger age groups.", hi: "छोटी उम्र के बच्चों के लिए सॉफ़्ट-टच फ़ैब्रिक।", mr: "लहान वयोगटासाठी सॉफ्ट-टच फॅब्रिक." },
        category: "girls",
        details: PLACEHOLDER_DETAILS.softnessAge,
        swatchA: "#fce7e4",
        swatchB: "#f3bdb6",
      },
      {
        name: { en: "Everyday hosiery", hi: "रोज़मर्रा की होज़री", mr: "रोजची होजिअरी" },
        description: { en: "Socks and hosiery essentials for daily wear.", hi: "रोज़ पहनने के लिए मोज़े और होज़री ज़रूरतें।", mr: "रोजच्या वापरासाठी मोजे आणि होजिअरी गरजा." },
        category: "ladies",
        details: PLACEHOLDER_DETAILS.fabricBlend,
        swatchA: "#f8d9d5",
        swatchB: "#eba49b",
      },
      {
        name: { en: "Camisoles", hi: "कैमिसोल", mr: "कॅमिसोल" },
        description: { en: "Layering camisole in everyday fabric blend.", hi: "रोज़मर्रा के फ़ैब्रिक ब्लेंड में लेयरिंग कैमिसोल।", mr: "रोजच्या फॅब्रिक ब्लेंडमधील लेयरिंग कॅमिसोल." },
        category: "ladies",
        details: PLACEHOLDER_DETAILS.blendSimple,
        swatchA: "#fbe1de",
        swatchB: "#f0b0a9",
      },
      {
        name: { en: "Girls' leggings", hi: "गर्ल्स लेगिंग्स", mr: "गर्ल्स लेगिंग्स" },
        description: { en: "Stretch leggings for everyday and school wear.", hi: "रोज़मर्रा और स्कूल पहनने के लिए स्ट्रेच लेगिंग्स।", mr: "रोजच्या आणि शाळेच्या वापरासाठी स्ट्रेच लेगिंग्स." },
        category: "girls",
        details: PLACEHOLDER_DETAILS.stretchAge,
        swatchA: "#fce7e4",
        swatchB: "#f3bdb6",
      },
      {
        name: { en: "Ladies' briefs — pack of 3", hi: "लेडीज़ ब्रीफ़्स — 3 का पैक", mr: "लेडीज ब्रीफ्स — 3 चा पॅक" },
        description: { en: "Value multi-pack in everyday comfort fit.", hi: "रोज़मर्रा के आरामदायक फ़िट में वैल्यू मल्टी-पैक।", mr: "रोजच्या आरामदायक फिटमध्ये व्हॅल्यू मल्टी-पॅक." },
        category: "ladies",
        details: PLACEHOLDER_DETAILS.packComposition,
        swatchA: "#f8d9d5",
        swatchB: "#eba49b",
      },
      {
        name: { en: "Ankle socks — girls'", hi: "एंकल सॉक्स — गर्ल्स", mr: "अँकल सॉक्स — गर्ल्स" },
        description: { en: "Soft ankle socks for daily school and play wear.", hi: "रोज़ स्कूल और खेलने के लिए सॉफ़्ट एंकल सॉक्स।", mr: "रोजच्या शाळेसाठी आणि खेळण्यासाठी सॉफ्ट अँकल सॉक्स." },
        category: "girls",
        details: PLACEHOLDER_DETAILS.cushioningPack,
        swatchA: "#fbe1de",
        swatchB: "#f0b0a9",
      },
      {
        name: { en: "Thermal innerwear", hi: "थर्मल इननरवियर", mr: "थर्मल इनरवेअर" },
        description: { en: "Cold-weather base layer for everyday warmth.", hi: "ठंड के मौसम के लिए रोज़मर्रा की गर्माहट देने वाली बेस लेयर।", mr: "थंडीच्या हंगामासाठी रोजची ऊब देणारी बेस लेयर." },
        category: "ladies",
        details: PLACEHOLDER_DETAILS.insulation,
        swatchA: "#fce7e4",
        swatchB: "#f3bdb6",
      },
      {
        name: { en: "Ladies' slip", hi: "लेडीज़ स्लिप", mr: "लेडीज स्लिप" },
        description: { en: "Everyday full slip in breathable fabric.", hi: "रोज़मर्रा के लिए सांस लेने योग्य फ़ैब्रिक में फ़ुल स्लिप।", mr: "रोजच्या वापरासाठी श्वास घेण्यायोग्य फॅब्रिकमधील फुल स्लिप." },
        category: "ladies",
        details: PLACEHOLDER_DETAILS.blendSimple,
        swatchA: "#f8d9d5",
        swatchB: "#eba49b",
      },
      {
        name: { en: "Girls' bloomers", hi: "गर्ल्स ब्लूमर्स", mr: "गर्ल्स ब्लूमर्स" },
        description: { en: "Everyday comfort bloomers for younger age groups.", hi: "छोटी उम्र के बच्चों के लिए रोज़मर्रा के आरामदायक ब्लूमर्स।", mr: "लहान वयोगटासाठी रोजचे आरामदायक ब्लूमर्स." },
        category: "girls",
        details: PLACEHOLDER_DETAILS.softnessAgeNoColour,
        swatchA: "#fbe1de",
        swatchB: "#f0b0a9",
      },
      {
        name: { en: "Knee-high socks", hi: "नी-हाई सॉक्स", mr: "नी-हाय सॉक्स" },
        description: { en: "Extra coverage hosiery for daily wear.", hi: "रोज़ पहनने के लिए अतिरिक्त कवरेज वाली होज़री।", mr: "रोजच्या वापरासाठी अतिरिक्त कव्हरेज असलेली होजिअरी." },
        category: "ladies",
        details: PLACEHOLDER_DETAILS.blendSimple,
        swatchA: "#fce7e4",
        swatchB: "#f3bdb6",
      },
      {
        name: { en: "Ladies' tank top", hi: "लेडीज़ टैंक टॉप", mr: "लेडीज टँक टॉप" },
        description: { en: "Everyday layering tank in soft-touch fabric.", hi: "सॉफ़्ट-टच फ़ैब्रिक में रोज़मर्रा की लेयरिंग टैंक।", mr: "सॉफ्ट-टच फॅब्रिकमधील रोजची लेयरिंग टँक." },
        category: "ladies",
        details: PLACEHOLDER_DETAILS.blendSimple,
        swatchA: "#f8d9d5",
        swatchB: "#eba49b",
      },
    ],
  },
  {
    slug: "avron",
    name: "Avron",
    logo: "/logos/avron.png",
    accent: "#5b6470",
    segment: { en: "Premium men's performance wear", hi: "प्रीमियम मेन्स परफॉर्मेंस वियर", mr: "प्रीमियम मेन्स परफॉर्मन्स वेअर" },
    status: { en: "Launching soon", hi: "जल्द लॉन्च हो रहा है", mr: "लवकरच लाँच होत आहे" },
    statusDetail: { en: "In development", hi: "निर्माणाधीन", mr: "विकासाधीन" },
    homeBlurb: {
      en: "Premium men's performance wear.",
      hi: "प्रीमियम मेन्स परफॉर्मेंस वियर।",
      mr: "प्रीमियम मेन्स परफॉर्मन्स वेअर.",
    },
    description: { en: null, hi: null, mr: null },
    comingSoon: {
      tag: { en: "Launching soon", hi: "जल्द लॉन्च हो रहा है", mr: "लवकरच लाँच होत आहे" },
      heading: {
        en: "Our newest brand — a premium step up in men's performance wear.",
        hi: "हमारा सबसे नया ब्रांड — मेन्स परफॉर्मेंस वियर में एक प्रीमियम कदम आगे।",
        mr: "आमचा सर्वात नवीन ब्रँड — मेन्स परफॉर्मन्स वेअरमधील एक प्रीमियम पाऊल पुढे.",
      },
      copy: {
        en: "Avron is currently in development, with packaging and launch details being finalised. Full product listings will go live closer to launch — check back soon, or ask us directly for early details.",
        hi: "Avron फ़िलहाल निर्माणाधीन है, पैकेजिंग और लॉन्च की जानकारी अंतिम रूप ले रही है। पूरी प्रोडक्ट लिस्टिंग लॉन्च के करीब लाइव होगी — जल्द फिर देखें, या शुरुआती जानकारी के लिए सीधे हमसे पूछें।",
        mr: "Avron सध्या विकासाधीन आहे, पॅकेजिंग आणि लाँचचे तपशील अंतिम केले जात आहेत. संपूर्ण प्रोडक्ट लिस्टिंग लाँचच्या जवळ लाइव्ह होईल — लवकरच पुन्हा पहा, किंवा सुरुवातीच्या माहितीसाठी थेट आम्हाला विचारा.",
      },
    },
    products: [],
  },
];

function pick(field, locale) {
  if (field === null || field === undefined) return field;
  if (typeof field === "object" && !Array.isArray(field)) {
    return field[locale] ?? field.en ?? null;
  }
  return field;
}

function resolveProduct(product, locale) {
  return {
    ...product,
    name: pick(product.name, locale),
    description: pick(product.description, locale),
    details: pick(product.details, locale),
  };
}

function resolveBrand(brand, locale) {
  const resolved = {
    ...brand,
    segment: pick(brand.segment, locale),
    status: pick(brand.status, locale),
    statusDetail: pick(brand.statusDetail, locale),
    homeBlurb: pick(brand.homeBlurb, locale),
    description: pick(brand.description, locale),
    products: brand.products.map((p) => resolveProduct(p, locale)),
  };
  if (brand.comingSoon) {
    resolved.comingSoon = {
      tag: pick(brand.comingSoon.tag, locale),
      heading: pick(brand.comingSoon.heading, locale),
      copy: pick(brand.comingSoon.copy, locale),
    };
  }
  return resolved;
}

export function getBrands(locale = "en") {
  return BRANDS_RAW.map((b) => resolveBrand(b, locale));
}

export function getBrand(slug, locale = "en") {
  const raw = BRANDS_RAW.find((b) => b.slug === slug);
  return raw ? resolveBrand(raw, locale) : undefined;
}
