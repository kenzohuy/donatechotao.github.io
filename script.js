document.getElementById("image-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn gửi form mặc định
  
    var imageInput = document.getElementById("image");
    var imageFile = imageInput.files[0];
  
    if (imageFile) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        var imagePreview = document.getElementById("image-preview");
        imagePreview.innerHTML = "";
  
        var img = document.createElement("img");
        img.src = e.target.result;
        img.style.maxWidth = "100%";
        img.style.height = "auto";
  
        imagePreview.appendChild(img);
      };
  
      reader.readAsDataURL(imageFile);
    }
  });