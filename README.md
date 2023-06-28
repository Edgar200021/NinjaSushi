# E-commerce SushiShop_FrontEnd

## Description

E-commerce website for food

## Features

* Adding to cart
* Adding to favorites
* Product filters
* News filters
* Payment
* Registration/Login

## Technologies/libraries used

 * ReactJS
 * Redux Toolkit
 * Sass modules
 * Grid/Flexbox
 * ClassName Library
 * PropTypes Library 
 * Swiper Library

## Project Structure
```
├── public
│   └── icons                                # Website favicon, svg sprites
│  	└──img                     				       # Products photos
├── src
│   ├── assets             
│   	├── fonts  							               # Font familys
│   	├── icons                              # Icons  
│   	├── img  							                 # Some images    				
│   ├── components          
│  	 	├── Banner          
│   	├── Basket          
│   	├── BasketItem          
│   	├── BestOffer          
│   	├── BurgerMenu          
│   	├── Button          
│   	├── DownloadApp          
│   	├── Favorite          
│   	├── FormOrder          
│   	├── Input          
│   	├── Location          			        	# All components
│   	├── Logo          
│   	├── NewsFilter          			  
│   	├── NewsItem          
│   	├── NewsList          
│   	├── Notification          
│   	├── ProductFilter          
│   	├── ProductItem          
│   	├── ProductsList          
│   	├── Select          
│   	├── SingleItem          
│   	├── Spinner          
│   ├── constants  
│   	├── address.js  				            	# Address arrays
│   	├── category.js  			             		# Category arrays
│   	├── url.js  					              	# Global URL
│   ├── hooks   
│   	├── useNews.js   				            	# Own hook for filter news
│   	├── useProducts.js   			          	# Own hook for filter products
│   ├── layouts          
│  		 ├── Header          				          # A component that is always present on the page
│  		 ├── Footer          				          # A component that is always present on the page        
│   ├── pages          
│   	├── App          				            	# A component in which all applications are assembled
│   	├── Main                              # Main page of website
│   	├── News          					          # News page of website
│   	├── Drinks          
│   	├── Sushi          
│   	├── Rolles          			           	# Product category pages
│   	├── Sets          
│   	├── Sauce          
<<<<<<< HEAD
│   	├── NotFoundPage     				# The page in which it comes across automatically when the page you entered  											  the url does not exist   
│   	├── PlaceAnOrder    				# Ordering page      
│   	├── SingleItemPage      			# Separate page for each product             
=======
│   	├── NotFoundPage     			            # The page in which it comes across automatically when the page you entered in  the url does not exist   
│   	├── PlaceAnOrder    			            # Ordering page      
│   	├── SingleItemPage      		        	# Separate page for each product             
>>>>>>> 09f7b7da810367c3f0a8544487118712599110e4
│   ├── routes          
│   	├── routeConfig.js      		        	# An array with routes   
│   ├── services          
│   ├── store
│  	 	├── basketSlice.js				          	# Reducer for basket products
│   	├── favoriteSlice.js		          		# Reducer for favorite products
│   	├── newsSlice.js				            	# Reducer for news 
│   	├── index.js					              	# Global store
│   ├── styles  	        	
│  		├── absctract 	                     	# Mixins and variables are collected here 
│   	├── base 	        		   	          	# basic page styles
│   	├── utils 	        		   	        	# Helper classes 	        
│   ├── utils 
│	   ├── fetchData.js 				            	# Helper functions for request	
```

### Installing

```
git clone https://github.com/Edgar200021/NinjaSushi.git
npm install

```
## Getting Started

```
npx json-server -p 4000 db.json 
npx nodemon server.js 
npm start
```
