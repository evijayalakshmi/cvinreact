﻿using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace cv.Models {

    public class ResumeData {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("User Email")]
        public string UserEmail { get; set; }

        [BsonElement("User Name")]
        public string UserName { get; set; }

        [BsonElement("Resume Name")]
        public string Name { get; set; }

        [BsonElement("Created Time")]
        public DateTime CreatedTime { get; set; }

        [BsonElement("Updated Time")]
        public DateTime UpdatedTime { get; set; }

        [BsonElement("Personal Info")]
        public PersonalInfo PersonalInfo { get; set; }

        [BsonElement("Experiences")]
        public IEnumerable<Experience> Experiences { get; set; }

        [BsonElement("Educations")]
        public IEnumerable<Education> Educations { get; set; }

        [BsonElement("Languages")]
        public IEnumerable<Language> Languages { get; set; }

        [BsonElement("LifePhilosophy")]
        public string LifePhilosophy { get; set; }

        [BsonElement("Achievements")]
        public IEnumerable<string> Achievements { get; set; }

        [BsonElement("Strengths")]
        public IEnumerable<string> Strengths { get; set; }

    }

    public class PersonalInfo {

        [BsonElement("Name")]
        public string Name { get; set; }

        [BsonElement("CurrentOccupation")]
        public string CurrentOccupation { get; set; }

        [BsonElement("Location")]
        public string Location { get; set; }

        [BsonElement("PhoneNumber")]
        public string PhoneNumber { get; set; }

        [BsonElement("Email")]
        public string EMail { get; set; }

        [BsonElement("LinkedIn")]
        public string LinkedIn { get; set; }

        [BsonElement("GitURL")]
        public string GitURL { get; set; }

        [BsonElement("BlogURL")]
        public string BlogURL { get; set; }
    }

    public class Experience {

        [BsonElement("Title")]
        public string Title { get; set; }

        [BsonElement("Company")]
        public string Company { get; set; }

        [BsonElement("Location")]
        public string Location { get; set; }

        [BsonElement("From")]
        public string FromDate { get; set; }

        [BsonElement("To")]
        public string ToDate { get; set; }

        [BsonElement("RolesAndResponsibilities")]
        public IEnumerable<string> RolesAndResponsibilities { get; set; }
    }

    public class Education {
        [BsonElement("Stream")]
        public string Stream { get; set; }

        [BsonElement("University")]
        public string University { get; set; }

        [BsonElement("From")]
        public string FromDate { get; set; }

        [BsonElement("To")]
        public string ToDate { get; set; }
    }

    public class Language {
        [BsonElement("Name")]
        public string Name { get; set; }

        [BsonElement("Level")]
        public int Level { get; set; }
    }

}
