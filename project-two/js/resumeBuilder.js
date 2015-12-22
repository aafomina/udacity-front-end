function displayBio() {
  var bio = {
    "name": "Angelina Fomina",
    "role": "Co-founder of ParseHub",
    "contacts": {
        "email": "angelina.fomina@gmail.com",
        "mobile": "647-207-2942",
        "github": "aafomina",
        "twitter": "@aafomina",
        "location": "Toronto, Canada"
    },
    "bioPic": "images/angelina.jpg",
    "welcomeMessage": "Having fun exploring the Udacity front-end dev course!",
    "skills": [
        "CSS",
        "Sales",
        "UI/UX",
        "Growth Hacking"
    ],
    "menu": [
      {
        "link": "workExperience",
        "name": "Work"
      },
      {
        "link": "projects",
        "name": "Projects"
      },
      {
        "link": "education",
        "name": "Education"
      },
      {
        "link": "map",
        "name": "Places Lived"
      },
    ]
  }
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGitHub);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBioPic);
  var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMessage);
  $("#header").append(HTMLskillsStart);
  if (bio.skills.length > 0) {
    for (skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  };
  for (nav in bio.menu) {
    $("#header").append(HTMLnavStart);
    var formattedNavLink = HTMLnavLink.replace("%data%", bio.menu[nav].link);
    var formattedNavName = HTMLnavName.replace("%data%", bio.menu[nav].name);
    var formattedNavItem = formattedNavLink + formattedNavName;
    $("#main-nav").append(formattedNavItem);
  };
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#footerContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#footerContacts").append(formattedEmail);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#footerContacts").append(formattedTwitter);
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#footerContacts").append(formattedGitHub);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#footerContacts").append(formattedLocation);
}
displayBio();

function displayWork() {
  var work = {
    "jobs": [
      {
        "employer": "ParseHub",
        "title": "Co-founder",
        "location": "Toronto, Canada",
        "dates": "2014 - Present",
        "description": ["Co-founder of a data SaaS start-up.","lala"]
      },
      {
        "employer": "OpenInvite",
        "title": "Co-founder",
        "location": "Toronto, Canada",
        "dates": "2013 - 2014",
        "description": ["Co-founder of an events app.","lala"]
      },
      {
        "employer": "Digital Jungle",
        "title": "Marketing Coordinator",
        "location": "Bejing, China",
        "dates": "2012",
        "description": ["Worked in Beijing, China for 9 months","lala"]
      },
      {
        "employer": "SunLife Financial",
        "title": "Coportate Marketing and Communications",
        "location": "Toronto, Canada",
        "dates": "2011",
        "description": ["Corporate public relations and marketing at insurance company.", "lala"]
      }
    ]
  }
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkTitle =  HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedWorkEmployer =  HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkDates =  HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedWorkLocation =  HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedWork =  formattedWorkEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkLocation;
    $(".work-entry:last").append(formattedWork);
    $(".work-entry:last").append(HTMLworkDescriptionStart);
    for (role in work.jobs[job].description) {
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[role]);
      $(".roles:last").append(formattedWorkDescription);
    }
  }
}
displayWork();

projects.display = function() {
  var projects = {
    "projects": [
      {
        "title": "Cansbridge Fellowship",
        "dates": "2013 - Present",
        "description": "Established a not-for-profit program that sends University students on an internship to China.",
        "images": ["images/cansbridge.png","images/cansbridge2.png"]
      },
      {
        "title": "NextElective",
        "dates": "2014",
        "description": "Web development, UI/UX for online mentorship program that connects future students to current students.",
        "images": ["images/nextelective.png"]
      },
      {
        "title": "FreshSight Queen's",
        "dates": "2012 - 2013",
        "description": "Founding member of a pro-bono not-for-profit consulting group, completely run by students.",
        "images": ["images/freshsight.png"]
      }
    ]
  }
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle =  HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedProjectDates =  HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedProjectDescription =  HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    var formattedProjects =  formattedProjectTitle + formattedProjectDates + formattedProjectDescription;
    $(".project-entry:last").append(formattedProjects);
    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedProjectImage =  HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    }
  }
}
projects.display();

education.display = function() {
  var education = {
    "schools": [
      {
        "name": "Queen's University",
        "location": "Kingston, Canada",
        "degree": "Bachelor",
        "major": "Commerce",
        "dates": "2013",
        "url": ""
      },
      {
        "name": "University of Business and Economics",
        "location": "Beijing, China",
        "degree": "Exchange",
        "major": "International Business",
        "dates": "2012",
        "url": ""
      }
    ],
    "onlineCourses": [
      {
        "title": "Front-end Development Course",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com"
      }
    ]
  }
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName =  HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree =  HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolDates =  HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedSchoolLocation =  HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    var formattedSchools = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor;
    $(".education-entry:last").append(formattedSchools);
  }
  for (course in education.onlineCourses) {
    $("#education").append(HTMLonlineClassesStart);
    var formattedOnlineTitle =  HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedOnlineSchool =  HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedOnlineDates =  HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    var formattedOnlinelURL =  HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    var formattedOnlineCourses = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlinelURL;
    $(".online-education").append(formattedOnlineCourses);
  }
}
education.display();

/*
$(document).click(function(loc) {
  console.log(loc.pageX, loc.pageY);
});
*/

$("#mapDiv").append(googleMap);