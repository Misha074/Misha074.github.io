const about = document.getElementById('about');
let aboutLink = document.getElementById('about-link');

aboutLink.addEventListener('click', () => {
  about.scrollIntoView({behavior: 'smooth'}, {block: 'center', inline: 'center'});
});


const programs = document.getElementById('programs');
let programsLink = document.getElementById('programs-link');

programsLink.addEventListener('click', () => {
  programs.scrollIntoView({behavior: 'smooth'}, {block: 'center', inline: 'center'});
});

const participate = document.getElementById('participate');
let participateLink = document.getElementById('participate-link');

participateLink.addEventListener('click', () => {
  participate.scrollIntoView({behavior: 'smooth'}, {block: 'center', inline: 'center'});
});

const reviews = document.getElementById('reviews');
let reviewsLink = document.getElementById('reviews-link');

reviewsLink.addEventListener('click', () => {
  reviews.scrollIntoView({behavior: 'smooth'}, {block: 'center', inline: 'center'});
});

const news = document.getElementById('news');
let newsLink = document.getElementById('news-link');

newsLink.addEventListener('click', () => {
  news.scrollIntoView({behavior: 'smooth'}, {block: 'center', inline: 'center'});
});

const contacts = document.getElementById('contacts');
let contactsLink = document.getElementById('contacts-link');

contactsLink.addEventListener('click', () => {
  contacts.scrollIntoView({behavior: 'smooth'}, {block: 'center', inline: 'center'});
});
