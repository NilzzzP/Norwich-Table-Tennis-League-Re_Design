HI ALL!!!

This is a project that was very passionate to me at university. It's a re-design and development of the Norwich Table Tennis League website. This site has been built with a user-first design, incorporating HCI elements through multiple stages and rounds of interviews with participants from all backgrounds. 

--------THIS IS A PROTOTYPE WEBSITE. NOT ALL FEATURES WILL WORK!-----------

You can local-host the site yourself, or click the Vercel link to view the site. 

I have written an unpublished paper on this project, walking through the process from initial research to final development. Review on the paper can be asked for on request. 

# Project Timeline

The project began with data collection from participants. I planned what forms of data collection should be used, and how they should be conducted on participants. 

Then came the first stage of development, which included mock designs and creating the first high-fidelity prototype. Once that was complete, I went back to participants to gather their thoughts, and conduct the final stage of development. 

# Topics

## First Analysis Stage

**_Questionnaire Preparations_** - Designing the questionnaire and who will receive it.

**_Interview Preparations_** - Defining the topics and structure of interviews for participants.

**_Conducting Questionnaires_** - Sending questionnaires to target audience and participants.

**_Conducting Interviews_** - Interviewing with planned content.

**_Synthesising Questionnaire and Interview Responses_** - Gathering and creating Qualitative and Quantitative data.

## First Development Stage

**_Creating Low-Fidelity Mock-ups_**

**_Creating High-Fidelity Prototype based on Low-Fidelity Designs_**

## Second Analysis Stage

**_Gathering Feedback From Participants_** - Interviewing to gather feedback on high-fidelity prototype.

Final Stage of Development was followed after.

# In-Depth Analysis Stage

## Preparations

I read through some papers which included topics such as "HCI research methods" and "UCD philosophies". There were many methods that could have been used, such as case studies and experiments. For this project, questionnaires and interviews were best suited for this. 

## Anonymous Questionnaires

Anonymous questionnaires worked best for the type of data that needed to be collected. As there were sections of the original site that needed work, I tailored questions that allowed me to gather the best opinions for those areas. I sent the Questionnaire to my University's Table Tennis club for their members to fill in. 

### Responses and Results

I was underwhelmed with the performance of the questionnaire, only having received _four_ responses. Furthermore, a large chunk of the questionnaire was left unanswered as none of the responders were "team captains". This would have allowed me to get more information regarding those questions. Because those questions were left unanswered, I could not justify spending time redesigning them.

Due to the lower number of responses, I could not comfortable draw conclusions solely based on the questionnaire. Furthermore, some of the responses were open to interpretation (my fault for making the questions too vague).

## Interviews

I asked the participants a number of questions based on 7 website designs, similar to the look or function of Norwich Table Tennis League. This was done over the span of roughly an hour during in person meetings. The interviews were relaxed which allowed participants to expand on their ideas. I observed how participants used the websites, and made note of positive and negative aspects to each site. Some questions that were asked were:

- Which design do you prefer?
- Does this design look similar to something you've seen before?
- If you could improve the website, how would you do so?
- Would you like to see this design more in website you use?

It is also important to note that the participants were from my university on my course, and between the ages of 18-25. This would incur a bias of design preferences, and include a higher technical knowledge than the majority. 

### Domains

- https://norwich.ttleagues.com/
    - This is the Norwich Table Tennis Leagues website. Participants were shown NTTL at the start so they’re able to compare this to other sites.
- https://www.tabletennis365.com/CentralLondon
    - Tabletennis365 (TT365) is used for displaying local league scores and information. However, it is used for the league in Central London. It has a different approach to how it displays local league data and its overall design.
- https://www.tabletennisengland.co.uk/
    - Table Tennis England (TTE) are the governing body for England’s table tennis scene. TTE holds user information, and provides the infrastructure for websites such as NTTL. It also holds information regarding tournaments, memberships, news and general inquiries. The researcher chose this site given its higher budget design and wider user-base.
- https://www.labl.london/
    - London Amateur Basketball League (LABL) was a website designed for a basketball league. The researcher chose this site due to its very low-budget and incomplete development. There are several design flaws/bugs within this website, which the researcher thought would be good to use as the participants can see a website with poor design.
- https://ulbl.leaguerepublic.com/index.html
    - United London Basketball League (ULBL) was a website designed to display a basketball league’s scores and team information. It featured a very monochromatic design with a simple and friendly UI. However, the website’s league data had not been updated since March 2025.
- https://www.goalsfootball.co.uk/leagues/fixtures-results-tables
    - Goals Footballs is a company focused on providing services to play football for all ages, while this specific page is for football league results and fixtures. This site had been chosen for its higher budget and very active user-base.
- https://www.worldtabletennis.com/home
    - World Table Tennis (WTT) is a globally recognised brand that hosts competitions around the world featuring some of the worlds best players. They have a user-base from nearly every country, and therefore have a higher budget for their design. It displays similar information to NTTL in terms of scores and players, but the design and format differs. This was chosen due to its professionalism, and wide active user-base.

### Interview Results

I was able to synthesis the data from interviews. Strong positive and negative points were gathered and made into a short format, which were considered in the designs. 

#### Overall Positives

