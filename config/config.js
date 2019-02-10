/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "fr",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "MMM-GoogleBirthdaysProvider"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				clockBold: true,
			}
		},
		{
			module: "calendar",
			position: "bottom_left",
			config: {
				colored: true,
				calendars: [
					{
						url: "https://www.data.gouv.fr/en/datasets/r/139ef8d5-f2ae-41fc-bc3a-d0e90a9ab7ad",
						symbol: "umbrella-beach",
					},
					{
						url: "http://localhost:8080/mmm-googlebirthdaysprovider",
						symbol: "birthday-cake",
						color: "#9370DB"
					},
					{
						url: "http://www.icalx.com/public/abuisset/Anthony_BUISSET_Calendar.ics",
						symbol: "calendar",
						color: "#008000"
					},
				]
			}
		},
		{
			module: "MMM-MyCommute",
			position: "top_left",
			config: {
				apikey: 'AIzaSyBSxQz79p9RWJTHHyyN8PvW1weFBKYhgqY',
				origin: "2200 chemin de saint claude, Antibes, France",
				//startTime: "07:00",
				//endTime: "23:00",
				//hideDays: "[0,6]",
				showSummary: true,
				colorCodeTravelTime: true,
				travelTimeFormat: "h[h] m[m]",
				moderateTimeThreshold: 1.1,
				poorTimeThreshold: 1.3,
				destinations: [
					{
						destination: "Amadeus Bel Air, Villeneuve Loubet, France",
						label: "Amadeus - Bel Air",
						mode: "driving",
						avoid: "tolls",
						//alternatives: true,
						//startTime: "07:00",
						//endTime: "10:00",
						//hideDays: [0,6]
					},
					{
						destination: "Rue des amandiers, Sophia Antipolis, France",
						label: "Amadeus - Sophia",
						mode: "driving",
						avoid: "tolls",
						//alternatives: true,
						//startTime: "07:00",
						//endTime: "10:00",
						//hideDays: [0,6]
					},
					{
						destination: "Ecole Saint Maymes, Antibes, France",
						label: "Crèche",
						mode: "driving",
						avoid: "tolls",
						//alternatives: true,
						//startTime: "07:00",
						//endTime: "10:00",
						//hideDays: [0,6]
					}
				]
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				//location: "Antibes, FR",
				locationID: "3037456",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "15893747aa4970ca847421ce882dca42"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			config: {
				//location: "Antibes, FR",
				locationID: "3037456",  //ID from https://openweathermap.org/city
				appid: "15893747aa4970ca847421ce882dca42",
				colored: true
			}
		},
		{
			disabled: true,
			module: 'MMM-GoogleTasks',
			header: "Google Tasks",
			position: "top_right",
			config: {
				listID: "MDQxODE0Mzc5ODM1ODY0NzEzNDA6MDow"
			}
		},
		{
			module: "MMM-kalliope",
			position: "upper_third",
			config: {
				title: "Kalliope"
			}
		},
		{
			module: "MMM-AVStock",
			position: "bottom_right",
			config: {
				apiKey: "30MXO9T26L1K8B5A",
				mode: "series",
				symbols: ["MSFT", "GOOG", "FB", "AAPL"],
				alias: ["Microsoft", "Google", "Facebook", "Apple"]
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Le Monde",
						url: "https://www.lemonde.fr/rss/une.xml"
					},
					{
						title: "BFM TV",
						url: "https://www.bfmtv.com/rss/info/flux-rss/flux-toutes-les-actualites/"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
