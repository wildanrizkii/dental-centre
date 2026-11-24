export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#", active: true },
  { label: "About Us", href: "#about", active: false },
  { label: "Specialists", href: "#specialists", active: false },
  { label: "Treatments", href: "#treatments", active: false },
  { label: "Facilities", href: "#facilities", active: false },
  { label: "Articles", href: "#articles", active: false },
];

export const IMAGES = {
  logo: "https://lh3.googleusercontent.com/aida/ALJJyrB0tqhRI3t-yzh4qEa8Iy5Ti1Qb61-nfP-MLc6du2Tdd2-O0v5ju9HuJx0bev-FyGvBxkVIsFj8jC37-Uwzc3cW5zRIz2EvmooE57VBwbsa_Tsl0YO6IufJ1ebWnufyE8aaZANyNWoCB5ezrPJ3Fw0JQm1sYOTpcG3oiLT96Q_mix1kcfZUuc2fh0bgMaGQOZXYOjMb4DwPwq3096lHoK4SnSWpGEPv23hzhQzzFbm4",
  profileAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsDmFV2n7cAZvuOh4yNAFJN3b92rppER55b2NUVQwYSf-TqAMMEWqxaByLddNWy2FuxnVGkwteLkPkJ68mfq6v0A_xw9Kyc_-WvLn3e7-6N1d10EbTzxgCjoRjuZtJqmZWRM3AqMSVLMsNB5_eIGHtpCNHF7i97OnEQRmi_7HlY3H6o4rG7RBUDJbuPdngcb9FV32Xbn-Rkzzl7-9kqxkeWd9CaIkxng_-5V8lHlQ",
  drJenkins: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdNpCWotQE2ECb2jsM9pEgeHGPvc253kaEJH83d3vG704zQEL22aflhrDVHrw7d46F3YK5KCPdfpEMtyu_S3RNkGNrXWXaAp2UumEGVjsoQi245xt5pLlm0ev_1iTDI_y75DD3ZNov9mFLrax8uWMLVDVAJzL7EFrayVRWTtZUvWH-K6wSiL3NQczsRMfV4wjRNxmErtSEiJCVEieS3nIZiznstXbjdStJNscy5EE",
  drVance: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7wBfu8lQoa8i2ozgNjU-NxA4pd9-b08MO1wOR-KJde2LghSbS2xWGQqM_8n3jqiyvUccS0M6gAwEoL_lWe4DF9P9OEoL_bszBAcVTKVBm31u9pIvaMLMt9PBE2Z7tsqRM1SbZNHc35kuGgH99OcQjjjGL7iOtCzCcocvqSdEQb3HzD4YLKPI7w5UtZsz-MbWqdic6vGNgN2FUff_SBuiZap-fanQwqMiWUc_V8xQ",
  drRostova: "https://lh3.googleusercontent.com/aida-public/AB6AXuChoccys4ytY8OwHfgE_FPOmYtQ6jUTnLoWOVEXiSD3flkZcdcie3iqgBZTjw1Dy_Qc82U-c3fazQTjfNE3BEKkG7WNP1ZWw8M53kfsBg6yfp9VCozSMgrTWUMAxLaxbzkpU5fYnsucrVRq_nMEKKW3yW6PaGv5FvGvyOGtEnVf6goYFQX5O53uQP6JLLOumNRdptbjaWy7P1cSiDtA4Vibz7LrmK43hGl1A8vbaSA",
  philosophyCare: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CYHjiPaWlSE3O8QOYo87_ewZEvFZZsqUJrGNudvFQxHPiPTVOIF5Nr_sCK8e5ffhv-PrnN6fQHF8WXrEwmZHRAZvih0AdI77EraDG7nzlkjy5j7ZJGZbBO6OgyeI4EL-jvTVWVSMrDcOH3UnE0Ob3iwDG3AbJB5tOjyf7dq00YdQL4BucwdoHQm9F_54_4cI0TM5t19kkFmvB6RK8F_qJ4BTd_mc2qIeqxOg1A0",
  philosophyTech: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyoTCQtcRYmS2rpkLO-kKQKpj9IL5IqeFlwcEQBH-vJSat8WejocnYZI2fQl7Uv6NQHyG-1nlYcHMLvllRaZuK74JX9A-bCXN7Acxx3mf-a2DRTOeLEdAOKQGxDXkwDO-GR2W-gjSFu_AE83qKrZG3PfXKNRy9I7cjRrFX-QB5J5p05MSEvkv__2wn2MmnsQh_NvZwrIT8MEcsbYRWUs9um9psLQUvTZH5D8lZieU",
  philosophySanctuary: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE8qq2VnyPpuZ2Z8Dj5bW1FoOSISdIcmTaiQXUQVpa8UgXIHFEOEpQ6938MYZ1PgdfJRVDIeEM7a3TjC1yejdzJaiLz1PCMcnZAEgzpax7NYUt_wP6zcSR_xmns0y0jP4imMkfYHdg2OHM0xr7zq_IwYV5X-abcmsVMil_Bud1RMg5P8620T00wG7RMfgLyWqcHtwTMIg0lPDjJA-IPb86vPCJf8iqHTxoLRThWHA",
  bentoCosmetic: "https://lh3.googleusercontent.com/aida-public/AB6AXuDptTs2_XPdh_FEEza873zph37YafeTOkWtKNnhEACdZxI7LMnkOvGAV5wReygIZDa9nXZwdwC6psFbZr5QUH4V0kJinlOvPm9glVcBAa1HEYxXKAh94hwH9rU3TIVX9MW7CuYG3Ummm6_8jhOyOmAOnExjHxw7CcQRP7ReQlN0X1nqfvgMJMxyegh4q5O0ATInkoSayiTZ8FiYXJkZzcj-59faqk2dEz3pomNGrPU",
  bentoRestorative: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoas8m2f1O5Qhl3mztX-KHCbNvrjiIJ5N6mACRIRGm95vayo12roCbtV9YyOzOCF4fdDc2AzlM-DghnapzIsns4Y4Sj14Apm2BcOFlW1XLc5sh3NyvKE8H4e2TyD-K94-lfOqEJ-0drM09tAA_vQJCljMGWHWGrthu_PCw1u4jZVAPXnmERGEMAQJsQpn5JoZRBVary5Xusbn15sVRFMoZwJWFAhkHESVO28eaMqQ",
  aboutOperatory: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPK8fPgiRaw8n1_GceC4Vk-gLKKL8Xt_UhramtvrdafUDfoKRAnRHtQ6TjkZxJibM0ScAIypms-csUlOXjboF9dGYAX3b76ACAkagRtV1CV6ab1Ql-HM1IUI4mN9cXw5__9WlP1E6GMfIVCa2_YNu1cXkhobbBAd3Z2lwfR6UzQ9DV-Rpj04V41V_9k0wWODmtrmGFeAT_Qx948Q1lQ7fwVmih_4L7XkP4N6FoNu0",
  testimonialPatient: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhMufNbp7ExzdfKugwhwS4zGnm6KMoDZT8fkX553HZqlWC-l626PQhAb5Qjz3SmUz00f9E28RWlS-hKXXSzId1S6OTS1b8HEUAHbKsF_2b0VpyDFg4FapJXbNn4B14KQdhpBiD8kVT7qz2fmJvUjj9oagwcSkApFhO4rIFhku9YI195OSKUv2rbGfFqedvWyLDhJwyeDO938IWrsSs3Jwfv7lKLVtWCK8Q9e6lJvg",
  caseOutcome: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBVxYB4MJmbMFEK08Zv4Y7hq5lY1ZUPaBz2c1RLivzH_UHFJ9lwaj_ZvO9hr1Ftg4cX61Ac-U9sv1JTE3Ng9xq7kGdqcaTqnLYAh-PsbcOHky3VdML2CW2KLfAUq6DZvqVR2EyG89Q35rJ1O-FjUIKMMafpv8r37R735Gr1XtydetKaqn2fhHWVDVBlR74JauqBDSPBOEOBqVdROVSvGeM4tDyAj1K-XIplifrBJI",
};

