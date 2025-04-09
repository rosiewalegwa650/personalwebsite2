window.onload = function() {
  const greetingElement = document.getElementById("greeting");
  const hours = new Date().getHours();
  let greetingMessage = "Welcome!";

  if (hours < 12) {
    greetingMessage = "Good Morning!";
  } else if (hours < 18) {
    greetingMessage = "Good Afternoon!";
  } else {
    greetingMessage = "Good Evening!";
  }

  greetingElement.textContent = greetingMessage;
  const sprinkleContainer = document.getElementById("sprinkles-container");
  const sprinkleImages = [
    "pexels-chevanon-312418.jpg",
    "pexels-eberhardgross-2086361.jpg",
    "pexels-eliasdecarvalho-1144834.jpg",
    "pexels-ella-olsson-572949-1640772.jpg",
    "pexels-jenyzest-1125328.jpg",
    "pexels-kmerriman-20787.jpg",
    "pexels-kowalievska-1170986.jpg",
    "pexels-pixabay-416778.jpg",
    "pexels-jennifer-griffin-1640772.jpg",  
    "pexels-karolina-grabowska-2058721.jpg",
    "pexels-mike-fox-3681585.jpg",
    "pexels-pixabay-341947.jpg",
    "pexels-quang-nguyen-vinh-2195881.jpg",
    "pexels-wendy-wei-2743634.jpg"

  ];

  if (sprinkleContainer) {
    sprinkleImages.forEach((image, index) => {
      const img = document.createElement("img");
      img.src = image;
      img.classList.add("bg-img");
      sprinkleContainer.appendChild(img);
    });
  }
};
