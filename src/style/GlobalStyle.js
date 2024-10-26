const css = `
*{scroll-behavior: smooth;}
.fadeInTop {
  -webkit-animation: fadeInTop 2s both;
  -moz-animation: fadeInTop 2s both;
  -o-animation: fadeInTop 2s both;
  animation: fadeInTop 2s both;
}

@-webkit-keyframes fadeInTop {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}
@-moz-keyframes fadeInTop {
  0% {
    opacity: 0;
    -moz-transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    -moz-transform: translateY(0);
  }
}
@-o-keyframes fadeInTop {
  0% {
    opacity: 0;
    -o-transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    -o-transform: translateY(0);
  }
}
@keyframes fadeInTop {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-box {
  transition: 0.5s ease;
}
.service-box:hover {
  transform: scale(1.03);
}
`;
export function GlobalStyle() {
    const tag = document.createElement("style");
    document.querySelector("head").append(tag);
    tag.innerHTML = css;
}

GlobalStyle();