- **Clear Labelling for menus and buttons**: Use icons which can be easily interpreted and understood. Clear explanations for features were possible.
- **Interactive feedback for UI elements**: Consider adding animations and features that simulate feedback for user interactions.
- **Good website navigation**: Including clear and concise navigational elements should be considered. This could be searching, filtering and sorting algorithms to help users locate what they need.
- Professional looking feel: User’s would have more trust and give more credibility in a site that looks more professional and thought-out.
- **Accessibility**: Increasing the accessibility of a site would include allowing a wide range of different users to access the use the website. Features such as contrasting colours and bold fonts can increase the readability of a site.
- Segmenting items: Web elements that are encased in boxes/cards/tiles can break up information which increases readability for users.
- **Information density**: Too much or too little information may deter users from using the website. As NTTL’s purpose is to display information, it is crucial that only information that is relevant to the sites purpose is included and displayed in a readable format.
- **Mobile and desktop designs have to be equally strong**: Based on questionnaire results and interviews, participants did want to see both a mobile and desktop forward design.

#### Overall Negatives

- **Too much to process**: Avoid smaller font sizes to fit more content on the page. This may only exacerbate the issue. It may also be important to separate content clearly and only sticking to relevant information is preferred over impressive graphics and animations.
- **Formatting issues**: Experimenting with different CSS formats and reactive elements is key to solving any formatting issues and bugs. Things such as overlapping elements should be avoided when possible.
- **Interactions with elements were unclear in some cases**: Implementing clear interactions and feedback are crucial to user experience given interview results. It should also be considered that not all features should have interactivity just for the sake of adding it.
- **Intrusive and Irrelevant elements were heavily criticised**: The design should consider only implementing the necessities. Furthermore, features that aren’t expected to be on the site should not be considered.


# First Development Stage

## Mock-ups

Initial low-fidelity designs were hand drawn on my tablet. They were then implemented in Figma with colour. High-fidelity designs were coded on VS code in HTML using CSS and JS files. Tailwind was used for CSS designs. The designs were all based on synthesised user feedback from the interviews and questionnaires. I developed designs for all screen sizes. The first designs I made (which were the most important parts of the site) were the **homepage** and **Fixtures and Results** pages. 

## Homepage Designs

### Low-Fidelity Design
<img width="1233" height="594" alt="image" src="https://github.com/user-attachments/assets/b2ee80e6-ae3c-4e7c-8989-e6cd2533970d" />

This design was drawn up on my Samsung Tablet. It sets the shape and tone for the rest of the site, such as the content that is displayed, and how its displayed. Although the design wasn't complete, it was enough for me to start working on a medium-fidelity prototype through Figma. 

### Mid-Fidelity Design
<img width="1340" height="974" alt="image" src="https://github.com/user-attachments/assets/401385b3-cb68-4438-9a85-23aed9eb5358" />

This design is an adaptation of the Low-Fidelity. It adds colour and dummy data filled into corresponding sections. It takes the blue that is used in the original site. I also made interactions clearer for users, such as adding arrows for users to flick through match cards. Furthermore, I intentionally made the winners clear on the score cards, so information can be seen clearly and quickly. Text font and colours were picked intentionally too. It uses the same font as the Norwich Table Tennis League website. The darker gradient along the right hand side headers are to make it more readable for users. 

### High-Fidelity Design
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b2f1820f-da04-4cc6-a38c-b823df889ebc" />

This is the High-Fidelity Desktop page. It is very similar to the Medium-Fidelity design. The season table now includes clearer, segmented rows for each team with nicely spaced columns. The news tab now features a "read more" button as well as previous and next buttons to show different news articles. There are also some interactions included on the page too where hovering over match cards would cause them to slightly enlarge, and swiping left and right to reveal match cards. 

<img width="666" height="726" alt="image" src="https://github.com/user-attachments/assets/38f0501c-9a24-42b6-a5ae-6b1be80d216e" />

This shows a new section **player rankings**. This section showed rankings of the top ten players in each division. This is another feature that I deemed as important content that the users may want to see.

<img height="500" alt="image" src="https://github.com/user-attachments/assets/8c345779-5b6e-49e5-9394-bc409a4c21ac" /><img height="500" alt="image" src="https://github.com/user-attachments/assets/c3207321-cb6c-480f-bcf1-c67c93925b77" />

These are screenshots of the site on a mobile device. A dropdown menu was implemented for the headers. The stack is also different, with news floating to the top of the page rather than on the side. 

## Fixtures and Results

On the Norwich Table Tennis League website, there is only a dropdown menu rather than a dedicated page for fixtures and results. Furthermore, the dropdown menu is messy and cluttered. 

## Backend Architecture

Loading data dynamically was crucial for the development of this project; it was just as crucial as the front-end. For the researcher to host the site, they had to implement methods to dynamically load HTML elements as well as content on the pages. NodeJS played a huge roll in the back-end development. It was the main structure that allowed anything to be dynamically loaded, such as TailwindCSS or pulling content from Text, JavaScript Object Notation (JSON) and Comma Separated Value (CSV) files. It also allowed me to locally host the site during development which aided in their research for designing on multiple devices. I was able to view their site on several other devices which helped them test the sizes of elements.





