// 테일윈드CSS 기능 가운데 사용하지 않는 기능은 npm run build 명령 때 제거해 CSS 크기를 최소화할 수 있게 합니다.
// 이 기능을 사용하려면 아래처럼 설정.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/line-clamp'), require('daisyui')]
}
