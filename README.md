# React State and Events Pairing 1

# Deliverables

You are given a fake api response that is being exported from `api.js`. The response is an array of multiple `dog` objects that look like this:

  > `{ "id": 1, "name": "Happy Slay", "img": "https://www.sciencenews.org/sites/default/files/2018/08/main/articles/082918_lh_crispr-beagles_feat_REV.jpg", "breed": "Beagle"}`

- You are given a component called `DogCard`, a container component called `DogsList`, an `App` component
- Your application render a list of dog images along with a button for each image that has an `innerText` of "Bark"
- When a User clicks on the "Bark" button it should render an `<h2>` to the screen with an innerText of "Bark"
- When a User clicks on the button a second time the `<h2>` should be removed from the DOM

- You can run `npm run test` to test your code but should use both TDD and BDD to verify functionality
- You can run `npm run submit` to save and push your work to github


Below you will find an example gif


![dog gif](state-pairing-gif.gif)


# Advanced React State and Events Deliverables
Go back to our morning pairing lab and do the following after watching the video:
1. Change the "bark" button on DogCard to a "favorite" button
2. The DogCard component will no longer render a new `<h2>` when the button is clicked
3. Create a FavoriteContainer
4. When a user clicks on the "favorite" button for a dog, that dog should be added to the FavoriteContainer
5. BONUS: figure out how to add multiple dogs to the FavoriteContainer