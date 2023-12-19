function toggleIframe() {
  const wrapper = document.querySelector(".hero__vidget-wrapper");
  const button = wrapper.querySelector(".hero__vidget-button");
  const image = wrapper.querySelector("img");
  const iframe = wrapper.querySelector("iframe");

  if (button && image && iframe) {
    button.addEventListener("click", function () {
      button.style.display = "none";
      image.style.display = "none";
      iframe.style.display = "block";
    });
  }
}

export default toggleIframe;
