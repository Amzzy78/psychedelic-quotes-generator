# Psychedelic Quotes
Welcome!  https://amzzy78.github.io/psychedelic-quotes-generator/

Psychedelic Quotes is a fun site offering a random quote generator displaying quotes mainly from professionals in the field of Psychiatry and Consciousness Research. As we are now in the era of a psychedelic renaissance in regards to the re-evaluation of the psychotherapeutic potential of psychedelics, this site is offering quotes from the perspective of psychedelics as a medicine and tool for the psyche. The site targets Psychonauts and curious folk interested in the subject matter. There is also an image gallery displaying some fun images, plus a day and date feature in the footer added purely for style to the page. The site is designed to be responsive and assessible across various devices. The design of the site is also intentionally bold and loud with a psychedelic theme in colours, font and images.
![Responsive Mockup](https://user-images.githubusercontent.com/62209464/131177119-833ddd17-0e25-43a1-856b-a7bb79b17d43.jpg)

# User Experience (UX)

## First Time Visitor Goals:

(a.) I want to easily access quotes and be inspired.

(b.) I want the site to be easy to navigate and for the content to match the sites subject title.

(c.) I want to seek out professors in the field of psychedelic research that I may not have heard of before so I can do my own research into their studies.

(d.) I want the site to be visually over the top with colours and images to match the subject matter.

(e.) I want to be able to view the site in any reasonable browser so that I can use what I’m accustomed to. 

## Returning Visitor Goals: 

(a.) I want to see new quotes when I return to the site, so I can come back more often and explore new authors and professionals in the field, so that I can educate myself and research further on this exciting and meaningful topic. 
(b.) I want to see new images when I return to the site, so that I may be stimulated visually by my response to them.


-------------------------------
# Features
1. Interactive elements.

      (a.) A container that changes the quote and author on the click of a button.

      (b.) A container that changes images on the click of a previous and next button.

2. Responsive on all device sizes. 

3. Links to external websites for further reference. All open in a new tab.
   (a.) Heading/introduction text under the logo is linked to Michael Pollan's book where the excerpt was borrowed.
   (b.) The default first sentence/heading on the quote generator (before it is pressed) which is taken from a research paper on the National Center for Biotechnology Information, U.S. National Library of Medicine website.
   (c.) The default second sentence/quote on the quote generator (before it is pressed) is taken from Mind Medicine Australia's website.

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
   ![](https://user-images.githubusercontent.com/62209464/131216433-9278cb3b-b593-411d-a033-2ef6fc27d299.png)<br>
   The first sentence of default text, Psychedelic Medicine: A re-emerging therapeutic paradigm, is is taken from the heading of an article by Kenneth W. Tupper, PhD, Evan Wood, MD PhD, Richard Yensen, PhD, and Matthew W. Johnson, PhD. It is referenced on the National Center for Biotechnology Information, U.S. National Library of Medicine website.

   The second sentence,‘Psychedelics, used responsibly and with proper caution, would be for psychiatry what the microscope is for biology and medicine or the telescope is for astronomy’ by Professor Stan Grof. Referenced - From Sacred Plants to Psychotherapy: The History and Re-Emergence of Psychedelics in Medicine By Dr. Ben Sessa.
   Both sentences will disappear when the press for new quote is generated by the button.

   The button within the quote generator triggers the random quotes/author and images which are held in an array in the js file and for the purpose of style their is also another array holding various colours that are also triggered by the button.This adds a colourful changing background with each new quote.


  ### Image Gallery
  ![](https://user-images.githubusercontent.com/62209464/130657995-baac043c-165e-4f26-88ba-dd1c37e57a88.jpg)
  The images for the gallery are held in an array that are triggered by the previous and next button element. They were added as a fun visual element to the page.

   ### The day and time container
   ![](https://user-images.githubusercontent.com/62209464/130659035-2cc65002-1aa3-41d5-a0b8-31b9c438cb6e.jpg)
   This was added as a style feature to the footer.

   ## Design
   --------------
   ### Colour palette:
   Based on the 60's colour scheme.
   ![](https://user-images.githubusercontent.com/62209464/131177633-6d85bbe0-0bd3-4a69-824f-8b79e3db01fa.jpg)

   Quotes colour array.
   ![](https://user-images.githubusercontent.com/62209464/131177655-4f1b27a3-042c-4da9-a9c7-51fb10ab3197.jpg)
   
   ### Typography:
   Ohno Blazeface from Adobe fonts, also based on the psychedelic 60s typography.
   ![](https://user-images.githubusercontent.com/62209464/131178240-ce72cd64-5234-4032-99a6-bf3e2174f7da.jpg)
   ### Imagery:
   Psychedelic inspired images from Adobe and resized in Photoshop.

   ## Wireframes
   1. Desktop

   ![](https://user-images.githubusercontent.com/62209464/130970949-a012a0f3-b27e-4f3c-96ca-641b93d2ebc2.png)

   2. Mobile

   ![](https://user-images.githubusercontent.com/62209464/130971341-732ae8e2-27ae-46d9-bb9b-c14e60031d3b.jpg)

## Testing
--------------------------------------
### Unicorn Revealer:
This dev tool helped in revealing where there was overflow from the image gallery container which was affecting the responsive layout on the iPhone 5/SE. 
### Lighthouse metrics:
Focused on improving the overall performance score by eliminating render-blocking resources which in particular had to do with the external typekit and issues with preloading. Created a second css stylesheet with the Adobe typekit and linked in html. Followed suggestions by Lighthouse to improve score: Added <link rel="preload"> and to css and js file in the header and <script...defer></script> in the body. This enabled the script to be downloaded in parallel to parsing the page, and executed after the page finished parsing. 


Added meta name="description" in html header which boosted the SEO.
### Mobile score:
![](https://user-images.githubusercontent.com/62209464/131176376-4cb7a938-8fa0-40ee-aecd-a586715c931d.png)
### Desktop score:
![](https://user-images.githubusercontent.com/62209464/131175129-b2bf58b1-7d54-4096-aca1-60d5b5f70c3d.png)

## Validator Testing
--------------------------------------
HTML: 
![](https://user-images.githubusercontent.com/62209464/130991058-621a6843-758d-41f7-9c1c-e5f3c6caca29.png)
CSS:
![](https://user-images.githubusercontent.com/62209464/130996285-b146ec74-619c-4909-8f30-06624470d19f.png)
JS:
![](https://user-images.githubusercontent.com/62209464/131172727-2f1d4899-c196-4e20-bab9-67c8c57e6206.png)
Color Contrast Accessibility Validator:
![](https://user-images.githubusercontent.com/62209464/130998702-7ede7c1c-319f-4775-856f-74de73694a48.png)
Web Content Accessibility Guidelines (WCAG) 2.1 standards:
![](https://user-images.githubusercontent.com/62209464/130998964-0107cce5-fe48-4e6a-b78f-3c3571f528d1.png)

### Fixed Bugs
--------------------------------------
The suggestion on jshint: Two warnings
86	['quoteText'] is better written in dot notation.
87	['quoteAuthor'] is better written in dot notation.
Added preload first then link rel="dns-prefetch" to typekit to improve pageload speed as per lighthouse suggestion to speed up third party origins. This bumped up the performance score.

### Unfixed Bugs
------------------------------
There is also at times a latency with the array of colour changes in the quote generator and also with the quotes. 

 ## Features Left to Implement
 --------------------------------  
 Add a seperate container focusing on women within the field of psychedelic research and therapy, to showcase their work.

## Deployment
-------------------------------------
The site was deployed to GitHub pages. 
The steps to deploy are as follows:
In the GitHub repository, navigate to the Settings tab from the source section drop-down menu, select the Main Branch. Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link can be found here -  https://amzzy78.github.io/psychedelic-quotes-generator/

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
   4. https://www.beckleyfoundation.org/amanda-feilding/?gclid=CjwKCAjwmqKJBhAWEiwAMvGt6BmpKWq9gPyqQmsVaaxSDHXIUIH7nHPlM6hI5WIDzTRw9KCcDQuP1xoCdoQQAvD_BwE
   5. https://highexistence.com/aldous-huxley-quotes/
   

   Images
   -------------
   https://stock.adobe.com/ie/search/free?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=0&filters%5Bcontent_type%3Atemplate%5D=0&filters%5Bcontent_type%3A3d%5D=0&filters%5Bcontent_type%3Aaudio%5D=0&filters%5Binclude_stock_enterprise%5D=0&filters%5Bcontent_type%3Aimage%5D=1&filters%5Bfree_collection%5D=1&filters%5Border%5D=relevance&k=psychedelic&order=relevance&safe_search=1&search_type=asset-type-change&search_page=1&get_facets=0

   https://www.beckleyfoundation.org/amanda-feilding/?gclid=CjwKCAjwmqKJBhAWEiwAMvGt6BmpKWq9gPyqQmsVaaxSDHXIUIH7nHPlM6hI5WIDzTRw9KCcDQuP1xoCdoQQAvD_BwE

   https://www.worthpoint.com/worthopedia/gary-fisher-blotter-art-psychedelic-1933404763

   https://en.wikipedia.org/wiki/Daniel_Pinchbeck

   https://synergeticpress.com/blog/consciousness-and-psychedelics/bicycle-day-2019-and-the-history-of-lsd/

   https://www.worthpoint.com/worthopedia/vintage-original-photo-sexy-roberta-119119409

   https://www.wired.com/2002/09/professorx/

   https://thetrilobitematronofprague.tumblr.com/post/628282724403281920/art-terence-kemp-mckenna-by-nicolas-rosenfeld

   https://doubleblindmag.com/courses/microdosing/

   https://plato.stanford.edu/entries/whitehead/

   https://www.deviantart.com/jesstheninjapanda/art/Aldous-Huxley-Psychedelic-669584477

   https://psychedelictimes.com/stan-grof-psychedelic-legacy-javier-charme/

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

    ## Technologies 
   -------------------
   1. HTML
   2. CSS
   3. JavaScript

----------------------------------


  