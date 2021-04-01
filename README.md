# Lab 5: Simplify polyline on the map

ENGO 651 - Adv. Topics on Geospatial Technologies

## Overview:
This website is an assignment for the 5th lab (Adv. Topics on Geospatial Technologies). on this website, a user can draw a polyline on the map of Calgary. once the user clicking on a button called simplify, on the website, a simplified version of the polyline is drawn on the map in a different color. Moreover, a user can draw and delete multiple polylines to be simplified on the map.

## System requirement:
- Any platform you like such as Windows, Linux, and so on. 
- Use any browsers (Firefox, Google Chrome,...) to display the html pages. 
- Python 3.6 or higher

## Libraries required to install:
- Flask 


## Tools and Resources are used:
- HTML 5
- CSS
- Python flask 
- Javascript
- [Leaflet](https://leafletjs.com/)
- [GeoJSON](https://leafletjs.com/examples/geojson/)
- [Turf.js](https://turfjs.org/)


## How to use the webpage:
* run `application.py` in any IDE you like.
* You will find a line in the console `Running on <server link>` where `<server link>` is the link of the server of the flask is working on. In my case, the server link is `http://127.0.0.1:5000/`. 
* Copy the server link and paste it in the link box of any browser you like to go to the website.
* 
![map](https://user-images.githubusercontent.com/26576895/113342420-c18db380-932e-11eb-9a48-3d109b9a8ed1.JPG)

* Looking closely at the image above, you can see a map of the city of Calgary. On the top right of the map, the drawing toolbar exists to draw a polyline. Also, the user can simplify polyline by clicking on **Simplify** button, at the bottom left of the map.
* once a user clicks on the polyline button on the toolbar, he can draw the polyline on the map, as you see below.

![drawing](https://user-images.githubusercontent.com/26576895/113343351-00703900-9330-11eb-97a4-929def0f86f6.JPG)

* After drawing a polyline, a user should click on finish to indicate that the drawing is completed, see the image below.

![finish](https://user-images.githubusercontent.com/26576895/113344103-f438ab80-9330-11eb-8752-276afda89ebe.JPG)

* Then, the polyline is created like the one in the below image.

![poly_line](https://user-images.githubusercontent.com/26576895/113344319-3366fc80-9331-11eb-9373-b03fc7092cda.JPG)

* If the user clicks on the **Simplify** button, he will get the simplified line in blue color, as you see below.

![simplifed_line](https://user-images.githubusercontent.com/26576895/113344710-bab47000-9331-11eb-9396-1eeb3821ea36.JPG)

* Moreover, the user can click on the delete button, as indicated below, to delete the polyline on the map to draw a new one. 

![delete_button](https://user-images.githubusercontent.com/26576895/113345086-3f9f8980-9332-11eb-82b4-c2bf5957b542.png)

* After deleting the polyline, the simplified line will be only existed on the map, see the image below.

![after_delete](https://user-images.githubusercontent.com/26576895/113345298-8ee5ba00-9332-11eb-8f4c-689055a55fd5.JPG)

* The user can do draw a new polyline and do the same processes again. 



## what’s contained in each file:
- `application.py`: is responsible for performing python flask coding and rendering `polyline_on_map.html` file.
- `templates/polyline_on_map.html`: has the structure of the webpage and all links of Leaflet code.   
- `static/styles/polyline_on_map.css`: this is a specified style sheet file for `polyline_on_map.html` file.
- `static/js/polyline_on_map.js`: all algorithms related to drawing, remove, and simplifying polylined are implemented in this file.

## Demo:
- You can find the demo video for this webpage at this [**Link**]()


