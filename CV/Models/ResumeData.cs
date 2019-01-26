using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace cv.Models {

    public class ResumeData {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Personal Info")]
        public PersonalInfo PersonalInfo { get; set; }
    }

    public class PersonalInfo {

        [BsonElement("Name")]
        public string Name { get; set; }

        [BsonElement("Location")]
        public string Location { get; set; }

        [BsonElement("PhoneNumber")]
        public string PhoneNumber { get; set; }

        [BsonElement("Email")]
        public string EMail { get; set; }
    }

}
