﻿using System.Collections.Generic;
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

        public ResumeData Get(string id) {
            return _resumes.Find<ResumeData>(res => res.Id == id).FirstOrDefault();
        }

        public IReadOnlyCollection<ResumeData> TryGetByUser(string emailId) {
            return _resumes.Find(_ => _.UserEmail == emailId).ToListAsync().Result;
        }

        public void Remove(string id) {
            _resumes.DeleteOne(res => res.Id == id);
        }

        public void Update(string id, ResumeData resume) {
            _resumes.ReplaceOne(res => res.Id == id, resume);
        }

    }
}