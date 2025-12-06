# Imagine Dragons Website
This project is made for Imagine Dragons and it features their history, where and how the band came about. It also features their social media and how to contact them for collaborations. People can buy concert tickets for upcoming concerts and purchase merch from Imagine Dragons on this site. It also showcases the best songs of Imagine Dragons and a few collaboration songs with other artists.

## Design Process
Provide us insights about your design process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

This website is made for Imagine Dragons, a rock band. Therefore, I felt that the color scheme of black is suitable. The band is also interested to sell their merch and concert tickets, therefore they are included in the website. This websites audience is fans of Imagine Dragons and potential fans who wish to learn more about the band's history and the band members, and possibly book them for shows or collaborate with them. This website is useful for them as it provides all of those features all at once in this website. Fans can buy merch and tickets convieniently without having to go from site to site to find what they want. For the font size, I used a professional and geometric font which is similar to the Imagine Dragons logo. In the home tab, I have a large Image of the band along with the band logo to capture the users attention and gives the band a badass look. I added a dropdown tab for the merch tab to filter the merch and make it easier for users to navigate to the category they want.

### Wireframe
https://www.figma.com/design/Nk8uW8ZyJhpWMLLwpq9CCB/ID_S10271139C_Chan-Zhi-Hng_Assg1_wireframe?node-id=0-1&t=p8apbxiqkSHgAku7-1

## Features
The home tab consists of the band's image, their history and their their first breakthrough in as a band, some of their best music, and their social media and contact information.
The concert tab shows the upcoming concerts available and the ticket checkout section.
The merch tab displays all the merch of the band and a checkout cart system and payment section.
The songs tab showcases some songs of the bands segmented into categories.

### Existing Features
1. allows users to go to the band's socials by clicking the icons at the bottom of the home tab.
2. allows users to buy concert tickets by filling up the concert details and payment details and checking out.
3. allows users to add merch items to their cart and pay for all of the items at once by filling in their payment details. They can also clear the cart at anytime.
4. allows users to filter out the merch categories by clicking on the tab dropdown of the merch tab.
5. allows users to view the music videos of the band directly in the website by clicking on the video in the songs tab

### Features Left to Implement
1. dropdown tabs for the songs tab and also adding more songs.
2. email receipt sending after purchasing on the website.
3. email sending e-ticket of concert after buying.

### Technologies Used
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
    - Used to structure the content of the website.

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    - Used to style the website and make it visually appealing.

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - Used to add interactivity and dynamic behavior.

- [GitHub](https://github.com/)
    - Used as the remote hosting platform for the project’s Git repository, enabling collaboration, version control, and project management.

- [Git LFS (Large File Storage)](https://git-lfs.com/)
    - Used to handle large files such as videos efficiently, keeping the repository size manageable.

## Testing
- Concert details form:
    1. Go to the "Concert" page
    2. Try to select a location and verify that the date and time input changes
    3. Try to change the date for Hong Kong
    4. Verify that the time for Tokyo is 7.00pm local time while the rest is 8.00pm local time
    5. Try to submit the form when the location is not selected and verify there is an error
    6. Try to clear the date after selecting the location and submitting the form and verify there is an error

- Payment detials form:
    1. Go to the "Concert" and "Merch" page
    2. Try to enter an email and verify there is an error when no '@' is entered
    3. Try to enter the credit card information and verify there is an error when the input is not 16 numbers
    4. Try to enter the CCV and verify there is an error when the input is not 3 numbers
    5. Try to leave each input blank and verify there is an error telling you to input something

- Cart:
    1. Go to the "Merch" page
    2. Try to click on the shopping bag and verify it scrolls to the cart
    3. Try to add items to the cart by clicking add to cart for some merch items and verify it shows up in the cart with the name and the total price of all the items
    4. Try to clear the cart and verify the items are gone

- Filter merch tab:
    1. Go to the "Merch" tab
    2. Try to click each sub tab and verify that the items are categorised and those not in the category are hidden

### Views on different devices and browsers
On different browsers, the concert details, payment of concert tickets, merch and buttons may look slightly different. The website works on different screen sizes down to 320px width, therefore it works on almost all phones even small, old phones. On screens with a width of 600px and lower will have the elements slightly enlarged and stack in columns instead of rows for most sections.

### Problems
1. Embeding Youtube video but it is not playable due to creator not allowing embedding. After searching mulitple videos and none working. I recorded the video and saved it locally to play.
2. Using local videos made it not possible to remove the progress bar of the video when it is not hovered.

## Credits
### Content
The text for the section "home" was copied and modified from the Wikipedia article on Imagine Dragons. https://en.wikipedia.org/wiki/Imagine_Dragons

### Media
The photos used in this site were obtained from ...
- https://fanart.tv/artist/012151a8-0f9a-44c9-997f-ebd68b5389f9/imagine-dragons/
- https://www.facebook.com/ImagineDragons/posts/11-years-ago-today-we-got-to-play-a-small-side-stage-at-the-bite-of-las-vegas-fe/10158903482176407/
- https://vectorseek.com/vector_logo/imagine-dragons-logo-vector/
- https://shop.imaginedragonsmusic.com/pages/tour
- https://www.youtube.com/@ImagineDragons/videos
- https://www.flaticon.com/
- https://shop.imaginedragonsmusic.com/
- https://chatgpt.com/

### Acknowledgements
I received inspiration for this project from (https://shop.imaginedragonsmusic.com/)