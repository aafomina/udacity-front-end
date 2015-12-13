var bio = {
    "name": "Angelina Fomina",
    "role": "Co-founder of ParseHub",
    "contacts": {
        "email": "angelina.fomina@gmail.com",
        "mobile": "647-207-2942",
        "github": "aafomina",
        "twitter": "@aafomina",
        "location": "Toronto"
    },
    "bioPic": "images/angie.jpg",
    "welcomeMessage": "Having fun exploring the Udacity front-end dev course!",
    "skills": [
        "CSS",
        "Sales",
        "UI/UX",
        "Growth Hacking"
    ]
}

var education = {
  "schools": [
    {
      "name": "Queen's University",
      "location": "Kingston",
      "degree": "Bachelor",
      "majors": "Commerce",
      "dates": "2013",
      "url": ""
    },
    {
      "name": "University of Business and Economics",
      "location": "Beijing",
      "degree": "Exchange",
      "majors": "International Business",
      "dates": "2012",
      "url": ""
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-end Development Course",
      "school": "Udacity",
      "dates": "2015",
      "url": ""
    }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "ParseHub",
      "title": "Co-founder",
      "location": "Toronto",
      "dates": "2014 - Present",
      "description": [
        "Co-founder of a data start-up.",
        "Leading marketing, business development, UI/UX, sales"
      ]
    },
    {
      "employer": "OpenInvite",
      "title": "Co-founder",
      "location": "Toronto",
      "dates": "2013 - 2014",
      "description": "Co-founder of an events start-up."
    },
    {
      "employer": "Digital Jungle",
      "title": "Marketing Coordinator",
      "location": "Bejing",
      "dates": "2012",
      "description": "Marketing and growth at social media analytics software company."
    },
    {
      "employer": "SunLife Financial",
      "title": "Coportate Marketing and Communications",
      "location": "Toronto",
      "dates": "2011",
      "description": "Corporate public relations and marketing at insurance company."
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Cansbridge Fellowship",
      "dates": "2013 - Present",
      "description": "Established a not-for-profit program that send University students on an internship to China.",
      "images": "http://www.cansbridgefellowship.com/"
    },
    {
      "title": "NextElective",
      "dates": "2014",
      "description": "Web development, UI/UX for online mentorship program that connects future students to current students",
      "images": "http://www.nextelective.com/"
    },
    {
      "title": "FreshSight Queen's",
      "dates": "2012 - 2013",
      "description": "Founding member of a pro-bono not-for-profit consulting group, completely run by students",
      "images": "http://www.freshsightqueens.ca/index.html"
    }
  ]
}

for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var formattedTitle =  HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployer =  HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedDates =  HTMLworkDates.replace("%data%", work.jobs[job].dates);
  var formattedLocation =  HTMLworkLocation.replace("%data%", work.jobs[job].location);
  var formattedDescription =  HTMLworkDescription.replace("%data%", work.jobs[job].description);
  var formattedWork =  formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
  $(".work-entry:last").append(formattedWork);
}