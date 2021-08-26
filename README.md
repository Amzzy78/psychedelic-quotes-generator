# Psychedelic Quotes

Psychedelic Quotes is a fun site offering a random quote generator displaying quotes mainly from professionals in the field of Psychiatry and Consciousness Research. As we are now in the era of a psychedelic renaissance in regards to the re-evaluation of the psychotherapeutic potential of psychedelics, this site is offering quotes from the perspective of psychedelics as a medicine and tool for the  psyche. The site targets Psychonauts and curious folk. There is also an image gallery displaying some fun images, plus a day and date feature in the footer added purely for style to the page. The site is designed to be responsive and assessible across various devices.
![Responsice Mockup](https://user-images.githubusercontent.com/62209464/130655139-0dd3405e-b850-4d9d-8878-640b96218ace.jpg)


-------------------------------
# Features
1. Responsive on all device sizes
2. Interactive elements

  ## Existing Features
  -----------------
   ### Header Text Logo 
   ![logo](https://user-images.githubusercontent.com/62209464/130655179-3788cfeb-d2c7-428f-a048-961b2a46201e.jpg)
   The text logo PSYCHEDLIC QUOTES in the header is a clickable link that refreshes the page which resets the quote generator to its default position. When hovering over the logo an underline appears to suggest it is a link.

   ### Heading
   ![logo/heading](https://user-images.githubusercontent.com/62209464/130656485-8ebe98a1-e061-4855-b085-b6d502b65a4c.jpg)
   #### Heading intro text is an excerpt from Michael Pollans book - How To Change Your Mind(The New Science of Psychedelics).

 
   ### Quote container
   ![](https://user-images.githubusercontent.com/62209464/130657367-c2e836fd-b19c-47ac-b9cf-7a849c16e7b1.jpg)
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
### Lighthouse metrics:
Focused on improving the overall performance score by eliminating render-blocking resources which in particular had to do with the external typekit and issues with preloading. Created a second css stylesheet with the Adobe typekit and linked in html. Followed suggestions by Lighthouse to improve score: Added <link rel="preload"> to css and js file in the header and <script...defer></script> in the body. This enabled the script to be downloaded in parallel to parsing the page, and executed after the page finished parsing.
Adding <meta name="description"> boosted the SEO.
### Mobile score:
![](https://user-images.githubusercontent.com/62209464/130985851-6ae40980-254b-4ae4-9606-16f446b10e88.png)
### Desktop score:
![](https://user-images.githubusercontent.com/62209464/130985795-55cbb083-3caf-4ff9-926f-9b3382dbd87b.png)

Validator Testing
--------------------------------------

Unfixed Bugs
--------------------------------------

Deployment
-------------------------------------

Credits
-------------------------------------
   Content
   --------
   Color palette credit:
   https://color.adobe.com/The-60s-color-theme-1704263/
   https://www.color-hex.com/color-palette/5784

   Fonts credit:
   https://www.fontspace.com/category/psychedelic
   https://fonts.adobe.com/fonts/ohno-blazeface

   quotes credit:
   https://thethirdwave.co/psychedelic-quotes/
   Psychedelic medicine: a re-emerging therapeutic paradigm
   https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4592297/
   https://www.vulture.com/2017/06/cary-grants-lsd-therapy-the-inside-story.html
   https://quotestats.com/topic/quotes-about-lsd/

   Images
   -------------
   https://stock.adobe.com/ie/search/free?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=0&filters%5Bcontent_type%3Atemplate%5D=0&filters%5Bcontent_type%3A3d%5D=0&filters%5Bcontent_type%3Aaudio%5D=0&filters%5Binclude_stock_enterprise%5D=0&filters%5Bcontent_type%3Aimage%5D=1&filters%5Bfree_collection%5D=1&filters%5Border%5D=relevance&k=psychedelic&order=relevance&safe_search=1&search_type=asset-type-change&search_page=1&get_facets=0

   hnml credits:
   https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload
   
   css credits:
   https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_responsive

   js credit:
   learn-webdev-
   https://www.youtube.com/channel/UCCcK9DoXcPYcUYU2aSR7zzQ

   






   Media
   ------

Other General Project Advice
--------------------------------------   


Conclusions and future direction
-----------------------------------------