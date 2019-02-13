using System.Collections.Generic;
using System.Linq;
using cv.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace cv.Services {
    public class ResumeStoreService : IResumeStoreService {
        private readonly IMongoCollection<ResumeData> _resumes;

        public ResumeStoreService(IConfiguration config) {
            var client = new MongoClient(config.GetConnectionString("resumedb"));
            var database = client.GetDatabase("CV");
            _resumes = database.GetCollection<ResumeData>("ResumeData");
        }

        public ResumeData Create(ResumeData resume) {
            _resumes.InsertOne(resume);
            return resume;
        }

        public IReadOnlyCollection<ResumeData> TryGetByUser(string emailId)
        {
            return _resumes.Find(_ => _.UserEmail == emailId).ToListAsync().Result;
        }
    }
}
