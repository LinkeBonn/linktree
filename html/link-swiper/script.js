const links = [
    {
      href: "https://www.dielinke-bonn.de/",
      icon: "fas fa-globe",
      label: "Website",
      image: "../static/image/screenshots/website.png"
    },
    {
      href: "https://www.facebook.com/DieLinke.KreisverbandBonn",
      icon: "fab fa-facebook",
      label: "Facebook",
      image: "../static/image/screenshots/facebook.png"
    },
    {
      href: "https://github.com/LinkeBonn",
      icon: "fab fa-github",
      label: "GitHub",
      image: "../static/image/screenshots/github.png"
    },
    {
      href: "https://www.tiktok.com/@dielinkebonn",
      icon: "fab fa-tiktok",
      label: "TikTok",
      image: "../static/image/screenshots/tiktok.png"
    },
    {
      href: "https://nrw.social/@dielinkebonn",
      icon: "fab fa-mastodon",
      label: "Mastodon",
      image: "../static/image/screenshots/mastodon.png"
    },
    {
      href: "https://www.instagram.com/dielinke.bonn",
      icon: "fab fa-instagram",
      label: "Instagram",
      image: "../static/image/screenshots/instagram.png"
    },
    {
      href: "https://www.youtube.com/@LinkeBonn",
      icon: "fab fa-youtube",
      label: "YouTube",
      image: "../static/image/screenshots/youtube.png"
    },
    {
      href: "https://www.google.com/maps/place/Die+Linke+Kreisverband+Bonn/@50.739551,7.0893613,3a,75y,32.8h,95.2t/data=!3m7!1e1!3m5!1sIHY-8_JRnJ8YdtWBR49tiQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-5.202197751214143%26panoid%3DIHY-8_JRnJ8YdtWBR49tiQ%26yaw%3D32.804693874495946!7i16384!8i8192!4m15!1m8!3m7!1s0x47bee1bc9ffb3517:0x344e1a476408e238!2sVorgebirgsstra%C3%9Fe+24,+53111+Bonn!3b1!8m2!3d50.7396487!4d7.0894813!16s%2Fg%2F11q2nf6q9f!3m5!1s0x47bee1bc9fe4b449:0x56d73aa1309cb660!8m2!3d50.7396487!4d7.0894813!16s%2Fg%2F1thclxjk?entry=ttu&g_ep=EgoyMDI1MDQyMS4wIKXMDSoASAFQAw%3D%3D",
      icon: "fas fa-map-marked-alt",
      label: "Unser Büro",
      image: "../static/image/screenshots/buero.png"
    },
    {
      href: "https://www.flickr.com/photos/dielinke_nrw/albums",
      icon: "fab fa-flickr",
      label: "Flickr",
      image: "../static/image/screenshots/flickr.png"
    }
  ];
  
  let currentIndex = 0;
  
  const card = document.getElementById("current-card");
  const cardLink = document.getElementById("card-link");
  const cardIcon = document.getElementById("card-icon");
  const cardLabel = document.getElementById("card-label");
  const cardImage = document.getElementById("card-image");
  
  function showCard(index) {
    if (index >= links.length) {
      cardLink.href = "#";
      cardIcon.className = "fas fa-check-circle";
      cardLabel.textContent = "Alle Links durch!";
      cardImage.src = "../static/image/PdL_Logo.png";
      return;
    }
    const link = links[index];
    cardLink.href = link.href;
    cardIcon.className = link.icon;
    cardLabel.textContent = link.label;
    cardImage.src = link.image;
  }
  
  function swipeLeft() {
    card.classList.add("swipe-left");
    setTimeout(() => {
      card.classList.remove("swipe-left");
      card.classList.add("enter-from-top");
      currentIndex++;
      showCard(currentIndex);
      setTimeout(() => {
        card.classList.remove("enter-from-top");
      }, 400);
    }, 300);
  }
  
  function swipeRight() {
    const link = links[currentIndex];
    window.open(link.href, '_blank');
    card.classList.add("swipe-right");
    setTimeout(() => {
      card.classList.remove("swipe-right");
      currentIndex++;
      showCard(currentIndex);
    }, 300);
  }
  
  document.getElementById("dislike").addEventListener("click", swipeLeft);
  document.getElementById("like").addEventListener("click", swipeRight);
  
  showCard(currentIndex);
  