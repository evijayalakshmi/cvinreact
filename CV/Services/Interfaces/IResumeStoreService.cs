using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cv.Models;

namespace cv.Services {
    public interface IResumeStoreService {
        ResumeData Get(string id);

        ResumeData Create(ResumeData resume);

        IReadOnlyCollection<ResumeData> TryGetByUser(string emailId);

        void Remove(string id);
    }
}
