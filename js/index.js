const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};


const setImageSrc = (selector, src) => {
  document.querySelector(selector).setAttribute('src', src);
};


// Navbar text
const navigation = document.querySelector('nav');

const navLinks = document.querySelectorAll('nav a');
const headings = document.querySelectorAll('h4');
// Create array of nav texts from site object. Site object also has the img logo so we remove it.
const linkText = Object.keys(siteContent.nav).map((key) => siteContent.nav[key]).slice(0, -1);

Object.keys(navLinks).forEach((key) => {
  navLinks[key].textContent = linkText[key];
  navLinks[key].style.color = 'green';
  headings[key].textContent = linkText[key];
});

const createLink = (text) => {
  const el = document.createElement('a');
  el.setAttribute('href', '#');
  el.textContent = text;
  el.style.color = 'green';

  return el;
};

navigation.prepend(createLink('Home'));
navigation.appendChild(createLink('Pricing'));

// Example: Update the img src for the logo
setImageSrc('#logo-img', siteContent.nav['img-src']);


// Call to action
const ctaHeading = document.querySelector('.cta-text h1');
const ctaHeadingString = siteContent.cta.h1.split(' ');

for (let i = 0; i < ctaHeadingString.length; i += 1) {
  ctaHeading.append(ctaHeadingString[i]);
  const br = document.createElement('br');
  if (i === ctaHeadingString.length - 1) {
    break;
  }
  ctaHeading.append(br);
}

// CTA Button
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

// CTA Image
setImageSrc('#cta-img', siteContent.cta['img-src']);


// Main Content
const sectionParagraphs = document.querySelectorAll('.main-content p');
const sectionTextKeys = Object.keys(siteContent['main-content']).filter((key) => siteContent['main-content'][key].includes('content'));

Object.keys(sectionTextKeys).forEach((key) => {
  sectionParagraphs[key].textContent = siteContent['main-content'][sectionTextKeys[key]];
});

// Middle Image
setImageSrc('#middle-img', siteContent['main-content']['middle-img-src']);


// Contact
const contactFields = document.querySelectorAll('.contact p');
const contactFieldKeys = Object.keys(siteContent.contact).slice(1);

contactFieldKeys.forEach((key, index) => {
  contactFields[index].textContent = siteContent.contact[key];
});


// Footer
document.querySelector('footer p').textContent = siteContent.footer.copyright;
