using System.Collections.Generic;
using System.Linq;
using cv.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace cv.Services {
    public class ResumeStoreService {
        private readonly IMongoCollection<ResumeData> _resumes;

        public ResumeStoreService(IConfiguration config) {
            var client = new MongoClient(config.GetConnectionString("resumedb"));
            var database = client.GetDatabase("resumedb");
            _resumes = database.GetCollection<ResumeData>("resumes");
        }

        public ResumeData Create(ResumeData resume) {
            _resumes.InsertOne(resume);
            return resume;
        }
    }
}
