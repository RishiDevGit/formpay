/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    '*.{html,js}'
  ],
  theme: {
    extend: {},
    colors: {
      'darkerGrey':'#1C2433',
      'darkBlack2': "#1c2736",
      'darkGrey':'#343434',
      'normalWhite':'#98A2B3',
      'darkBlack':'#344054',
      "lightGrey":"#616771",
      "lightGrey2":"#ECEDEE",
      "lightGrey3": "#E4E7EC",
      'lightWhite':"#475467",
      'lightBlack':"#677289",
      'normalBlack':"#F9F8FB",
      'normalGrey': '#4E4F52',
      'activenormalGrey':'#25085A',
      'purpleLight':'#F9F5FF',
      'purpleLight2':'#F9F5FE',
      'purpleDark':'#6941C6',
      "blueDark":"#270983",
      'white':'#FFFFFF',
      'formPay10': '#F9F5FE',
      'formPay11': '#F9F5FF',
      'formPay20': '#F3EBFE',
      'formPay100': '#7936F4',
      'formPay200': '#671EEB',
      'formPay300': '#5C35A4',
      'successDark':"#027A48",
      'successLight':"#EEF6F3",

    },
    fontFamily: {
      'inter': "Inter"
    },
    fontSize:{
      "verySmallText":"12px",
      "smallText":"14px",
  "normalText": "16px",
  "largeText":"18px",
  "veryLargeText": "36px"    
    },
    fontWeight: {

      "fontLight": "400",
      "fontMedium": "500",
      "fontBold": "600",
      "fontMoreBold": "700"

    }
  },
  plugins: [],
}

