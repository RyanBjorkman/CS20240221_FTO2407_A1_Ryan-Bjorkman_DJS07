fetch("https://api.imgflip.com/get_memes")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.data.memes); // Log the memes array to the console
  })
  .catch((error) => console.error("Error fetching memes:", error));