export const PARTNERS = [
  "STRAUMANN",
  "INVISALIGN",
  "3SHAPE TRIOS",
  "NOBEL BIOCARE",
  "DENTAL MONITORING",
  "PLANMECA CBCT",
];

export const STATISTICS = [
  { value: "15+", label: "Years Clinical Excellence" },
  { value: "20+", label: "Renowned Specialists" },
  { value: "10k+", label: "Smiles Restored" },
  { value: "99.4%", label: "Patient Satisfaction" },
];

export const SPECIALISTS = [
  {
    name: "Dr. Sarah Jenkins, DDS, MS",
    role: "Specialist Prosthodontist & Cosmetic Lead",
    credentials: "Harv. Grad • 14 Yrs Exp",
    specialty: "Prosthodontics",
    description: "Renowned for non-invasive veneer design and full smile harmony restorations.",
    image: IMAGES.drJenkins,
  },
  {
    name: "Dr. Julian Vance, BDS, FDS",
    role: "Consultant Oral & Maxillofacial Surgeon",
    credentials: "FDS RCS Eng • 18 Yrs Exp",
    specialty: "Oral Surgery",
    description: "Global authority in guided zygomatic and bone-regenerative dental implants.",
    image: IMAGES.drVance,
  },
  {
    name: "Dr. Elena Rostova, DMD",
    role: "Specialist Orthodontist",
    credentials: "Diamond Apex • 12 Yrs Exp",
    specialty: "Orthodontics",
    description: "Pioneering discreet aesthetic alignment, digital bite balancing, and adult clear braces.",
    image: IMAGES.drRostova,
  },
];
