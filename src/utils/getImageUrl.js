export let ImagePath;

(function (ImagePath) {
  ImagePath['LANDING'] = 'landing';
  ImagePath['USERS'] = 'users';
  ImagePath['ECOMMERCE'] = 'e-commerce';
  ImagePath['PROFILE'] = 'profile';
  ImagePath['WIDGET'] = 'widget';
})(ImagePath || (ImagePath = {}));

// ==============================|| NEW URL - GET IMAGE URL ||============================== //

export function getImageUrl(name, path) {
  return new URL(`/src/assets/images/${path}/${name}`, import.meta.url).href;
}
