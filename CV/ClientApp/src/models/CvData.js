

export class CvData {

    getData() {
        return {
            personalDetails: {
                Name: "Marissa Mayer",
                Designation: "Business Woman & Proud Geek",
                Email: "mmayer@yahoo-inc.com",
                blog: "http://marissamayr.tumblr.com/",
                Address: "Sunnyvale.CA"
            },
            experiences: [{
                title: "President & CEO",
                company: "Yahoo!",
                from: "july 2012",
                to: "Ongoing",
                location: "Sunnyvale, CA",
                responsibilities: [
                    "Led the $5 billion acquisition of the company with Verizon - the entity which believed most in the immense value Yahoo! has created",
                    "Built Yahoo's mobile, video & social businesses from nothing in 2011 to $1.6 billion in GAAP revenue in 2015",
                    "Tripled the conpany's mobile base to over 600 million monthly active users and generated over $1 billion of mobile advertising revenue last year"]
            }, {
                title: "Vice President of Location & Local Services",
                company: "Google",
                from: "Oct 2010",
                to: "July 2012",
                location: "Palo Alto.CA",
                responsibilities: [
                    "Positioned Google Maps as the world leader in moble maps and navigation",
                    "Oversaw 1000• engineers and product managers workingon Google Maps.Google Places and Google Earth.",
                ]
            }, {
                title: "Vice President of Search Products & UX",
                company: "Google",
                from: "Oct 2005",
                to: "July 2010",
                location: "Palo Alto.CA",
                responsibilities: []
            }, {
                title: "Product Manager & Technical UILead",
                company: "Google",
                from: "Oct 2001",
                to: "July 2005",
                location: "Palo Alto.CA",
                responsibilities: [
                    "Appointed by the founder Larry Page in 2011 to lead the Product Management and UserInteraction teams",
                    "Optimized Google's homepage and A/B tested every minor detailto increase usability (incl. spacing betweenwords,color schemes and pixel-by-pixelelement alignment)",
                ]
            }, {
                title: "Product Engineer",
                company: "Google",
                from: "June 1999",
                to: "2001",
                location: "Palo Alto.CA",
                responsibilities: [
                    "Joined the company as employee #20 and female employee #1",
                    "Developed targeted advert sementin order to use users·search queries and show them related ads",
                ]
            }],

            moments: [{
                icon: "fa fa-at",
                heading: "Courage I had",
                content: "to take a sinking ship and try to make it float"
            }, {
                icon: "fa fa-calendar fa-2x",
                heading: "Persistence & Loyalty",
                content: "Ishowed despite the hard moments and my willingness to stay with Yahoo after the acquisition"
            }, {
                icon: "fa fa-at",
                heading: "Google's   growth",
                content: "from a hundred thousand searches per day to over a billion"
            }, {
                icon: "fa fa-at",
                heading: "Inspiringwomen in tech",
                content: "Youngest CEOin Fortune's list of 50 most powerfulwomen"
            }],


            strengths: [["Hard-Working 18/24", "Persuasive", "Motivator&Leader"],
            ["User Experience", "Mobile Devices & Applications", "Product Management & Marketing"]],

            languages: [{ language: "English", level: 5 }, { language: "Spanish", level: 4 }, { language: "German", level: 3 }],

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
            }]
        }
    }
}
