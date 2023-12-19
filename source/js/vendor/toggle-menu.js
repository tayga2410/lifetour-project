function toggleMenu() {
  const buttons = document.querySelectorAll('[data-menu="button"]');
  const navList = document.querySelectorAll('[data-menu="menu"]');
  const nav = document.querySelector('[data-menu="layer"]');
  const logo = document.querySelector('[data-menu="menu-logo"]');
  const telephone = document.querySelector('[data-menu="menu-telephone"]');
  const overlay = document.querySelector('[data-menu="menu-overlay"]');
  const body = document.body;
  const iconMenuIsClosed = document.querySelector('[data-menu="menu-is-closed"]');
  const iconMenuIsOpened = document.querySelector('[data-menu="menu-is-opened"]');

  function handleButtonClick() {
    const firstNavItem = navList[0];

    if (nav.classList.contains('nav--is-opened')) {
      nav.classList.remove('nav--is-opened');
      nav.classList.add('nav--is-closed');
      logo.classList.remove('nav__logo--is-opened');
      logo.classList.add('nav__logo--is-closed');
      telephone.classList.remove('nav__telephone--is-opened');
      telephone.classList.add('nav__telephone--is-closed');
      overlay.style.display = 'none';
      body.classList.remove('scroll-lock');

      firstNavItem.style.display = 'none';
      iconMenuIsOpened.style.display = 'none';
      iconMenuIsClosed.style.display = 'block';
    } else {
      nav.classList.remove('nav--is-closed');
      nav.classList.add('nav--is-opened');
      logo.classList.remove('nav__logo--is-closed');
      logo.classList.add('nav__logo--is-opened');
      telephone.classList.remove('nav__telephone--is-closed');
      telephone.classList.add('nav__telephone--is-opened');
      overlay.style.display = 'block';
      body.classList.add('scroll-lock');

      firstNavItem.style.display = 'block';
      iconMenuIsOpened.style.display = 'block';
      iconMenuIsClosed.style.display = 'none';
    }
  }

  buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
  });

  navList.forEach((listItem) => {
    listItem.addEventListener('click', () => {
      nav.classList.remove('nav--is-opened');
      nav.classList.add('nav--is-closed');
      logo.classList.remove('nav__logo--is-opened');
      logo.classList.add('nav__logo--is-closed');
      telephone.classList.remove('nav__telephone--is-opened');
      telephone.classList.add('nav__telephone--is-closed');
      overlay.style.display = 'none';
      body.classList.remove('scroll-lock');

      listItem.style.display = 'none';
      iconMenuIsOpened.style.display = 'none';
      iconMenuIsClosed.style.display = 'block';
    });
  });
}

export default toggleMenu;
