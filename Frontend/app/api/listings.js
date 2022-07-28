import client from "./client";

const endpoint = "/listings";

// call server via api to get all listings in database
const getListings = () => client.get(endpoint);

// call server via api to add a new listing using all data from input and binding it
const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("village", listing.village);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);
  data.append("date", listing.date);
  data.append("intervall", listing.intervall);
  data.append("userId", listing.userId);

  // iterate trough all images passed
  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  // call uploadanimation
  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addListing,
  getListings,
};
