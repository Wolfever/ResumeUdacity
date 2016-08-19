/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
/*
changes to be made : 

+ bio.pic to biopic 
+ education.schools.major to majors
+ projects should contain dates

+ learn how to use for and foreach instead of forin loop

+(tried once) update append to append multiple items at the same time

+ include a map

+ double check before submission. 

+ Code to display footer should be placed inside bio.display function.

- Little understanding of the following sentence... 
line 95 As per provided objects schema type of this field should be an Array of Strings, 
not just a String. Don't forget to update display function below appropriately to append 
data in array via loop.

 */

 /*
    Some more changes to be made
    + projects.images to be array
    + education.schools.majors to be array 
    + changes made to the css
            increased font sizes. 
 */

var bio = {
    "name": "李江江",
    "role": "教师",
    "skills": ["英语", "教学", "网页制作"],
    "biopic": "images/myimage.jpg",
    "contacts": {
        "mobile": "18810667473",
        "email": "jgg.555@163.com",
        "github": "Wolfever",
        "location": "北京师范大学"
    },
    "location": "北京",
    "welcomeMessage": "欢迎阅读我的简历！"
};

var education = {
    "schools": [{
        "name": "北京师范大学",
        "dates": "2011年9月—2015年6月",
        "location": "北京",
        "degree": "学士学位",
        "majors": 
            ["英语"],
        "url": "http://www.bnu.edu.cn/"
    }],

    "onlineCourses": [{
        "school": "Udacity(优达学城)",
        "title": "前端工程师",
        "dates": "2016年8月 - 今",
        "achievement": "做完了前五个项目",
        "url": "https://www.udacity.com/"
    }, {
        "school": "Duolingo(多邻国)",
        "title": "法语",
        "dates": "2014年9月 - 2016年6月",
        "finishing time": "2016年3月",
        "url": "https://www.duolingo.com/",
        "achievement": "完成了所有课程。"

    }, {
        "school": "Bussu(博树)",
        "title": "法语",
        "dates": "2016年1月 - 今",
        "finishing time": "Now",
        "achievement": "完成了A1课程。",
        "url": "https://www.busuu.com"
    }]
};

var work = {
    "jobs": [{
        "employer": "教育部考试中心",
        "location": "北京中关村东路1号",
        "title": "外语测评处助理",
        "dates": "2015年9月至今",
        "description": "协助外语测评处处理日常事务，主要负责维护对外宣传网站，跟进量表工作网站的建设与管理，并负责部分网页美工任务。",
        "url": "http://cse.neea.edu.cn/"
    }]
};

var projects = {
    "projects": [{
        "title": "个人档案",
        "dates": "2016年8月11日",
        "description": "使用HTML5和CSS3对网页进行美工，网页将用来呈现自己在学习过程中完成的项目。",
        "images": ["images/portfolio.png"],
        "url": "https://wolfever.github.io/Udacity_FEND/"
    }]
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    // start contact items
    // Adding contact title
    $("#topContacts").append(HTMLcontactGeneric.replace("%data%", "联系方式"));
    // Adding contact items
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts['mobile']));

    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts['email']));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts['github']));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts['location']));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart.replace("Skills at a Glance:", "技能一览"));
        bio.skills.forEach(function(skill) {
            $("#skills").append(HTMLskills.replace("%data%", skill));
        });
    };
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts['mobile']));

    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts['email']));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts['github']));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts['location']));
};

work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    work.jobs.forEach(function(job){
        //appended individually, a </a> tag will appear immediately after 
        // employer, so I combined the employer and title. 
        var employer1 = HTMLworkEmployer.replace("%data%", job.employer);
        var title1 = HTMLworkTitle.replace("%data%", job.title);
        var firstline = employer1.concat(title1);
        var employerLink = firstline.replace("#", job.url); 
        $(".work-entry").append(employerLink);  
        //$(".work-entry").append(HTMLworkTitle.replace("%data%", work.jobs[job].title));
        $(".work-entry").append(HTMLworkDates.replace("%data%", job.dates));
        $(".work-entry").append(HTMLworkLocation.replace("%data%", job.location));
        $(".work-entry").append(HTMLworkDescription.replace("%data%", job.description));
    });
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school){
        var schoolLink = HTMLschoolName.replace("#", school.url);
        var name = schoolLink.replace("%data%", school.name);
        var degree = HTMLschoolDegree.replace("%data%", school.degree);
        var firstline = name.concat(degree);
        $(".education-entry").append(firstline);
        $(".education-entry").append(HTMLschoolDates.replace("%data%", school.dates));
        $(".education-entry").append(HTMLschoolLocation.replace("%data%", school.location));       
        school.majors.forEach(function(major){
            $(".education-entry").append(HTMLschoolMajor.replace("%data%", major));
        });       
    });
    
    $(".education-entry").append(HTMLonlineClasses);
    
    education.onlineCourses.forEach(function(onlinecourse){
        var name2 = HTMLonlineTitle.replace("%data%", onlinecourse.title);
        var degree2 = HTMLonlineSchool.replace("%data%", onlinecourse.school);
        var firstline2 = name2.concat(degree2);
        var HTMLonlineLink = firstline2.replace("#", onlinecourse.url);
        $(".education-entry").append(HTMLonlineLink);
        $(".education-entry").append(HTMLonlineDates.replace("%data%", onlinecourse["dates"]));
        $(".education-entry").append(HTMLonlineDescription.replace("%data%", onlinecourse["achievement"]));
        $(".education-entry").append(HTMLonlineURL.replace(/%data%/g, onlinecourse.url));
    });
};


projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    projects.projects.forEach(function(project){
        var projectLink = HTMLprojectTitle.replace("#", project.url);
         // the name is replaced in the next line. 
        $(".project-entry").append(projectLink.replace("%data%", project.title));
        $(".project-entry").append(HTMLprojectDates.replace("%data%", project.dates));
        $(".project-entry").append(HTMLprojectDescription.replace("%data%", project.description));
        $(".project-entry").append(HTMLprojectURL.replace(/%data%/g, project.url));
        project.images.forEach(function(image){
             $(".project-entry").append(HTMLprojectImage.replace("%data%", image));
        });
       // $(".project-entry").append(HTMLprojectImage.replace("%data%", project.images));
    
    })
};

if (work.jobs.length > 0) {
    work.display();
};

if (education.schools.length > 0 || education.onlineCourses.length > 0) {
    education.display();
};

if (projects.projects.length > 0) {
    projects.display();
};

if (bio) {
    bio.display();
}

//Displaying map

$("#mapDiv").append(googleMap);