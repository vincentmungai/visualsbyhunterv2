const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [];
const maxImages = 100; // Maximum number of images to check
let selectedIndex = null;

for (let i = 1; i <= maxImages; i++) {
    const imgPath = `https://kdkaybebqttspybxvtyq.supabase.co/storage/v1/object/public/gallery-images/black/${i}.webp`;

    // Check if the image exists
    const img = new Image();
    img.src = imgPath;
    img.onload = () => {
        // If the image loads successfully, add it to the gallery
        imageIndexes.push(i);

        // Create the overlay container
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        // Create the image element
        const image = document.createElement('img');
        image.src = imgPath;
        image.classList.add('galleryImg');
        image.setAttribute('loading', 'lazy'); // Add lazy loading attribute

        // Append the image to the overlay
        overlay.appendChild(image);

        // Add click event to the overlay
        overlay.addEventListener('click', () => {
            selectedImage.src = imgPath; // Show image in popup
            popup.classList.add('show'); // Add class to show popup
            document.body.classList.add('no-scroll'); // Add class to prevent scrolling
        });

        // Append the overlay to the gallery
        gallery.appendChild(overlay);
    };
}

popup.addEventListener('click', () => {
    popup.classList.remove('show'); // Remove class to hide popup
    selectedImage.src = ''; // Clear the selected image src
    document.body.classList.remove('no-scroll'); // Remove class to enable scrolling
});

