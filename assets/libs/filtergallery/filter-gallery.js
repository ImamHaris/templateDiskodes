const filterContainer=document.querySelector(".gallery-filter"),galleryItems=document.querySelectorAll(".gallery-item");filterContainer.addEventListener("click",e=>{if(e.target.classList.contains("filter-item")){filterContainer.querySelector(".active").classList.remove("active"),e.target.classList.add("active");const t=e.target.getAttribute("data-filter");galleryItems.forEach(e=>{e.classList.contains(t)||"all"===t?(e.classList.remove("hide"),e.classList.add("show")):(e.classList.remove("show"),e.classList.add("hide"))})}});



document.querySelectorAll('.gallery-item-inner').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();

      const src = this.getAttribute('data-src');
      const type = this.getAttribute('data-type') || 'image';
      const modalContent = document.getElementById('modalContent');
      modalContent.innerHTML = ''; // Clear previous content

      const wrapper = document.createElement('div');
      wrapper.style.maxWidth = "100%";
      wrapper.style.maxHeight = "90vh";
      wrapper.style.display = "flex";
      wrapper.style.justifyContent = "center";
      wrapper.style.alignItems = "center";

      let content;

      if (type === 'video') {
        content = document.createElement('iframe');
        content.src = src;
        content.setAttribute('allowfullscreen', '');
        content.style.border = "none";
      } else {
        content = document.createElement('img');
        content.src = src;
        content.className = "img-fluid";
      }

      // Common styles for both
      content.style.maxWidth = "100%";
      content.style.maxHeight = "90vh";
      content.style.width = "auto";
      content.style.height = "auto";
      content.style.objectFit = "contain";
      content.style.display = "block";

      wrapper.appendChild(content);
      modalContent.appendChild(wrapper);

      const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
      modal.show();
    });
  });