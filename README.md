# Lab 5: Simplify polyline on the map

ENGO 651 - Adv. Topics on Geospatial Technologies

## Overview:


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


## How to use the webpage:
* After installing all libraries required in your environment, run `application.py` in any IDE you like.
* You will find a line in the console `Running on <server link>` where `<server link>` is the link of the server of the flask is working on. In my case, the server link is `http://127.0.0.1:5000/`. 
* Copy the server link and paste it in the link box of any browser you like to go to the website.

![lab3_homepage](https://user-images.githubusercontent.com/26576895/110139401-a5ecc700-7ddb-11eb-80d7-5432e3815b91.JPG)

* Looking closely at the image above, you can see a map of the city of Calgary. Above it, a search box is located that is utilized to search for building permits by date range. Moreover, you can switch between this map layer and my publish layer by clicking on **traffic map** below.
* If you click on the traffic map, you will see that map is replaced with my published map layer, as you see in the image below. If you want to return back to the first layer, click on **Gray map** on the bottom left of the web page.

![my_layer](https://user-images.githubusercontent.com/26576895/110140707-0a5c5600-7ddd-11eb-991c-5bb1698fc2fe.JPG)

* For searching for building permits at specific date range, Choose any date range you want from the date range picker widget, then, click on the **Apply** button on this widget. After that, Click on the **Search** button, as you see below.

![search](https://user-images.githubusercontent.com/26576895/109386591-476ba880-7904-11eb-99f0-56a40fe3e6b4.JPG)

* During the searching processing, you will see a loader indicator to indicate that the program is still searching for suitable markers.

![indicator](https://user-images.githubusercontent.com/26576895/110146066-ca986d00-7de2-11eb-831a-82058b76e26b.png)

* After searching, you will find markers and clusters of building permits in Calgary, where a marker represents a single building permit, but the cluster represents the group of the neighboring markers (building permits).

![after_searching](https://user-images.githubusercontent.com/26576895/109386784-d4633180-7905-11eb-991e-0edbccbb7fbc.JPG)

and you can see it, also, on my published layer.

![mylayer_marker](https://user-images.githubusercontent.com/26576895/110147007-df293500-7de3-11eb-8a7a-f32be4314554.JPG)

* By clicking on any cluster, the map will zoom in automatically to get the neighboring markers or other clusters. if you click on any new cluster that is created, the map will zoom in to get other markers and clusters and so on till you get your desired marker. 
* If you click on any marker, you will get the pop content message that includes all information about building permits, including `issueddate`, `workclassgroup`, `contractorname`, `communityname` and `originaladdress`, as you see below.

![popcontent](https://user-images.githubusercontent.com/26576895/109387046-8e0ed200-7907-11eb-8677-23f57ff4727a.JPG)

* Sometimes, some markers are overlapping, i.e., multiple building permits located at the same location. Therefore, I handled it by using Leaflet Plug-in, in which all overlapping markers are integrated together in a single marker and if you click on this marker, you will get all overlapping markers inside it, as you see in the image below. 

![overlapping_markers](https://user-images.githubusercontent.com/26576895/109388432-a8e54480-790f-11eb-9e23-a04ece1e500d.JPG)

* Finally, if you'd like to get another building permits in another date range, choose the new date range and click on **search** again and you will find that the map is refreshed and display the new matching result.

## what’s contained in each file:
- `application.py`: is responsible for python flask coding and getting JSON data from Open Calgary API dataset and then passes it to the `building_permit_search.html` file.
- `templates/building_permit_search.html`: has the structure of the webpage and all links of Leaflet code.   
- `static/styles/building_permit_search.css`: this is a specified style sheet file for `building_permit_search.html` file.
- `static/js/building_permit_search.js`: creating Leaflet map and date range widget algorithm are located in this file. Moreover, all algorithms after searching, such as adding markers to the map, handling overlapping markers, and markers clustering, is included, also.

## Demo:
- You can find the demo video for this webpage at this [**Link**](https://www.youtube.com/watch?v=CpdRWIwadKs&ab_channel=ahmedsayed)


