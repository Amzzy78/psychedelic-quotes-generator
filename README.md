# Psychedelic Quotes
Welcome! https://amzzy78.github.io/psychedelic-quotes-generator/

Psychedelic Quotes is a fun site offering a random quote generator displaying quotes mainly from professionals in the field of Psychiatry and Consciousness Research. As we are now in the era of a psychedelic renaissance in regards to the re-evaluation of the psychotherapeutic potential of psychedelics, this site is offering quotes from the perspective of psychedelics as a medicine and tool for the  psyche. The site targets Psychonauts and curious folk. There is also an image gallery displaying some fun images, plus a day and date feature in the footer added purely for style to the page. The site is designed to be responsive and assessible across various devices.
![Responsive Mockup](https://user-images.githubusercontent.com/62209464/130655139-0dd3405e-b850-4d9d-8878-640b96218ace.jpg)

# User Experience (UX)

## First Time Visitor Goals:

(a.) I want to easily access quotes and be inspired.

(b.) I want the site to be easy to navigate and find content relative to the subject.

(c.) I want to seek out professors in the field of psychedelic research that I may not have heard of before so I can do my own research into their studies.

(d.) I want the site to be visually pleasing.

(e.) I want to be able to view the site in any reasonable browser so that I can use what I’m accustomed to. 

## Returning Visitor Goals: 

(a.) I want to see new content when I return to the site, so I can come back more often. 


-------------------------------
# Features
1. Interactive elements.

      (a.) A container that changes the quote and author on the click of a button.

      (b.) A container that changes images on the click of a previous and next button.

2. Responsive on all device sizes. 

  ## Existing Features
  -----------------
   ### Header Text Logo 
   ![logo](https://user-images.githubusercontent.com/62209464/130655179-3788cfeb-d2c7-428f-a048-961b2a46201e.jpg)
   The text logo PSYCHEDLIC QUOTES in the header is a clickable link that refreshes the page which resets the quote generator to its default position. When hovering over the logo an underline appears to suggest it is a link.

   ### Heading
   ![logo/heading](https://user-images.githubusercontent.com/62209464/130656485-8ebe98a1-e061-4855-b085-b6d502b65a4c.jpg)

   #### Heading intro text is an excerpt from Michael Pollans book - How To Change Your Mind(The New Science of Psychedelics).
   <br>

 
   ### Quote container
   ![](https://user-images.githubusercontent.com/62209464/130657367-c2e836fd-b19c-47ac-b9cf-7a849c16e7b1.jpg)<br>
   The first sentence of default text, Psychedelic Medicine: A re-emerging therapeutic paradigm, is is taken from the heading of an article by Kenneth W. Tupper, PhD, Evan Wood, MD PhD, Richard Yensen, PhD, and Matthew W. Johnson, PhD. It is referenced on the National Center for Biotechnology Information, U.S. National Library of Medicine website.

   The second sentence,‘Psychedelics, used responsibly and with proper caution, would be for psychiatry what the microscope is for biology and medicine or the telescope is for astronomy’ by Professor Stan Grof. Referenced - From Sacred Plants to Psychotherapy: The History and Re-Emergence of Psychedelics in Medicine By Dr. Ben Sessa.
   Both sentences will disappear when the press for new quote is generated by the button.

   The button within the quote generator triggers the random quotes which are held in an array in the js file and for the purpose of style their is also another array holding various colours that are also triggered by the button.This adds a colourful changing background with each new quote.


  ### Image Gallery
  ![](https://user-images.githubusercontent.com/62209464/130657995-baac043c-165e-4f26-88ba-dd1c37e57a88.jpg)
  The images for the gallery are held in an array that are triggered by the previous and next button element. They were added as a fun element to the page.

   ### The day and time container
   ![](https://user-images.githubusercontent.com/62209464/130659035-2cc65002-1aa3-41d5-a0b8-31b9c438cb6e.jpg)
   This was added as a style feature to the footer.

   ## Wireframes
   1. Desktop

   ![](https://user-images.githubusercontent.com/62209464/130970949-a012a0f3-b27e-4f3c-96ca-641b93d2ebc2.png)

   2. Mobile

   ![](https://user-images.githubusercontent.com/62209464/130971341-732ae8e2-27ae-46d9-bb9b-c14e60031d3b.jpg)

   ## Design
   --------------
   ### Colour palette:
   Based on the 60's colour scheme.
   ### Typography:
   Ohno Blazeface from Adobe fonts, also based on the psychedelic 60s typography.
   ### Imagery:
   Psychedelic inspired images from Adobe and resized in Photoshop.

 ## Features Left to Implement
 --------------------------------  
 Images of the authors to pop up with the quote within the quote generator. 
 
 ## Technologies 
 -------------------
 1. HTML
 2. CSS
 3. JavaScript

----------------------------------
## Testing
--------------------------------------
### Unicorn Revealer:
This dev tool helped in revealing where there was overflow from the image gallery container which was affecting the responsive layout on the iPhone 5/SE.
### Lighthouse metrics:
Focused on improving the overall performance score by eliminating render-blocking resources which in particular had to do with the external typekit and issues with preloading. Created a second css stylesheet with the Adobe typekit and linked in html. Followed suggestions by Lighthouse to improve score: Added <link rel="preload"> to css and js file in the header and <script...defer></script> in the body. This enabled the script to be downloaded in parallel to parsing the page, and executed after the page finished parsing.

Added meta name="description" in html header which boosted the SEO.
### Mobile score:
![](https://user-images.githubusercontent.com/62209464/130985851-6ae40980-254b-4ae4-9606-16f446b10e88.png)
### Desktop score:
![](https://user-images.githubusercontent.com/62209464/130985795-55cbb083-3caf-4ff9-926f-9b3382dbd87b.png)

## Validator Testing
--------------------------------------
HTML: 
![](https://user-images.githubusercontent.com/62209464/130991058-621a6843-758d-41f7-9c1c-e5f3c6caca29.png)
CSS:
![](https://user-images.githubusercontent.com/62209464/130996285-b146ec74-619c-4909-8f30-06624470d19f.png)
JS:
![](https://user-images.githubusercontent.com/62209464/130997650-80b155f9-3b16-45d1-baf5-b83f6da94eb4.png)
Color Contrast Accessibility Validator:
![](https://user-images.githubusercontent.com/62209464/130998702-7ede7c1c-319f-4775-856f-74de73694a48.png)
Web Content Accessibility Guidelines (WCAG) 2.1 standards:
![](https://user-images.githubusercontent.com/62209464/130998964-0107cce5-fe48-4e6a-b78f-3c3571f528d1.png)

### Unfixed Bugs
--------------------------------------
The suggestion on jshint: Two warnings
86	['quoteText'] is better written in dot notation.
87	['quoteAuthor'] is better written in dot notation.
This I have tried to fix but I loose the link to the quotes. It needs to be corrected.
There is also a latency sometimes with the array of colour changes in the quote generator and also with the quotes. I have not figured why yet.


### Deployment
-------------------------------------
The site was deployed to GitHub pages. 
The steps to deploy are as follows:
In the GitHub repository, navigate to the Settings tab from the source section drop-down menu, select the Main Branch. Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link can be found here - https://amzzy78.github.io/psychedelic-quotes-generator/

### Credits
-------------------------------------
   #### Content
   --------
   ##### Color palette credit:
   https://color.adobe.com/The-60s-color-theme-1704263/

   https://www.color-hex.com/color-palette/5784

   ##### Font credit:
   https://fonts.adobe.com/fonts/ohno-blazeface

   ##### Quotes credit:
   ###### Psychedelic medicine: a re-emerging therapeutic paradigm:
   https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4592297/
   ###### Heading: 
   https://michaelpollan.com/books/how-to-change-your-mind/
   ###### All quotes within the generator:
   1. https://thethirdwave.co/psychedelic-quotes/
   2. https://www.vulture.com/2017/06/cary-grants-lsd-therapy-the-inside-story.html
   3. https://quotestats.com/topic/quotes-about-lsd/
   

   Images
   -------------
   https://stock.adobe.com/ie/search/free?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=0&filters%5Bcontent_type%3Atemplate%5D=0&filters%5Bcontent_type%3A3d%5D=0&filters%5Bcontent_type%3Aaudio%5D=0&filters%5Binclude_stock_enterprise%5D=0&filters%5Bcontent_type%3Aimage%5D=1&filters%5Bfree_collection%5D=1&filters%5Border%5D=relevance&k=psychedelic&order=relevance&safe_search=1&search_type=asset-type-change&search_page=1&get_facets=0

   HTML credits:

   https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload


   https://learn.codeinstitute.net/ci_program/diplomainsoftwaredevelopmentecommerce
   
   CSS credits:

   https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_responsive


   https://learn.codeinstitute.net/ci_program/diplomainsoftwaredevelopmentecommerce

   JS credit:

   learn-webdev-
   https://www.youtube.com/channel/UCCcK9DoXcPYcUYU2aSR7zzQ


   https://learn.codeinstitute.net/ci_program/diplomainsoftwaredevelopmentecommerce


   https://www.frontendcheatsheets.com/javascript


   https://dev.to/rutikwankhade/learn-javascript-concepts-by-building-a-random-quote-generator-3jan


   https://stackoverflow.com/questions/51040453/javascript-random-quote-and-authors-array

   






   Media
   ------

Other General Project Advice
--------------------------------------   


Conclusions and future direction
-----------------------------------------