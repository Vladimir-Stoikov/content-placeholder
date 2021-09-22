const header = document.getElementById('header');
const cardExcerpt = document.getElementById('excerpt');
const title = document.getElementById('title');
const profileImg = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

loading();

function loading() {
  let content = new Promise((resolve, reject) => {
    setTimeout(() => {
      header.innerHTML = `<img src="https://picsum.photos/1920/1080" alt="header-img" />`;
      title.textContent = `Lorem ipsum dolor sit amet.`;
      cardExcerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptas!';
      profileImg.innerHTML = `<img src="https://thispersondoesnotexist.com/image" alt="profile-img" />`;
      name.textContent = `Vladimir St`;
      date.textContent = `Sep 22, 21`;
      resolve();
    }, 2000);
  });

  content.then(() => {
    header.classList.remove('animated-bg');
    cardExcerpt.classList.remove('animated-bg');
    title.classList.remove('animated-bg');
    profileImg.classList.remove('animated-bg');
    name.classList.remove('animated-bg');
    date.classList.remove('animated-bg');
  });
}
