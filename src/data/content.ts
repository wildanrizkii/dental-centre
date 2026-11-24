export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Specialists", href: "/specialists" },
  { label: "Treatments", href: "/treatments" },
  { label: "Facilities", href: "/facilities" },
  { label: "Articles", href: "/#articles" },
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
  
  // About Us Page specific assets
  aboutHeroSuite: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY-qMVTJ0lK6c2JP7e08p6F90irdWuhw2dnGWZ4COYnKjzF2e7O5lVYgHshwWN4l1MOPcUJsSsdxnSIp7QfkMU3IlvS2YOWbTL0Q7s0gewgOTolkeVfQUvqFC7jS25ekk5_SECMuCxpaqsIg1rUEeAgw8qm2cuIpgHrRpeg3FIKmTVLKZFfNfecXXTgXv3QR3m0_KRm3_RytvMyf1hqlHCojC09hAsR7AHHU5OfSs",
  founderPortrait: "https://lh3.googleusercontent.com/aida-public/AB6AXuCErl2sm-ssfjPEPs1KEr5l9oOzCB-KodX5IkqyOTdyYbOIrDIAEL5CM6T1xzM9kvZs_jYRMYepGFqHABHNm-aVTPObOWNaS7H1Y-IdEDUPlWZGnxJQ6VVmAlPrwkwr_Ch2of1kEjH3VbEav9NamxGL5G7-SIveTrehhEVFhuuIQJFMV8kNkGrgMI-YqrLI7mpe2OS8Y1RumFHabkVu9NSyoNMkyc5xppk6vIZaAPI",

  // Facilities Page specific assets
  facilityBelgravia: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDiIoLLqkaIo0qgrAAM4ZG_LjdsJmuUI6lTp3elXIK8R6FwRQtZJm2J1eBnX6AW0Uu7Hv7j0Ku1GX18p74cDZbkc7dxKIjxbz3vqVk9vv7hgBU53B9DwdlKM7pvCtkHsaTnyw3pzFDhCQTrFU0QNGpIdU-zukpi4nrXgwelGXY1_6dlyWCXCVNs8sf0_4yYQrnJ1n7icUJ8LZD4c-njexO4uc604tFVlexDx_zOAo",
  facilityAlpha: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfw-BCqOryau8LTG7mtfObFyvypJOqcODj0LBVuY02b330ICFrIjGEQLGr4nIHQ2g4G0KUQmPJIVLkEop6e50YgZ8HcSzlUX8thZlZndkkyzI04s3CtO2gmzwyw1mNofBOd_hBLs-DYjI35cIDssWFH2SNkcWtV0e7JiltO3BO1q4788tjDsmO-EdeNfp85T9HO0GyFCSEmIQo2byzwx-z9RYWQZPq62HxVJr6KF0",
  facilityCocoon: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6DVv8wE4H_nRDCQzU0rZqFIgBoZG0L7swxTCnaABsfp9nChpuKli4Glnr82QcvBQuGvRb9iPOFJUmXfOd3OIgguTGRZrDoc1jfG_f9qfraRIxCCXmbMTDa_ui1fPLIjDzd0Qm41Gju-5prLkhEDjfQ_QlVK13NbL3xuR5mj-tRYB2_TwH8IU0mo4_j2s9e1gRGn3nJthpbaxRWjR7VzKBSzZXTcaXSV6KmvxYsUg",
  facilityConsultation: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUiUXqCcs1hTpf0G42FOac7TyqNOkFItfZ18O6sL8Nh9tQGLkJYe9UHSHXYH2aM836SL-tOkDhYb-ANoGQBwsjyvDyc2aoQcrSft_ajPuF-S6oD4kgI0urNB4p8toB7AGrJkM09tPeezylf1kcZ_qIQ1wLheb83PqraVeq97zCholGa5b_fgejRBk4ZgsUVeKZ_IcyCMxf3OcoGehmiiKqNukgzmIXzU7pm3qf-0s",
  facilityConcierge: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYyJVrmMplh3SopzVrf_ek8gfrGWYdJ4xPBdve7X2bnqarxHjtTmnMjHGcQ8tKMfL2OYek62G-Dw-kU1pnfxc_D24LbPeKML0XHVVy92onNbA1dikB6Q4zOXg1Lo1v5rT_12NDvYO_2jIcWDNUIF5tUQv91BpDTxLQj29SY05QUDVwCgafFfQOszYupf1IiKBHfTsaQSPiWEb_It4JXOGGny6Xgu1vUUr0Tdu2H7Q",

  // Specialists Page specific assets
  specJenkins: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxeuH1sLt2ukmzlZ0RkJWskmjEGac9WpUct0mqx2qjQk686v62WoeRlDEbhIbg856ucEVoGyOUWPodrvMJU8igLEQ56DDOFYaQ-5nIMKQXRCrkCVxzsPU3pGsKk2NPTMDO3r5oYWx4HySoMlkjRXNcdEOysokGkH7lGTRbtcwOLRTzwz37awS6Oq0OlzrBQ8atjBZqc7sdfEteabVJYfKSGCLoPfSVtAj7pz4qC3o",
  specVance: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf-ZM7EgDDtXohbs3kMCFNmJs7njZLJUMfPlk_2BkUukHBDlxdXu7Pmu7XNtXwgfOD6OYOE_ejOl0QkO796ii3Fwk3xPAsdfHJ6HXGQJsaE4z1wOjo01w-q_U4Fc8SiA8SVrG1yz8_MIb8MjA89XIoV24-tbnrCPKRPr56NZup06ts-pY7ol8JxzUyr1bJP5x5A2OZk95PQ1aNa_7mmJcwtuU-zA7ffM4IyMIPQIo",
  specRostova: "https://lh3.googleusercontent.com/aida-public/AB6AXuA55JxQTpWl-sj8juvV62LHweIxCsXlt9nELl6SvoroiQfc6A2oiiZaao4ug1ZfYGp-bT9G-umna5zvGX_r_SbwFCYdnq_6uy5e7W7PDiJ7LKKCwi0-8f1ZP58scywcOdmQmWDZu5XLb96CjA-GxqwWNt5BZaEYn6cc65O3wZhK9-JrxboQZ0nAf17czFiV441qslT8-ZyLss16QJVeXhnaovY3uwnH3bb3Fg4hVH0",
  specThorne: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdPblug9BwPhSysWaeAFOBTwNl1z3cuCbxI4QelouUJ0X8Av1MdDrJnHuk9_LGel2x8zpK_ff3EssRvZ2JofIODmuL63dnISxqm8w02nX4eI5vXwkJuNSCugJnhVBMK7gy7U1DPlcJS8cAcDCvb002BSRy3eYX8EywGzWRli45Uza51p9BwTfvjVMCA6i48v_plYzRxxb-2NGE7me8EM3058QDVooHBstILWtmoOM",
  specPatel: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL8dbN1wHXfyNU0IYNp6_uexOlLJ0NNoneUdjVEySTna4R5Y5XGAgVgC9amxSrs6HXcDTnyHtxeoBo241SIkUXKKLUudL8lB0UjwJgEe_qykqh6Xg_MVUtNxEK19xawYZnFHvUzyOTZh8B7WH294Omrns8a8OwK46UM7jYDlt9nhGbx_dfH0CmkosFFvX2rbJjQHy4BCdI7y5C_VZO-X98njyISbBYU2IQQeW_SD8",
  specLindqvist: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVvK1mC9JUR8bTwqz-7IEJ1H9YA1b_UwOUfRUo5E5bbncj1ciIG0OB6hkeanCmafpBQLXxvsaWxwrZkX0pTvu1Nr39dUX2AUxPZAbtN-BLJT3d-SRMLRDCs93NzEOJ2dwTAAuznXgygBT8ogkr884slCHdTqvwurs3VgAc7hl9VeRoyPtsfAgPN1MPCnU1EfPMEFMCIqjDkDEhZ_Ze3gba7fJBCqtcXNLQADc5-Ws",

  // Treatments Page specific assets
  treatmentCosmetic: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMYe023ipBzqBOPYKB335OqTEi0_vZIENhzZUSpHjI6gR9ITqHKWbN5qgyYErkuZS69ubAEvjEpGHh_4Bws8nc2-YckGkODO3WCGcwrHA8fuZ9_ooamlbJsFFP4_kO-mdW2sqYve6J784dRl3CABtfeSL1vefGQRxm074zfs8aEsNkNtqqB8sUU_-RyzrfnYEp_yk4wKHgKuAHw0a9x6bVpwZnDkJV99_lWWxGY1Q",
  treatmentImplants: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPMFxjMOBtdtZ79bZCxbp-lwKJn3r28AtV-IOkLVumaot08ALzcCiFdLnPw76Y2YmN99WNAv6dEKwgGihutbNP-zVIn3pm4w_P914IIXAf-4oiA8rSVYvBOebof0UcOiwS46jkdjKzwwATfi1PeBbHkfINWiUqBJBRbD8fO67m06Po0dkFEYbMN82eCvPKhX1982su1EwdwkA5EPS_Zd2O6-dbgaeI7_5Rs3PJT6g",
  treatmentOrtho: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9J0x5-QqyyaYT-WhO9uQUHJVWe6AV7N1Egzc7ktQd5wYpzVmw7GKHQOCV8f7HJ7uIvc854LCYKZE--uYGhpSjTTUjTHBMFEznZFeZRmxNwKxEzexnxwKlXUBaZO05Wnd9axnJrY8-V4GI3DgIA-WPKn5VgLpnzZziYpdrDkxiPhGyjjvkVB3Fzg-g94o_32H4eNebmu9JXLtloiMV66lVEdhYj2D0L2KJRaxjaBw",
  treatmentEndo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKtHJwYppGAtT8KPZO-YWNFwjKr5jL3R9b5Zwteg0b9XepnT6sDajzCQ4JZrNPEAD3uNBiYRcL_zMKtg2o6i-uydBkpb3MnsD95Qwp0rLkgegpYRIFqB_n87m9Qfs9r3xXD9ytZjgYHUIldy-HJMM6_gx9o9O3Q9f9wy5dtwXpeYQzk_HsHoonN1a96Dv7IOcZV1PVbaXGlCMMcPkZQTPX0ktRhqwax7eEWokwIU4",
  treatmentTMJ: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBSZKHkpdmdM0528cDfFyhIlrQ1uT7qNfOjqfy3RrzIrLeVDiYN4pCCuY5tTVDls9AdN08Z2YOE4w5SvHvoneTzONiWTE3r2fP0kH1m0XR58zA2SWYkpM1m08v7V1m73llCIhdBqOoO7IFB58rv9qEwPkZZ5r9okG_Y2HixukxCT9sBbbHg7ND_bkaNHhfGuB-5CHis9dF-48mD0_B_-StW0q33QKvJufDOFM2Z5A",
  treatmentBiofilm: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAuiOcYaqsIjuC9vZ1KEdp_kQvk-fEVcjc6L1wnvlWr7fiaMYcLIBU99FnKnISVBjaTr7RMzDH0I-IS0SmsF75rj02WVh0oJSHeMkZW4-NhmASrLK2NmATbj8kxcw-ZKlNDsr1kad6MDDxR73aCRslwqMyeXBYChf_UurNCW0MOWBGg9nqZDSMjSktFVcksD6EaszVuWDABnCxIl3ysO1BZ2DCOu1TmTo1XqbKui8",
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
