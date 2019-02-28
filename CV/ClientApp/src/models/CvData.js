export class CvData {

    getData() {
        return {
            personalInfo: {
                name: "Marissa Mayer",
                location: "Sunnyvale.CA",
                phoneNumer: "123456789",
                designation: "Business Woman & Proud Geek",
                email: "mmayer@yahoo-inc.com",
                linkedIn: "www.linkedin.com/marissa",
                gitURL: "",
                blog: "http://marissamayr.tumblr.com/"
            },
            experiences: [{
                title: "President & CEO",
                company: "Yahoo!",
                from: "july 2012",
                to: "Ongoing",
                location: "Sunnyvale, CA",
                rolesAndResponsibilities: [
                    "Led the $5 billion acquisition of the company with Verizon - the entity which believed most in the immense value Yahoo! has created",
                    "Built Yahoo's mobile, video & social businesses from nothing in 2011 to $1.6 billion in GAAP revenue in 2015",
                    "Tripled the conpany's mobile base to over 600 million monthly active users and generated over $1 billion of mobile advertising revenue last year"]
            }, {
                title: "Vice President of Location & Local Services",
                company: "Google",
                from: "Oct 2010",
                to: "July 2012",
                location: "Palo Alto.CA",
                rolesAndResponsibilities: [
                    "Positioned Google Maps as the world leader in moble maps and navigation",
                    "Oversaw 1000• engineers and product managers workingon Google Maps.Google Places and Google Earth.",
                ]
            }, {
                title: "Vice President of Search Products & UX",
                company: "Google",
                from: "Oct 2005",
                to: "July 2010",
                location: "Palo Alto.CA",
                rolesAndResponsibilities: ["Positioned Google Maps as the world leader in moble maps and navigation",
                    "Oversaw 1000• engineers and product managers workingon Google Maps.Google Places and Google Earth."
                ]
            }, {
                title: "Product Manager & Technical UILead",
                company: "Google",
                from: "Oct 2001",
                to: "July 2005",
                location: "Palo Alto.CA",
                rolesAndResponsibilities: [
                    "Appointed by the founder Larry Page in 2011 to lead the Product Management and UserInteraction teams",
                    "Optimized Google's homepage and A/B tested every minor detailto increase usability (incl. spacing betweenwords,color schemes and pixel-by-pixelelement alignment)",
                ]
            }, {
                title: "Product Engineer",
                company: "Google",
                from: "June 1999",
                to: "2001",
                location: "Palo Alto.CA",
                rolesAndResponsibilities: [
                    "Joined the company as employee #20 and female employee #1",
                    "Developed targeted advert sementin order to use users·search queries and show them related ads",
                ]
            }],

            achievements: [{
                icon: "fa fa-trophy fa-2x",
                heading: "Courage I had",
                content: "to take a sinking ship and try to make it float"
            }, {
                icon: "fa fa-hand-peace-o fa-2x",
                heading: "Persistence & Loyalty",
                content: "I showed despite the hard moments and my willingness to stay with Yahoo after the acquisition"
            }, {
                icon: "fa fa-line-chart fa-2x",
                heading: "Google's growth",
                content: "from a hundred thousand searches per day to over a billion"
            }, {
                icon: "fa fa-female fa-2x",
                heading: "Inspiring women in tech",
                content: "Youngest CEO in Fortune's list of 50 most powerful women"
            }],


            strengths: [["Hard-Working 18/24", "Persuasive", "Motivator&Leader"],
            ["User Experience", "Mobile Devices & Applications", "Product Management & Marketing"]],

            languages: [{ name: "English", level: 5 }, { name: "Spanish", level: 4 }, { name: "German", level: 3 }],

            educations: [{
                stream: "M.S in Computer Science",
                university: "Stanford University",
                icon: "fa fa-calendar",
                from: "Sep 1997",
                to: "June 1999"

            }, {
                stream: "B.S in Symbolic Systems",
                university: "Stanford University",
                icon: "fa fa-calendar",
                from: "Sep 1993",
                to: "June 1997"
            }],

            dayOfLife: [
                { task: "Publicly resolving issues with Yahoo! investors", percentage: 75 }, { task: "Building a business development strategy for yahoo's future after the Verizon acquisition", percentage: 20 }, { task: "Showing Yahoo! employees that their work has meaning", percentage: 85 },
                { task: "sleeping & dreaming  about work on the 38th floor of the Four Seasons Hotel in SF", percentage: 40 }, { task: "Spending time with Zachary, Mascalliser, and Sylvana", percentage: 90 },
                { task: "Baking cupcakes & creating spread-sheets for all of the needed ingradients", percentage: 30 }, { task: "Taking care of New York & San Francisco Ballet Jawbone by being a member of their boards ", percentage: 20 }
            ]
        };
    }

    getMyData() {
        return {
            personalInfo: {
                name: "Vijaya Lakshmi E",
                location: "Espoo",
                phoneNumber: "+xxxxxxxxxx",
                designation: "Software Developer",
                email: "vijaya.laxmi502@gmail.com",
                linkedIn: "www.linkedin.com",
                girURL: "www.github.com",
                blog: ""
            },
            experiences: [{
                title: "Software Trainee",
                company: "Kiva Helsinki Oy!",
                from: "January 2019",
                to: "Ongoing",
                location: "Helsinki",
                rolesAndResponsibilities: [
                    "Learning new technologies",
                    "Developing software applications"
                ]
            }, {
                title: "Software Programmer Trainee",
                company: "Deccansoft Software Solutions",
                from: "Mar 2015",
                to: "Dec 2015",
                location: "Hyderabad, India",
                rolesAndResponsibilities: [
                    "Developing web applications",
                    "Training sessions on C and c#",
                ]
            }],

            achievements: [{
                icon: "fa fa-trophy fa-2x",
                heading: "Courage I had",
                content: "Self-Learning"
            }, {
                icon: "fa fa-hand-peace-o fa-2x",
                heading: "Accomplishments",
                content: "Appreciation from CEO and Team Leaders for my work"
            }
            ],


            strengths: [["Hard-Working 18/24", "Confidence", "Motivator"],
            ["Designing", "Front-End Development",]],

            languages: [{ name: "English", level: 5 }, { name: "Hindi", level: 3 }, { name: "Finnish", level: 2 }],

            educations: [{
                stream: "B.Tech in Computer Science",
                university: "JNTUK",
                icon: "fa fa-calendar",
                from: "Sep 2010",
                to: "May 2014"

            }]
        };
    }

    getEmptyData() {
        return {
            personalInfo: {
                name: "",
                location: "",
                phoneNumer: "123456789",
                designation: "",
                email: "",
                linkedIn: "",
                gitURL: "",
                blog: ""
            },
            experiences: [],

            achievements: [],

            strengths: [],

            languages: [],

            educations: []
        };
    }
}
