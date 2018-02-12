import life from './img/life-thumb.jpg';
import travel from './img/travel-thumb.jpg';
import style from './img/style-thumb.jpg';

const lifePlans = [
  {
    name: 'Wedding',
    description: 'It\'s your wedding day! Let\'s take pictures to remind us of this very special day.',
    link: '/services',
    price: 4000
  },
  {
    name: 'Others',
    description: 'Events like birthdays, class reunion and family get together. We got you!',
    link: '/services',
    price: 800
  }
];

const travelPlans = [
  {
    name: '1 month or less',
    description: 'Short vacation? Let\'s go and capture some great memories.',
    link: '/services',
    price: 2500
  },
  {
    name: '3 months or less',
    description: 'Spend your vacation right without worrying about not being able to capture moments.',
    link: '/services',
    price: 5000
  },
  {
    name: '>3 months',
    description: 'No matter how long, we still got your back!',
    link: '/services',
    price: 10000
  }
];

const stylePlans = [
  {
    name: 'Street',
    description: 'Let\'s roam the street and show off your style.',
    link: '/services',
    price: 500
  },
  {
    name: 'Studio',
    description: 'Need a more professional setup? We got you.',
    link: '/services',
    price: 800
  }
];

export default [
  {
    name: 'Life',
    description: 'We provide service for life events such as weddings and birthdays.',
    longDescription: 'Sed et efficitur magna, eget dictum felis. Vestibulum in porttitor orci. Vivamus purus augue, facilisis ut placerat quis, suscipit eu odio. Vivamus laoreet ultrices nibh eget feugiat.',
    link: '/services',
    img: life,
    plans: lifePlans
  },
  {
    name: 'Travel',
    description: 'We will accompany you in your travel as your personal photographer.',
    longDescription: 'Vivamus gravida suscipit nulla, sit amet feugiat enim euismod non. Donec non sodales orci, ac euismod est. Duis molestie odio libero, ac tempus lacus porta in. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/services',
    img: travel,
    plans: travelPlans
  },
  {
    name: 'Style',
    description: 'We do fashion, portaits and studio photoshoots.',
    longDescription: 'Aenean tempor arcu in erat aliquam tempor. Nunc vitae tempus nibh. Cras porttitor rutrum venenatis. Fusce a velit malesuada, bibendum nulla quis, vehicula augue. Sed nec nulla sapien. Nullam pharetra ornare tincidunt. Pellentesque et massa nec nunc ullamcorper pellentesque a eu dui.',
    link: '/services',
    img: style,
    plans: stylePlans
  },
];