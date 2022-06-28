# Data Visualization - Mini Project : Baby names

## By Davide GARCIA CIVIERO, Tancrède HAYER, Victor LEDEZ

### Télécom Paris - June 2022

For this project, we had different approaches :
- Firstly we tried to implement our sketches with D3 framework
- Then we implemeted it with Tableau software

We decided to go with the Tableau software because it was easier to implement our visualizations.

### Visualization explanation
In this section we will explain our approach and how we conceived the different visualizations in our dashboard.

#### Visualization 1 : France Map
<img width="830" alt="Capture d’écran 2022-06-28 à 16 11 28" src="https://user-images.githubusercontent.com/56386900/176200383-bd47b4ac-9f05-42cb-9d9b-7e3212df0c7d.png">

This is a map of France that indicates the popularity of a selected name in a selected year. The popularity is given by region, for this we encoded the name popularity with the color : the more a name is popular, the more the region is colored in blue (otherwise it is colored green). This is a good solution because it highlight immediatly the regions were a name is popular.
Furthermore, if some regions don't have the selected name, the region is not displayed (it remains white), which emphasises when names are rare in some regions. <br>
<br>

#### Visualization 2 : Name popularity by region histogram
<img width="419" alt="Capture d’écran 2022-06-28 à 16 16 45" src="https://user-images.githubusercontent.com/56386900/176201649-8f265afd-65b6-43e6-aff8-24f526a019ae.png">

This histogram shows the regions where the selected name is the most popular. Thus we can see which are the four regions where the name is the most popular in a selected year. <br>
<br>

#### Visualization 3 : Name popularity by year histogram

<img width="409" alt="Capture d’écran 2022-06-28 à 16 21 28" src="https://user-images.githubusercontent.com/56386900/176202806-0fb78c43-2994-4fc0-ab66-294897ddc502.png">

In the range of the selected year, in this visualization, we wanted to represent the years where the name was the most popular. This visualization shows if there are some trends in time, if some names remained popular through the years or became suddenly impopular.<br>
<br>

#### Visualization 4 : Treemap of names by years

<img width="408" alt="Capture d’écran 2022-06-28 à 16 24 26" src="https://user-images.githubusercontent.com/56386900/176203635-a3f6d728-9ef4-4c01-bb77-a21c9ab0b47c.png">

We wanted to display this visualization because we think it is a great graph and we wanted to know how to implement it in Tableau. It dis
plays what are the names popularity by years : the square/rectangle area is binded to the name popularity. It is also a great visualization because it shows all the names and their popularity, not only the one selected. Thus, it gives a more general overview of names' popularity. <br>
<br>

#### Other tools
<img width="163" alt="Capture d’écran 2022-06-28 à 16 33 02" src="https://user-images.githubusercontent.com/56386900/176205784-ce5f70ce-af78-4b03-83b4-3f5f7e4f5632.png">

To have a better understanding of the data, we implemented two tools :
- A selecting box, that allows the user to select which name he wants to get insights about.
- A sliding bar, that allows the user to select the year or the range of years he wants. 
- A simple legend showing how the minimum and maximum occurences of the name. <br>
<br>
Finally, we wanted to fit all these visualizations in a single dashboard. Indeed, it is more useful for a user to have a single dashboard that is interactive so he can choose the range of study of the data. It gives the following results : <br>

<img width="985" alt="Capture d’écran 2022-06-28 à 16 36 30" src="https://user-images.githubusercontent.com/56386900/176206591-30dd4c58-e979-481d-bbc7-ca3b6ead49aa.png">


